import * as yup from 'yup';

export const contributionValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  lesson_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
