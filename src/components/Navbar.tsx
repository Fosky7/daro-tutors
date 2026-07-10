import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Featured Courses", to: "/featured-courses" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <nav
        className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="font-display text-xl font-bold text-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          DaroTech Tutors
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`transition-colors hover:text-foreground ${
                  location.pathname === item.to
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          ref={buttonRef}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden"
            role="menu"
          >
            <ul className="px-6 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.to} role="none">
                  <Link
                    to={item.to}
                    role="menuitem"
                    className={`block py-2 text-sm transition-colors ${
                      location.pathname === item.to
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;