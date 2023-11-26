import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { validationSchema } from '@/validation/signup';
import { userStore } from '@/stores/user.store';
import Link from 'next/link';

const SignupForm = () => {

    const [isSignup, setIsSignup] = useState(false);
    const handleSignup = userStore((state) => state.signup)

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
                toast.warn("Passwords not match");
                return;
            }
            try {
                await handleSignup(
                    values.username,
                    values.email,
                    values.password,
                    setIsSignup
                );
            } catch (error) {
                toast.warn(`${error}`);
            }
        }
    });

    return (
        <div className="bg-main-100 w-96 rounded-lg overflow-hidden pt-4 mt-20">
            <h4 className='text-white text-2xl mb-5'>Signup</h4>
            <div className='p-5 bg-main'>
                {
                    !isSignup ? (
                        <form id="signupForm" onSubmit={formik.handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    placeholder={"username"}
                                    className="form-control my-2 px-2 py-2 rounded-md w-full bg-main-400"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <div className="error">{formik.errors.username}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control my-2 px-2 py-2 rounded-md w-full bg-main-400"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="error">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder={"password"}
                                    className="form-control my-2 px-2 py-2 rounded-md w-full bg-main-400"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="error">{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder={"repeat password"}
                                    className="form-control my-2 px-2 py-2 rounded-md w-full bg-main-400"
                                    name="repeatPassword"
                                    value={formik.values.repeatPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                                    <div className="error">{formik.errors.repeatPassword}</div>
                                ) : null}
                            </div>

                            <button type="submit" className="my-2 t-white btn-primary w-full">
                                Submit
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
        </div>
    );
};

export default SignupForm;
