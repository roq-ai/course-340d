import * as yup from 'yup';

export const lessonValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  course_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
