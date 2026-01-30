test('Navigation funktioniert', async ({ page }) => {
  await page.goto('https://brightpathsolutions.de');

  await page.click('text=Leistungen');
  await expect(page).toHaveURL(/leistungen/i);

  await page.click('text=Kontakt');
  await expect(page).toHaveURL(/kontakt/i);
});

