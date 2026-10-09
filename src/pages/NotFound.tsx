import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-8">
      <div className="text-center">
        <h1 className="heading-display mb-4 text-6xl text-foreground">404</h1>
        <p className="body-text mb-8">Page not found</p>
        <Link to="/" className="text-mono text-sm text-foreground/70 hover:text-foreground underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
