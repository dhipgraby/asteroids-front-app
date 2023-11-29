import React from 'react';
import { useFormik } from 'formik';
import { validationSchema } from '@/validation/login';
import { userStore } from '@/stores/user.store';

const LoginForm = () => {

  const user = userStore((state) => state)

  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      await user.login(values.identifier, values.password)
    }
  });

  return (
    <div className="bg-main-100 w-96 rounded-lg overflow-hidden pt-4 mt-20">
      <h4 className='text-white text-2xl mb-5'>Login</h4>
      <div className='p-5 bg-main'>
        {(!user.isLoggedin) ? (
          <form id="loginForm" onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Email or username"
                className="form-control my-2 px-2 py-2 rounded-md w-full bg-main-400"
                value={formik.values.identifier}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="identifier"
              />
              {formik.touched.identifier && formik.errors.identifier ? (
                <div className='error'>{formik.errors.identifier as React.ReactNode}</div>
              ) : null}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="form-control my-2 px-2 py-2 rounded-md w-full bg-main-400"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className='error'>{formik.errors.password as React.ReactNode}</div>
              ) : null}
            </div>
            <button type="submit" className='btn-primary w-full mt-4'>
              Submit
            </button>
          </form>
        ) : (
          <>
            <h3 className='greyTxt text-xl'>
              Welcome back {user.data.name}
            </h3>
            <button className='btn-primary w-full my-2 mt-10' onClick={() => user.logout()}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
