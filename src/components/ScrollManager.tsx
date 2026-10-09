import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { readHomeScroll } from "@/lib/workScroll";

const scrollToId = (id: string, behavior: ScrollBehavior) => {
  let tries = 0;
  const jump = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior });
    else if (tries++ < 20) window.setTimeout(jump, 50);
  };
  jump();
};

/** Scrolls to a saved position, retrying briefly while the page lays out. */
const scrollToY = (y: number) => {
  let tries = 0;
  const jump = () => {
    window.scrollTo({ top: y, left: 0, behavior: "instant" as ScrollBehavior });
    if (Math.abs(window.scrollY - y) > 2 && tries++ < 20) window.setTimeout(jump, 50);
  };
  jump();
};

/**
 * - New pages open at the top (or at a #section when the link has one).
 * - Returning to the home page from a case study (Back to work, the S logo,
 *   or the browser's back button) restores the spot the visitor left from.
 * - Jumps within the same page stay smooth.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const lastPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    const previous = lastPath.current;
    const samePage = previous === pathname;
    lastPath.current = pathname;

    if (hash) {
      scrollToId(decodeURIComponent(hash.slice(1)), samePage ? "smooth" : ("instant" as ScrollBehavior));
      return;
    }
    if (samePage) return;

    const returningHome = pathname === "/" && previous !== null;
    if (returningHome) {
      const saved = readHomeScroll();
      if (saved !== null) scrollToY(saved);
      else scrollToId("work", "instant" as ScrollBehavior);
      return;
    }

    if (navigationType !== "POP") window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollManager;
