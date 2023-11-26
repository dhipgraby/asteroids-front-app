import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required.')
        .min(4, 'Username should be at least 4 characters long.')
        .max(25, 'Username should not exceed 25 characters.'),
    email: Yup.string()
        .required('Email is required.')
        .email('Invalid email format.'),
    password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password should be at least 8 characters long.')
        .max(25, 'Password should not exceed 25 characters.'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match.')
});