import React, { useState } from 'react';
import { handleSignup } from '../../helpers/AuthHelper';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { validationSchema } from '../../helpers/validation/signup';
import styles from './Login.module.css';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'

const Signup = () => {

    const { t } = useTranslation('common')

    const [isSignup, setIsSignup] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            repeatPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (values.password !== values.repeatPassword) {
                toast.warn(t('Passwords-not-match'));
                return;
            }

            try {
                let userData = await handleSignup(
                    values.username,
                    values.email,
                    values.password
                );
                toast.success(userData.message);
                setIsSignup(true);
            } catch (error) {
                setIsSignup(false);
                toast.warn(`${error}`);
            }
        }
    });

    return (
        <div className='my-3 p-2'>
            <h4 className='greyTxt'>{t("register")}</h4>
            {
                !isSignup ? (
                    <form id="signupForm" className={styles.form} onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            placeholder={t("username")}
                            className="form-control my-2"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="error">{formik.errors.username}</div>
                        ) : null}

                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control my-2"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}

                        <input
                            type="password"
                            placeholder={t("password")}
                            className="form-control my-2"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="error">{formik.errors.password}</div>
                        ) : null}

                        <input
                            type="password"
                            placeholder={t("repeat-password")}
                            className="form-control my-2"
                            name="repeatPassword"
                            value={formik.values.repeatPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                            <div className="error">{formik.errors.repeatPassword}</div>
                        ) : null}

                        <button type="submit" className="my-2 t-white">
                            {t("submitSignup")}
                        </button>
                    </form>
                ) : (
                    <div>
                        <h5 className='greyTxt'>Successfully registered!
                            You can <Link href='/login'><b className='underline'>login now</b></Link>
                        </h5>
                    </div>
                )
            }


        </div>
    );
};

export default Signup;
