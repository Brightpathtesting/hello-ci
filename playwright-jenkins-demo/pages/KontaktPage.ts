// pages/KontaktPage.ts
import { Page, expect } from "@playwright/test";
import { kontaktSelectors } from "../utils/selectors";

export class KontaktPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto("https://brightpathsolutions.de/kontakt", {
      waitUntil: "domcontentloaded",
    });
  }

  async assertFormLoaded() {
    await expect(
      this.page.locator(kontaktSelectors.form)
    ).toBeVisible();
  }

  async assertSubmitDisabled() {
    const submit = this.page
      .locator(kontaktSelectors.submitButton)
      .first();

    await expect(submit).toBeVisible();
    await expect(submit).toBeDisabled();
  }

  async assertHasInputFields() {
    const fields = this.page.locator(kontaktSelectors.inputFields);
    await expect.poll(async () => await fields.count()).toBeGreaterThan(0);
  }
}
