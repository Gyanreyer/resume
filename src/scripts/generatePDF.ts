import playwright from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  // Start serving the built Resume page at localhost:8080 so we can open it in playwright
  // We'll hook it up to an AbortController so we can kill the server when we're done
  const serveResumePageController = new AbortController();
  exec("npm run preview", {
    signal: serveResumePageController.signal,
  });

  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

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
