test.use({ viewport: { width: 375, height: 812 } });

test('Mobile Ansicht funktioniert', async ({ page }) => {
  await page.goto('https://brightpathsolutions.de');

  await expect(page.locator('nav')).toBeVisible();
});

