import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface NavigationProps {
  currentPage?: string;
  currentIndex?: string;
}

/** Home-page sections, in page order. Numbers match the footer. */
const SECTIONS = [
  { id: "work", label: "Work", number: "01" },
  { id: "education", label: "Education", number: "02" },
  { id: "about", label: "About", number: "03" },
  { id: "contact", label: "Contact", number: "04" },
];

const HOME = { id: "home", label: "Home", number: "00" };

/** Tracks which home-page section is currently in view. */
const useActiveSection = (enabled: boolean) => {
  const [active, setActive] = useState(HOME);

  useEffect(() => {
    if (!enabled) return;

    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = HOME;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= line) current = section;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && window.scrollY > 0) current = SECTIONS[SECTIONS.length - 1];
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled]);

  return active;
};

/** True once the page has scrolled past the very top. */
const useScrolled = (threshold = 40) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);
  return scrolled;
};

const brisbaneDate = () =>
  new Date().toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Australia/Brisbane",
  });

const Navigation = ({ currentPage, currentIndex = "01" }: NavigationProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const activeSection = useActiveSection(isHome);
  const scrolled = useScrolled();

  const label = isHome ? activeSection.label : currentPage || "Home";
  const number = isHome ? activeSection.number : currentIndex;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Soft fade behind the bar so page content scrolling underneath doesn't clash with it */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-36 transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background) / 0.97) 55%, hsl(var(--background) / 0) 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-foreground hover:opacity-80 transition-opacity duration-200"
            aria-label={isHome ? "Back to top" : "Back to work"}
            title={isHome ? "Back to top" : "Back to work"}
          >
            <div className="w-10 h-10 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center">
              <span className="heading-display text-lg">S</span>
            </div>
          </Link>

          {/* Center - current section, changes as the page scrolls */}
          <div className="absolute left-1/2 -translate-x-1/2" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={label}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="nav-number">
                  <span>{number}</span>
                </div>
                <span className="text-mono text-sm text-foreground/80 whitespace-nowrap">{label}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right - location and today's date in Brisbane (updates automatically) */}
          <div className="text-right text-mono text-xs text-foreground/70 leading-relaxed hidden md:block">
            <div>Brisbane</div>
            <div>{brisbaneDate()}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
