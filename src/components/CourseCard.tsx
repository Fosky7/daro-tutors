import type { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <>
      <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {course.title}
      </h2>
      {course.description && (
        <p className="text-sm text-muted-foreground line-clamp-3">
          {course.description}
        </p>
      )}
      {course.price != null && (
        <p className="mt-4 font-display text-lg text-accent">
          ${course.price}
        </p>
      )}
    </>
  );
};

export default CourseCard;