import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth, AuthProvider } from "@/contexts/AuthContext";
import Nav from "@/components/Nav";
import Index from "@/pages/Index";
import About from "@/pages/About";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Dashboard from "@/pages/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import BackendStatusBadge from "@/components/BackendStatusBadge";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Wrapper = () => (
  <>
    <Nav />
    <main>
      <BackendStatusBadge />
      <Outlet />
    </main>
  </>
);

// Redirect authenticated users away from auth pages
const PreventAuthAccess = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/signin" element={<PreventAuthAccess><SignIn /></PreventAuthAccess>} />
        <Route path="/signup" element={<PreventAuthAccess><SignUp /></PreventAuthAccess>} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;