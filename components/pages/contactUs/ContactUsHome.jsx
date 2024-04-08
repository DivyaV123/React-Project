import Button from '@/components/commonComponents/button/Button'
import Input from '@/components/commonComponents/input/Input'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import React from 'react'

function ContactUsHome() {
    return (
        <WebLayout>
            <div className='h-[60vw]'>
                <div className="relative bg-[url('/contactUspageBg.png')] bg-no-repeat bg-left bg-contain bg-cover h-[29.7vw]">
                    <header className='flex justify-center pt-[8%]'>
                        <div>
                            <h1>
                                <span className='text-5xl font-extrabold text-white tracking-tight '>We are eager to </span>{' '}<span className='tracking-tight gradient-text text-5xl font-extrabold '>hear from you!</span>
                            </h1>
                            <span className='text-white text-2xl font-medium flex justify-center tracking-widest'>Feel free to get in touch with team if you have any questions</span>
                        </div>
                    </header>
                    <article className='absulate top-[75%] left-[21%] bg-white rounded border border-gray-300 absolute' >
                        <section className='flex rounded-xl gap-10'>
                            <aside >
                                <header className='p-4'>
                                    <h1 className='font-semibold text-2xl mb-3'>Fill out the form to hear from our Team!</h1>
                                </header>
                                <article className='pl-12'>
                                    <form>
                                        <div className='mb-5'>
                                            <span className='text-small font-normal'>Name</span>
                                            <Input
                                                iconPath='/nameTextFieldIcon.svg'
                                                placeholder='Enter your name'
                                            />
                                        </div>
                                        <div className='mb-5'>
                                            <span className='text-small font-normal'>Mobile</span>
                                            <Input
                                                iconPath='/mobilefieldicon.svg'
                                                type='text'
                                                placeholder='Enter your mobile number'
                                            />
                                        </div>
                                        <div className='mb-5'>
                                            <span className='text-small font-normal'>E-mail</span>
                                            <Input
                                                iconPath='/emailFieldicon.svg'
                                                placeholder='Enter your email'
                                            />
                                        </div>
                                        <div className='mb-5'>
                                            <span className='text-small font-normal'>Your Message</span>
                                            <Input
                                                iconPath='/emailFieldicon.svg'
                                                placeholder='Type here...'
                                            />
                                        </div>
                                        <div className='flex justify-center p-2'>
                                            <Button
                                                className='primary'
                                                title='Submit'
                                            />
                                        </div>
                                    </form>
                                </article>
                            </aside>
                            <aside className='bg-gradient  h-auto w-[16.55vw] rounded-r'>
                                <header>
                                    <h1>
                                    Contact Info
                                    </h1>
                                </header> 
                            </aside>
                        </section>
                    </article>
                </div>
            </div>
        </WebLayout>
    )
}

export default ContactUsHome