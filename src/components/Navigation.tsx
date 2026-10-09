import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  currentPage?: string;
  currentIndex?: string;
}

const Navigation = ({ currentPage, currentIndex = "01" }: NavigationProps) => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-foreground hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center">
              <span className="heading-display text-lg">M</span>
            </div>
          </Link>

          {/* Center - Current Section */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="nav-number">
              <span>{currentIndex}</span>
            </div>
            <span className="text-mono text-sm text-foreground/80">
              {currentPage || "Home"}
            </span>
          </div>

          {/* Right - Location & Time */}
          <div className="text-right text-mono text-xs text-foreground/70 leading-relaxed hidden md:block">
            <div>San Francisco</div>
            <div>{new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
