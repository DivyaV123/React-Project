import Button from '@/components/commonComponents/button/Button'
import Input from '@/components/commonComponents/input/Input'
import React from 'react'

function SignInForm() {
    return (
        <section className='w-[34.375vw] border  bg-white rounded-xl pt-[3.611vh] px-[1.875vw] pb-[4.444vh]'>
            <header>
                <h1 className='font-bold text-dark-gray text-[1.875vw] border-s-4 border-orange-500 rounded pl-[0.625vw] '>
                    Sign In
                </h1>
                <form className='mt-[4.444vh]'>
                    <div className='mb-[3.333vh]'>
                        <div className='font-semibold text-darl-gray pb-[1.389vh]'>User name / Email</div>
                        <Input
                            inputStyle='w-full text-[#A8A8A8] text-[0.938vw] h-[6.667vh] outline-none'
                            placeholder='Enter your username or email'
                        />
                    </div>
                    <div className='mb-[3.333vh]'>
                        <div className='font-semibold text-darl-gray pb-[1.389vh]'>Password</div>
                        <Input
                            inputStyle='w-full text-[#A8A8A8] text-[0.938vw] h-[6.667vh] outline-none'
                            placeholder='Create Password'
                        />
                    </div>
                    <Button
                        className='w-full py-[1.667vh] px-[1.875vw] rounded-md text-white bg-gradient'
                        title=' Sign In'
                    />
                    <p className='text-[0.938vw]  flex justify-center mt-[16.111vh] items-end gap-1'>
                        <span className='text-[#A8A8A8]'> By signing in you agree to all our  </span><span className='text-[#2A8BFF]'> terms & conditions</span>
                    </p>
                </form>
            </header>

        </section>
    )
}

export default SignInForm