import Button from '@/components/commonComponents/button/Button'
import Input from '@/components/commonComponents/input/Input'
import React from 'react'

function SignupForm() {
    return (
        <section className='w-[34.375vw] mobile:w-[88.837vw] border  bg-white rounded-xl pt-[3.611vh] px-[1.875vw] pb-[4.444vh] mobile:mt-[5vh] mobile:pb-[2.444vh]'>
            <header className=' mobile:m-[2vw]'>
                <h1 className='font-bold text-dark-gray mobile:text-[5.581vw] text-[1.875vw] border-s-4 border-orange-500 rounded pl-[0.625vw] mobile:pl-[2.625vw]'>
                    Sign up
                </h1>
                <form className='mt-[4.444vh]'>
                    <div className='mb-[3.333vh] mobile:mb-[1vh] mobile:relative mobile:bottom-[1vh]'>
                        <div className='font-semibold text-dark-gray pb-[1.389vh]'>Email</div>
                        <Input
                            inputStyle='w-full text-[#A8A8A8] text-[0.938vw] h-[6.667vh] outline-none mobile:h-[5.15vh] mobile:text-[2.791vw]

'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='mb-[3.333vh] mobile:mb-[1vh] mobile:relative  mobile:mt-[2vh]'>
                        <div className='font-semibold text-dark-gray pb-[1.389vh]'>Username</div>
                        <Input
                            inputStyle='w-full mobile:h-[5.15vh] mobile:text-[2.791vw] text-[#A8A8A8] text-[0.938vw] h-[6.667vh] outline-none'
                            placeholder='Create your username'
                        />
                    </div>
                    <div className='mb-[3.333vh] mobile:mb-[1vh] mobile:relative  mobile:mt-[3vh]'>
                        <div className='font-semibold text-dark-gray pb-[1.389vh]'>Password</div>
                        <Input
                            inputStyle='w-full mobile:h-[5.15vh] mobile:text-[2.791vw] text-[#A8A8A8] text-[0.938vw] h-[6.667vh] outline-none'
                            placeholder='Create Password'
                        />
                    </div>
                    <Button
                        className='w-full py-[1.667vh] px-[1.875vw] rounded-md text-white bg-gradient mobile:relative mobile:top-[2vh]'
                        title='Sign up'
                    />
                    <p className='text-[0.938vw] mt-[4.444vh] flex justify-center gap-1 mobile:relative '>
                        <span className='text-[#A8A8A8] mobile:text-[2.791vw]'> By signing up you agree to all our </span><span className='text-[#2A8BFF] mobile:text-[2.791vw]'> terms & conditions</span>
                    </p>
                </form>
            </header>

        </section>
    )
}

export default SignupForm