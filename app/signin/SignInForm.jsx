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
    const usernameOrEmailValidation = Yup.string()
        .test('test-usernameOrEmail', 'Invalid email address or mobile number', function (value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const mobileRegex = /^\d{10}$/; // Example for a 10 digit mobile number
            if (emailRegex.test(value) || mobileRegex.test(value)) {
                return true;
            }
            return false;
        })
        .required('Username, Email, or Mobile Number is required');
    const formik = useFormik({
        initialValues: {
            usernameOrEmail: '',
            password: '',
        },
        validationSchema: Yup.object({
            usernameOrEmail: usernameOrEmailValidation,
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is Required'),
        }),
        onSubmit: async (values) => {
            let userData = {}
            const isNumeric = () => !isNaN(values.usernameOrEmail) && Number.isInteger(parseFloat(values.usernameOrEmail));
            try {
                if (isNumeric()) {
                    userData = {
                        phoneNumber: values.usernameOrEmail,
                        password: values.password,
                    };
                } else {
                    userData = {
                        email: values.usernameOrEmail,
                        password: values.password,
                    };
                }
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
        <section className='w-[34.375vw] tabView:w-[73.118vw] tabView:h-auto border bg-white rounded-xl sm:pt-[3.611vh] sm:px-[1.875vw] tabView:px-[3.226vw] sm:pb-[4.444vh] mobile:w-full mobile:mt-[5.556vh] mobile:mb-[9.227vh] mobile:px-[5.581vw] mobile:pt-[3.433vh] mobile:pb-[3.433vh]'>
            <header>
                <h1 className='font-bold text-dark-gray text-[1.875vw] border-s-4 border-orange-500 rounded pl-[0.625vw] tabView:text-[3.226vw] mobile:text-[5.581vw] mobile:pl-[2.791vw]'>
                    Sign In
                </h1>
                <form className='mt-[4.444vh] mobile:mt-[3.433vh]' onSubmit={formik.handleSubmit}>
                    <div className='mb-[3.333vh] mobile:mb-[1.717vh]'>
                        <div className='font-semibold text-dark-gray pb-[1.389vh] mobile:pb-[1.073vh] mobile:text-[3.721vw] tabView:text-[2.451vw]'>Email/ Mobile</div>
                        <Input
                            name='usernameOrEmail'
                            type='text'
                            inputStyle='w-full text-[#A8A8A8] tabView:text-[1.913vw] text-[0.938vw] h-[6.667vh] outline-none mobile:h-[5.15vh] mobile:text-[2.791vw]'
                            placeholder='Enter your email or Mobile Number'
                            value={formik.values.usernameOrEmail}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
                            <div className='text-red-500 text-[0.8vw]'>{formik.errors.usernameOrEmail}</div>
                        ) : null}
                    </div>
                    <div className='mb-[3.333vh] mobile:mb-[0vh]'>
                        <div className='font-semibold text-dark-gray pb-[1.389vh] mobile:pb-[1.073vh] mobile:text-[3.721vw] tabView:text-[2.451vw]'>Password</div>
                        <Input
                            name='password'
                            type='password'
                            inputStyle='w-full tabView:text-[1.913vw] text-[#A8A8A8] text-[0.938vw] h-[6.667vh] outline-none mobile:h-[5.15vh] mobile:text-[2.791vw]'
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
                        className='w-full py-[1.667vh] px-[1.875vw] rounded-md text-white bg-gradient tabView:text-[2.151vw] mobile:px-[5.581vw] mobile:py-[1.288vh] mobile:mt-[3.433vh]'
                        title=' Sign In'
                    />
                    <p className='text-[0.938vw] flex justify-center tabView:mt-[4.111vh] tabView:text-[1.613vw] mt-[16.111vh] items-end gap-1 mobile:mt-[12.446vh] mobile:text-[2.791vw]'>
                        <span className='text-[#A8A8A8]'> By signing in you agree to all our </span>
                        <span className='text-[#2A8BFF]'> terms & conditions</span>
                    </p>
                </form>
            </header>
        </section>
    );
}

export default SignInForm;
