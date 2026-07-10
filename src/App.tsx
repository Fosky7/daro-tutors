import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CourseDetailPage from "./pages/CourseDetailPage";
import Courses from "./pages/Courses";
import FeaturedCoursesPage from "./pages/FeaturedCoursesPage";
import ErrorBoundary from "./components/ErrorBoundary";
import BuildIndicator from "./components/BuildIndicator";

const App = () => (
  <ErrorBoundary>
    <Router>
      <BuildIndicator />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/featured-courses" element={<FeaturedCoursesPage />} />
      </Routes>
    </Router>
  </ErrorBoundary>
);

export default App;
