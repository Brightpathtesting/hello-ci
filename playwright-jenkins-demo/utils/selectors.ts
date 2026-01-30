// utils/selectors.ts

export const homeSelectors = {
  heroHeading: 'h1',
  navigation: 'header',
  footer: 'footer',

  // Navigation Links
  leistungenLink: 'text=Leistungen',
  kontaktLink: 'text=Kontakt',

  // Footer Links (Beispiele)
  impressumLink: 'text=Impressum',
  datenschutzLink: 'text=Datenschutz',
};

export const kontaktSelectors = {
  form: 'form.wpcf7-form',
  submitButton: 'input.wpcf7-submit, button[type="submit"]',
  inputFields: 'input, textarea, select',
};
