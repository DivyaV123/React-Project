'use client'
import React, { useState } from 'react';
import Button from '@/components/commonComponents/button/Button';
import Input from '@/components/commonComponents/input/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/redux/queries/loginApi';
import { COURSEADDER_HOME } from '@/lib/RouteConstants';


function SignInForm() {
    const router = useRouter()
    const [login, { data: loginData, error, isLoading }] = useLoginMutation();
    const formik = useFormik({
        initialValues: {
            usernameOrEmail: '',
            password: '',
        },
        validationSchema: Yup.object({
            usernameOrEmail: Yup.string()
                .email('Invalid email address')
                .required('UserName or Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is Required'),
        }),
        onSubmit: async (values) => {
            try {
                const userData = {
                    email: values.usernameOrEmail,
                    password: values.password,
                };
                const response = await login(userData).unwrap();
                const token = response?.data?.token
                const role = response?.data?.role
                localStorage.setItem('authToken', token);
                localStorage.setItem('Role', role);
                if (role == 'COURSEADDER') {
                    router.push(COURSEADDER_HOME)
                }
            } catch (err) {
                console.error(err, "Error from loginAPI");
            }
        },
    });

    return (
        <section className='w-[34.375vw] border bg-white rounded-xl pt-[3.611vh] px-[1.875vw] pb-[4.444vh]'>
            <header>
                <h1 className='font-bold text-dark-gray text-[1.875vw] border-s-4 border-orange-500 rounded pl-[0.625vw] '>
                    Sign In
                </h1>
                <form className='mt-[4.444vh]' onSubmit={formik.handleSubmit}>
                    <div className='mb-[3.333vh]'>
                        <div className='font-semibold text-darl-gray pb-[1.389vh]'>User name / Email</div>
                        <Input
                            name='usernameOrEmail'
                            type='text'
                            inputStyle='w-full text-[#A8A8A8] text-[0.938vw] h-[6.667vh] outline-none'
                            placeholder='Enter your username or email'
                            value={formik.values.usernameOrEmail}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
                            <div className='text-red-500 text-[0.8vw]'>{formik.errors.usernameOrEmail}</div>
                        ) : null}
                    </div>
                    <div className='mb-[3.333vh]'>
                        <div className='font-semibold text-darl-gray pb-[1.389vh]'>Password</div>
                        <Input
                            name='password'
                            type='password'
                            inputStyle='w-full text-[#A8A8A8] text-[0.938vw] h-[6.667vh] outline-none'
                            placeholder='Create Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-red-500 text-[0.8vw]'>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <Button
                        type='submit'
                        onClick={formik.handleSubmit}
                        className='w-full py-[1.667vh] px-[1.875vw] rounded-md text-white bg-gradient'
                        title=' Sign In'
                    />
                    <p className='text-[0.938vw] flex justify-center mt-[16.111vh] items-end gap-1'>
                        <span className='text-[#A8A8A8]'> By signing in you agree to all our </span>
                        <span className='text-[#2A8BFF]'> terms & conditions</span>
                    </p>
                </form>
            </header>
        </section>
    );
}

export default SignInForm;
