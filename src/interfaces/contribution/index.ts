import { LessonInterface } from 'interfaces/lesson';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContributionInterface {
  id?: string;
  title: string;
  content: string;
  lesson_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  lesson?: LessonInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ContributionGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  lesson_id?: string;
  user_id?: string;
}
