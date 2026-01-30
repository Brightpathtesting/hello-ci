import { test, expect } from "@playwright/test";

test('Seite lädt unter 3 Sekunden', async ({ page }) => {
  const start = Date.now();
  await page.goto('https://brightpathsolutions.de');
  const duration = Date.now() - start;

  expect(duration).toBeLessThan(3000);
});

