test('Kernbotschaft ist sichtbar', async ({ page }) => {
  await page.goto('https://brightpathsolutions.de');

  await expect(
    page.getByText(/QA|DevOps|CI\/CD/i)
  ).toBeVisible();
});

