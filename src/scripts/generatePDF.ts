import playwright from "playwright";
import waitPort from "wait-port";
import path from "path";
import { fileURLToPath } from "url";
import { execSync, exec } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  // Build the resume page with vite
  execSync("npm run build");

  // Start serving the built Resume page at localhost:4173 so we can open it in playwright
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

  const outputFileName = `Ryan-Geyer-Resume-${new Date().toISOString()}.pdf`;

  await page.pdf({
    // The PDF will be 8.5 x 11 inches
    format: "Letter",
    // Include background colors/images
    printBackground: true,
    path: path.resolve(__dirname, "../../dist", outputFileName),
  });
  await browser.close();

  serveResumePageController.abort();
})();
