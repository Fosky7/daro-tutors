import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface CurriculumItem {
  id: string;
  course_id: string;
  title: string;
  description?: string;
  order: number;
}

interface CourseCurriculumProps {
  courseId: string;
}

const CourseCurriculum = ({ courseId }: CourseCurriculumProps) => {
  const [items, setItems] = useState<CurriculumItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurriculum = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('curriculum')
          .select('*')
          .eq('course_id', courseId)
          .order('order', { ascending: true });

        if (error) throw error;
        setItems(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCurriculum();
    }
  }, [courseId]);

  if (loading) {
    return (
      <div className="mt-12 py-8 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading curriculum...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 py-8 text-center text-destructive">
        <p>Failed to load curriculum: {error}</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mt-12 py-8 text-center text-muted-foreground">
        <p>No curriculum items yet.</p>
      </div>
    );
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-display font-semibold mb-6">Course Curriculum</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-card rounded-lg p-4 border border-border flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
              {item.order}
            </span>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              {item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCurriculum;