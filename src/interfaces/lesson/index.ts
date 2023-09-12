import { ContributionInterface } from 'interfaces/contribution';
import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LessonInterface {
  id?: string;
  title: string;
  content: string;
  course_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  contribution?: ContributionInterface[];
  course?: CourseInterface;
  user?: UserInterface;
  _count?: {
    contribution?: number;
  };
}

export interface LessonGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  course_id?: string;
  user_id?: string;
}
