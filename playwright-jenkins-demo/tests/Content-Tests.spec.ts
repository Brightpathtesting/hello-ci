import { test, expect } from "@playwright/test";

test("Kernbotschaft ist sichtbar", async ({ page }) => {
  await page.goto("https://brightpathsolutions.de");

  const matches = page.getByText(/QA|DevOps|CI\/CD/i);

  await expect.poll(async () => await matches.count()).toBeGreaterThan(0);
  await expect(matches.first()).toBeVisible();
});

