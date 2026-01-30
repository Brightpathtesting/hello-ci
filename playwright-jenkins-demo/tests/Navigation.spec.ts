import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Navigation: Leistungen & Kontakt erreichbar", async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.assertNavigationVisible();

  await home.openLeistungen();
  await expect(page).toHaveURL(/leistungen/i);

  // Falls du nach "Leistungen" keinen sichtbaren "Kontakt"-Link im Menü hast,
  // gehe lieber zurück zur Startseite und dann Kontakt:
  await home.goto();

  await home.openKontakt();
  await expect(page).toHaveURL(/kontakt/i);
});

