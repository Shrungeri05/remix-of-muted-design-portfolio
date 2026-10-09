import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Opens every new page at the top, or at a #section when the link has one.
 * Jumps between pages are instant; jumps within the same page stay smooth.
 * Back/forward navigation is left to the browser so it can restore position.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const lastPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    const samePage = lastPath.current === pathname;
    lastPath.current = pathname;
    const behavior = (samePage ? "smooth" : "instant") as ScrollBehavior;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      const jump = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior });
        else if (tries++ < 20) window.setTimeout(jump, 50);
      };
      jump();
      return;
    }
    if (navigationType !== "POP" && !samePage) window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollManager;
