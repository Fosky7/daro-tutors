import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { Course } from "@/types/course";
import CourseCard from "@/components/CourseCard";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error: supabaseError } = await supabase
        .from("courses")
        .select("*")
        .order("title", { ascending: true })
        .limit(4);

      if (supabaseError) {
        throw supabaseError;
      }
      setCourses(data as Course[]);
    } catch (err: any) {
      setError(err.message || "Failed to load featured courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <section id="featured-courses" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Courses
          </h2>
          <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              <p className="text-muted-foreground">Loading courses...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="featured-courses" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured Courses
          </h2>
          <div className="max-w-md mx-auto">
            <p className="text-destructive mb-4">{error}</p>
            <button
              onClick={fetchCourses}
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Try again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (courses.length === 0) {
    return null; // Hide section when no courses exist
  }

  return (
    <section id="featured-courses" className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="group rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`View details for ${course.title}`}
            >
              <CourseCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;