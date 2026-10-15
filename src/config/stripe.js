// Stripe Configuration & Helper Functions

export const STRIPE_MEMBERSHIP_URL =
  import.meta.env.VITE_STRIPE_MEMBERSHIP_URL ||
  'https://buy.stripe.com/test_adc_membership_a10_week';

/**
 * Opens Stripe Checkout link in a new window/tab safely
 * @param {Event} [e] - Optional click event to preventDefault
 * @param {string} [customUrl] - Optional override URL
 */
export function openStripeCheckout(e, customUrl) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  const targetUrl = customUrl || STRIPE_MEMBERSHIP_URL;
  if (targetUrl && targetUrl !== '#') {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }
}

