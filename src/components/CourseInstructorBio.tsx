import type { Instructor } from "@/types/course";

interface CourseInstructorBioProps {
  instructor: Instructor;
}

const CourseInstructorBio = ({ instructor }: CourseInstructorBioProps) => {
  return (
    <div className="mt-8 p-4 border border-border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Instructor</h2>
      <div className="flex items-start gap-4">
        {instructor.photo_url ? (
          <img
            src={instructor.photo_url}
            alt={instructor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <span className="text-lg">?</span>
          </div>
        )}
        <div>
          <p className="text-lg font-medium">{instructor.name}</p>
          <p className="text-muted-foreground mt-1">{instructor.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructorBio;
