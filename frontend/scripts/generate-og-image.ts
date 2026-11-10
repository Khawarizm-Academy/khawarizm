/**
 * One-off (repeatable) generator for `public/og-image.png` — the default
 * social-share image referenced by `src/seo/siteConfig.ts`. Renders a
 * 1200×630 brand card with the site's own fonts/colors via headless Chrome.
 * Run: `bun scripts/generate-og-image.ts`
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const html = `<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@700;800;900&family=Readex+Pro:wght@400;600&display=swap" rel="stylesheet" />
    <style>
      * { margin: 0; box-sizing: border-box; }
      body { width: 1200px; height: 630px; background: #0f1f45; position: relative; overflow: hidden; }
      .arc { position: absolute; border-radius: 999px 999px 0 0; opacity: 0.92; }
      .a1 { width: 220px; height: 320px; background: #e5b65c; bottom: 0; right: 90px; }
      .a2 { width: 300px; height: 440px; background: #24407c; bottom: 0; right: 250px; }
      .a3 { width: 190px; height: 280px; background: #3a5590; bottom: 0; right: 480px; opacity: 0.55; }
      .ring { position: absolute; border: 3px solid rgba(229,182,92,0.5); border-radius: 50%; }
      .r1 { width: 340px; height: 340px; top: -120px; left: -80px; }
      .r2 { width: 160px; height: 160px; bottom: 60px; left: 220px; border-color: rgba(255,255,255,0.18); }
      .content { position: absolute; top: 0; bottom: 0; left: 0; width: 620px; display: flex; flex-direction: column; justify-content: center; padding: 0 70px; }
      h1 { font-family: Cairo, sans-serif; font-weight: 900; font-size: 120px; line-height: 1.1; color: #ffffff; }
      p { font-family: 'Readex Pro', sans-serif; font-weight: 400; font-size: 40px; color: #e5b65c; margin-top: 18px; }
      .bar { width: 110px; height: 10px; background: #e5b65c; border-radius: 999px; margin-bottom: 34px; }
    </style>
  </head>
  <body>
    <div class="arc a2"></div>
    <div class="arc a1"></div>
    <div class="arc a3"></div>
    <div class="ring r1"></div>
    <div class="ring r2"></div>
    <div class="content">
      <div class="bar"></div>
      <h1>خوارزم</h1>
      <p>أكاديمية تقنية · استوديو رقمي</p>
    </div>
  </body>
</html>`;

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: "load", timeout: 60_000 });
  /** Wait for webfonts + a settle frame so shapes/text are fully laid out. */
  await page.evaluate(() => document.fonts.ready);
  await new Promise((resolve) => setTimeout(resolve, 800));
  const png = await page.screenshot({ type: "png" });
  const out = fileURLToPath(new URL("../public/og-image.png", import.meta.url));
  await mkdir(new URL("../public/", import.meta.url), { recursive: true });
  await writeFile(out, png);
  console.log("og-image.png written (1200×630)");
} finally {
  await browser.close();
}
