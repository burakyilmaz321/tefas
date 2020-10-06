const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch({slowMo: 1000});
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.tefas.gov.tr/FonAnaliz.aspx?FonKod=TCD
  await page.goto('https://www.tefas.gov.tr/FonAnaliz.aspx?FonKod=TCD');

  // Select elements
  const mainIndicators = await page.$('div[class="main-indicators"]');
  const fundGraph = await page.$('div[class="fund-graph"]');

  // Take screenshot
  await mainIndicators.screenshot({ path: `mainIndicators.png` });
  await fundGraph.screenshot({ path: `fundGraph.png` });

  // Close browser
  await browser.close();
})();
