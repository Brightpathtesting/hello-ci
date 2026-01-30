test('Kontaktformular validiert Pflichtfelder', async ({ page }) => {
  await page.goto('https://brightpathsolutions.de/kontakt');

  await page.click('button[type="submit"]');

  await expect(
    page.getByText(/Pflichtfeld|required/i)
  ).toBeVisible();
});

