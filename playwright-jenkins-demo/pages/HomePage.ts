// pages/HomePage.ts
import { Page, expect } from "@playwright/test";
import { homeSelectors } from "../utils/selectors";

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto("https://brightpathsolutions.de", {
      waitUntil: "domcontentloaded",
    });
  }

  async assertHeroVisible() {
    await expect(
      this.page.locator(homeSelectors.heroHeading)
    ).toBeVisible();
  }

  async assertNavigationVisible() {
    await expect(
      this.page.locator(homeSelectors.navigation)
    ).toBeVisible();
  }

  async openLeistungen() {
    await this.page.click(homeSelectors.leistungenLink);
  }

  async openKontakt() {
    await this.page.click(homeSelectors.kontaktLink);
  }

  async assertFooterVisible() {
    await expect(
      this.page.locator(homeSelectors.footer)
    ).toBeVisible();
  }

  async openImpressumFromFooter() {
    await this.page.click(homeSelectors.impressumLink);
  }

  async openDatenschutzFromFooter() {
    await this.page.click(homeSelectors.datenschutzLink);
  }
}


