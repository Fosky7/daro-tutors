import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { Course } from "@/types/course";
import Navbar from "@/components/Navbar";

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data, error } = await supabase
          .from("courses")
          .select("*")
          .order("title", { ascending: true });

        if (error) throw error;
        setCourses(data as Course[]);
      } catch (err: any) {
        setError(err.message || "Failed to load courses.");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold text-destructive mb-2">Error</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">No Courses Yet</h2>
          <p className="text-muted-foreground mb-4">
            We're working on new courses. Check back soon!
          </p>
          <Link
            to="/"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-display font-bold text-center mb-12">All Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="group rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {course.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {course.description}
              </p>
              {course.price && (
                <p className="mt-4 font-display text-lg text-accent">
                  ${course.price}
                </p>
              )}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
