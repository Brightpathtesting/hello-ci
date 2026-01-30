import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Footer: Impressum und Datenschutz erreichbar", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.assertFooterVisible();

  await homePage.openImpressumFromFooter();
  await expect(page).toHaveURL(/impressum/i);

  await homePage.goto();
  await homePage.openDatenschutzFromFooter();
  await expect(page).toHaveURL(/datenschutz/i);
});

