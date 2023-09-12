import { LessonInterface } from 'interfaces/lesson';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  title: string;
  description?: string;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  lesson?: LessonInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    lesson?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  organization_id?: string;
  user_id?: string;
}
