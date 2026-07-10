export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor?: string;
  instructor_id?: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Instructor {
  id: string;
  name: string;
  photo_url?: string;
  bio: string;
}

export interface CurriculumItem {
  id: string;
  title: string;
  description?: string;
  order: number;
}

export interface StudentProject {
  id: string;
  student_name: string;
  project_title: string;
  description: string;
  image_url?: string;
}
