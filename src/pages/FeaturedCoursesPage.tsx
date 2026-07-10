import type { Course } from "@/types/course";
import { featuredCourses } from "@/data/mockFeaturedCourses";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";

const FeaturedCoursesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-display font-bold text-center mb-12">
          Featured Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default FeaturedCoursesPage;
