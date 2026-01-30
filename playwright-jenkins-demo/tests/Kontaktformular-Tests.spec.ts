import { test, expect } from "@playwright/test";

test("Kontaktformular: Smoke (Form lädt, Submit disabled)", async ({ page }) => {
  await page.goto("https://brightpathsolutions.de/kontakt", {
    waitUntil: "domcontentloaded",
  });

  const form = page.locator("form.wpcf7-form");
  await expect(form).toBeVisible();

  const submit = form.locator('input.wpcf7-submit, button[type="submit"]').first();
  await expect(submit).toBeVisible();

  // Erwartetes Verhalten: Submit ist disabled (Validierung / Spam-Schutz)
  await expect(submit).toBeDisabled();

  // ✅ RICHTIGER Weg: mindestens ein Eingabefeld vorhanden
  const fields = form.locator("input, textarea, select");
  await expect.poll(async () => await fields.count()).toBeGreaterThan(0);
});
