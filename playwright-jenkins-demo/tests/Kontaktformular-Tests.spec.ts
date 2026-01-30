import { test } from "@playwright/test";
import { KontaktPage } from "../pages/KontaktPage";

test("Kontaktformular: Smoke", async ({ page }) => {
  const kontaktPage = new KontaktPage(page);

  await kontaktPage.goto();
  await kontaktPage.assertFormLoaded();
  await kontaktPage.assertHasInputFields();
  await kontaktPage.assertSubmitDisabled();
});

