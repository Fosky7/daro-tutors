import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface StudentProject {
  id: string;
  course_id: string;
  title: string;
  description?: string;
  student_name: string;
  image_url?: string;
}

interface StudentProjectsProps {
  courseId: string;
}

const StudentProjects = ({ courseId }: StudentProjectsProps) => {
  const [projects, setProjects] = useState<StudentProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('student_projects')
          .select('*')
          .eq('course_id', courseId);

        if (error) throw error;
        setProjects(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchProjects();
    }
  }, [courseId]);

  if (loading) {
    return (
      <div className="mt-12 py-8 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading student projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 py-8 text-center text-destructive">
        <p>Failed to load student projects: {error}</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="mt-12 py-8 text-center text-muted-foreground">
        <p>No student projects yet.</p>
      </div>
    );
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-display font-semibold mb-6">Student Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-card rounded-lg border border-border overflow-hidden flex flex-col">
            {project.image_url ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
            ) : (
              <div className="w-full h-40 bg-muted flex items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-medium">{project.title}</h3>
              {project.description && (
                <p className="text-sm text-muted-foreground mt-1 flex-1">{project.description}</p>
              )}
              <p className="text-xs text-muted-foreground mt-2">by {project.student_name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentProjects;