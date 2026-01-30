import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 812 } });

test('Mobile: Menü-Button ist sichtbar', async ({ page }) => {
  await page.goto('https://brightpathsolutions.de', { waitUntil: 'domcontentloaded' });

  // Viele Themes nutzen aria-label oder "Menu"
  const menuButton = page.getByRole('button', { name: /menu|menü|navigation/i });

  await expect(menuButton).toBeVisible();
});

