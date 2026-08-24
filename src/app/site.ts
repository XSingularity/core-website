export const SITE_URL = 'https://www.xsingularity.dev';
export const CALENDLY = 'https://calendly.com/xsingularity/meet-us';

// Digits only, international format, no "+". Baked in at build time.
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';

export const DEFAULT_LEAD = 'Hola, vengo de xsingularity.dev y quiero el diagnóstico gratis.';

/** Click-to-chat link with the message already written. */
export function waHref(text: string = DEFAULT_LEAD) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Every necessity device ends in a conversation that already contains what
 * the owner told us. With a WhatsApp number it opens the chat; without one
 * it scrolls to the form and pre-fills the message (Contact listens).
 */
export function openLead(text: string) {
  if (typeof window === 'undefined') return;
  if (WHATSAPP_NUMBER) {
    window.open(waHref(text), '_blank', 'noopener,noreferrer');
    return;
  }
  window.dispatchEvent(new CustomEvent('xs:prefill', { detail: text }));
  document.getElementById('Contacto')?.scrollIntoView({ behavior: 'smooth' });
}
