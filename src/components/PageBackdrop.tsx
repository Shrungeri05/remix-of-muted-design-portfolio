import { useEffect, useRef } from "react";

/**
 * Site-wide background: faint topographic contours over the slate base, with soft
 * tonal light and shade. The contours drift slightly slower than the page as you
 * scroll (disabled when the visitor prefers reduced motion).
 */
const DRIFT = 0.22; // share of the viewport height the contours move over a whole page

const PageBackdrop = () => {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (layer.current) layer.current.style.transform = `translate3d(0, ${-progress * DRIFT * 100}vh, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 12% 0%, hsl(210 16% 50% / 0.5), transparent 70%), radial-gradient(1000px 760px at 100% 100%, hsl(212 22% 30% / 0.45), transparent 70%)",
        }}
      />
      <div
        ref={layer}
        className="absolute inset-x-0 top-0 will-change-transform"
        style={{
          height: `${100 + DRIFT * 100}vh`,
          backgroundImage: "url(/images/contours.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
        }}
      />
    </div>
  );
};

export default PageBackdrop;
