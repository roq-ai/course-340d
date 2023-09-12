import { CourseInterface } from 'interfaces/course';
import { InstructorInterface } from 'interfaces/instructor';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  course?: CourseInterface[];
  instructor?: InstructorInterface[];
  user?: UserInterface;
  _count?: {
    course?: number;
    instructor?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
