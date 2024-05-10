import Button from '@/components/commonComponents/button/Button'
import Input from '@/components/commonComponents/input/Input'
import React from 'react'

function SignInForm() {
    return (
        <section className='w-[34.375vw] border h-[40.625vw] bg-white rounded-xl p-5'>
            <header>
                <h1 className='font-bold text-dark-gray text-[1.5rem] border-s-4 border-orange-500 rounded pl-2 '>
                    Sign In
                </h1>
                <form className='mt-5 pt-4'>
                    <div className='mb-8'>
                        <span className='font-semibold text-darl-gray mb-2'>User name / Email</span>
                        <Input
                            inputStyle='w-full text-[#A8A8A8] text-[0.75rem] h-[48px]'
                            placeholder='Enter your username or email'
                        />
                    </div>
                    <div className='mb-8'>
                        <span className='font-semibold text-darl-gray mb-2'>Password</span>
                        <Input
                            inputStyle='w-full text-[#A8A8A8] text-[0.75rem] h-[48px]'
                            placeholder='Create Password'
                        />
                    </div>
                    <Button
                        className='w-full h-[3.75vw] rounded-md text-white bg-gradient'
                        title=' Sign In'
                    />
                    <p className='text-[0.75rem] p-5 flex justify-center h-[13vw] items-end gap-1'>
                        <span className='text-[#A8A8A8]'> By signing in you agree to all our  </span><span className='text-[#2A8BFF]'> terms & conditions</span>
                    </p>
                </form>
            </header>

        </section>
    )
}

export default SignInForm