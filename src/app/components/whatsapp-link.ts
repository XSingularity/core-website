import type { Locale } from '../i18n/config';

// Digits only, international format, no "+" — e.g. 584121234567.
// Baked in at build time: this is a static export, so there is no runtime env.
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';

/** Click-to-chat link with the opening message already written. */
export function whatsappHref(locale: Locale) {
  const text = encodeURIComponent(
    locale === 'es'
      ? 'Hola, vengo de xsingularity.dev y quiero cotizar un proyecto.'
      : 'Hi, I came from xsingularity.dev and I would like a quote for a project.'
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
