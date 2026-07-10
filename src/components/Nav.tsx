import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signOutLoading, setSignOutLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const closeMenu = () => setMenuOpen(false);

  // Scroll to hash if present on the page
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    e.preventDefault();
    const [path, hash] = target.split("#");
    if (location.pathname === path) {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(target);
    }
    closeMenu();
  };

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-20">
        <Link to="/" className="font-display text-xl font-bold text-primary hover:opacity-90 transition-opacity">
          Daro Tutors
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-10 text-sm">
            <li>
              <a
                href="/#features"
                onClick={(e) => handleSmoothScroll(e, "/#features")}
                className={location.pathname === "/" && location.hash === "#features" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}
              >
                Subjects
              </a>
            </li>
            <li>
              <NavLink to="/about" className={linkClasses} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <a
                href="/#tutors"
                onClick={(e) => handleSmoothScroll(e, "/#tutors")}
                className={location.pathname === "/" && location.hash === "#tutors" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}
              >
                Tutors
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={(e) => handleSmoothScroll(e, "/#contact")}
                className={location.pathname === "/" && location.hash === "#contact" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="/#contact"
            onClick={(e) => handleSmoothScroll(e, "/#contact")}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md"
          >
            Book a Session
          </a>
          {/* Auth links */}
          {user ? (
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">{user.email}</span>
              <button
                onClick={async () => {
                  if (signOutLoading) return;
                  setSignOutLoading(true);
                  try {
                    await signOut();
                    navigate("/");
                  } catch (error) {
                    console.error("Sign out error:", error);
                  } finally {
                    setSignOutLoading(false);
                  }
                }}
                disabled={signOutLoading}
                className="rounded-md border border-border px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {signOutLoading ? "Signing out..." : "Sign Out"}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-sm">
              <Link
                to="/signin"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 text-sm">
            <li>
              <a
                href="/#features"
                onClick={(e) => handleSmoothScroll(e, "/#features")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Subjects
              </a>
            </li>
            <li>
              <NavLink to="/about" className={linkClasses} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <a
                href="/#tutors"
                onClick={(e) => handleSmoothScroll(e, "/#tutors")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Tutors
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={(e) => handleSmoothScroll(e, "/#contact")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={(e) => handleSmoothScroll(e, "/#contact")}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all inline-block"
              >
                Book a Session
              </a>
            </li>
            {/* Auth links for mobile */}
            {user ? (
              <>
                <li className="text-muted-foreground text-xs">{user.email}</li>
                <li>
                  <button
                    onClick={async () => {
                      if (signOutLoading) return;
                      setSignOutLoading(true);
                      try {
                        await signOut();
                        navigate("/");
                      } catch (error) {
                        console.error("Sign out error:", error);
                      } finally {
                        setSignOutLoading(false);
                      }
                    }}
                    disabled={signOutLoading}
                    className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {signOutLoading ? "Signing out..." : "Sign Out"}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin" className="text-muted-foreground hover:text-foreground transition-colors">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all inline-block">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
