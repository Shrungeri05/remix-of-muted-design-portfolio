/**
 * Remembers where the visitor was on the home page when they opened a case study,
 * so "Back to work" (and the S logo) can return them to the same spot.
 */
const KEY = "home-scroll-y";

export const saveHomeScroll = () => {
  try {
    sessionStorage.setItem(KEY, String(Math.round(window.scrollY)));
  } catch {
    /* storage unavailable: fall back to the Work section */
  }
};

export const readHomeScroll = (): number | null => {
  try {
    const value = sessionStorage.getItem(KEY);
    return value === null ? null : Number(value);
  } catch {
    return null;
  }
};
