import playwright from "playwright";
import waitPort from "wait-port";
import path from "path";
import { fileURLToPath } from "url";
import { exec, execSync } from "child_process";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { minify } from "html-minifier";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  // Build the vite app
  execSync("npm run build");

  // Start serving the built resume page at localhost:4173 so we can open it in playwright
  // We'll hook it up to an AbortController so we can kill the server when we're done
  const serveResumePageController = new AbortController();
  exec("npm run preview", {
    signal: serveResumePageController.signal,
  });

  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Wait to make sure the port is open before we try to connect to it
  await waitPort({
    host: "localhost",
    port: 4173,
  });

  await page.goto("http://localhost:4173");
  // Ensure the page contents have been rendered before we proceed
  await page.waitForSelector("#resume", {
    timeout: 5000,
  });

  // Remove script tags and inline styles before we grab the contents of the page
  // so we can keep it 100% static
  await page.evaluate(async () => {
    // Remove all script tags from the page
    const reactScriptTags = document.querySelectorAll("script");
    reactScriptTags.forEach((scriptTag) => scriptTag.remove());

    // Inline all styles loaded via link tags
    const stylesheetLinkTags = document.querySelectorAll(
      "link[rel=stylesheet]"
    ) as NodeListOf<HTMLLinkElement>;

    await Promise.allSettled(
      Array.from(stylesheetLinkTags).map(async (stylesheetLinkTag) => {
        const stylesheetHref = stylesheetLinkTag.href;
        // Load the contents of the stylesheet as a string
        const cssContents = await (await fetch(stylesheetHref)).text();

        // Inject the css contents into a style tag
        const inlinedStyleElement = document.createElement("style");
        inlinedStyleElement.innerHTML = cssContents;
        document.head.appendChild(inlinedStyleElement);

        // Remove the link tag now that we've inlined the styles
        stylesheetLinkTag.remove();
      })
    );
  });

  // Get the HTML contents of the page as a string which we'll write to a file
  const pageContentHTML = await page.content();
  const minifiedPageContentHTML = minify(pageContentHTML, {
    removeComments: true,
    minifyCSS: true,
    collapseWhitespace: true,
  });

  const outputDir = path.resolve(__dirname, "../../dist/");

  // Make sure the dist directory exists
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }

  writeFileSync(
    path.resolve(outputDir, "index.html"),
    minifiedPageContentHTML,
    // Create the index.html file if it doesn't exist, and overwrite it if it does
    { flag: "w" }
  );

  // Print the page as a PDF
  const pdfFileName = `Ryan-Geyer-Resume.pdf`;

  await page.pdf({
    // The PDF will be 8.5 x 11 inches
    format: "Letter",
    // Include background colors/images
    printBackground: true,
    path: path.resolve(outputDir, pdfFileName),
  });
  await browser.close();

  serveResumePageController.abort();
})();
