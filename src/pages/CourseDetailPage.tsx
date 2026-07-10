import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import ErrorBoundary from "@/components/ErrorBoundary";
import CourseInstructorBio from "@/components/CourseInstructorBio";
import CourseCurriculum from "@/components/CourseCurriculum";
import StudentProjects from "@/components/StudentProjects";
import type { Course, Instructor } from "@/types/course";

const CourseDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [instructorLoading, setInstructorLoading] = useState<boolean>(true);
  const [instructorError, setInstructorError] = useState<string | null>(null);

  console.log('CourseDetailPage rendering, id:', id);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("courses")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          setError(error.message);
        } else if (!data) {
          setError("Course not found");
        } else {
          setCourse(data as Course);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  useEffect(() => {
    if (course?.instructor_id) {
      const fetchInstructor = async () => {
        try {
          setInstructorLoading(true);
          const { data, error } = await supabase
            .from("instructors")
            .select("*")
            .eq("id", course.instructor_id)
            .single();

          if (error) {
            setInstructorError(error.message);
          } else if (!data) {
            setInstructorError("Instructor not found");
          } else {
            setInstructor(data as Instructor);
          }
        } catch (err) {
          setInstructorError(err instanceof Error ? err.message : "An unexpected error occurred");
        } finally {
          setInstructorLoading(false);
        }
      };

      fetchInstructor();
    } else {
      // No instructor_id, reset instructor states
      setInstructor(null);
      setInstructorLoading(false);
      setInstructorError(null);
    }
  }, [course]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading course...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-8">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold text-destructive mb-2">Error</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Link
            to="/"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center p-8">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">Course Not Found</h2>
          <p className="text-muted-foreground mb-4">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
          >
            Browse courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        &larr; Back to home
      </Link>
      <h1 className="text-4xl font-display font-bold mb-4">{course.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{course.description}</p>
      <p className="text-2xl font-bold text-accent mb-4">${course.price}</p>
      <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:opacity-90">
        Enroll Now
      </button>

      {/* Instructor Bio */}
      {instructorLoading ? (
        <div className="mt-8 p-4 border border-border rounded-lg flex items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span className="ml-2 text-muted-foreground">Loading instructor...</span>
        </div>
      ) : instructorError ? (
        <div className="mt-8 p-4 border border-border rounded-lg text-destructive text-center">
          <p>Failed to load instructor: {instructorError}</p>
        </div>
      ) : instructor ? (
        <CourseInstructorBio instructor={instructor} />
      ) : null}

      {/* Course Curriculum */}
      <CourseCurriculum courseId={course.id} />

      {/* Student Projects */}
      <StudentProjects courseId={course.id} />
    </div>
  );
};

// Wrap with error boundary as per step 5
const CourseDetailPageWithErrorBoundary = () => (
  <ErrorBoundary>
    <CourseDetailPage />
  </ErrorBoundary>
);

export default CourseDetailPageWithErrorBoundary;
