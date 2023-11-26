import * as Yup from 'yup';

export const validationSchema = Yup.object({
    identifier: Yup.string().required('Identifier is required'),
    password: Yup.string().required('Password is required'),
});