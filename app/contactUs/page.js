import { svgicons } from '@/components/assets/icons/svgassets'
import Svg from '@/components/commonComponents/Svg/Svg'
import Button from '@/components/commonComponents/button/Button'
import Input from '@/components/commonComponents/input/Input'
import TextArea from '@/components/commonComponents/textArea/TextArea'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import React from 'react'

function ContactUsHome() {
    const contactInfo = [
        {
            country: 'India',
            call: '+91 XXXXX XXXXX',
            mail: 'Contact@qspider.com',
            address: 'Lorem ipsum dolor sit amet consectetur. Amet at at pellentesque urna.'
        },
        {
            country: 'Canada',
            call: '+91 XXXXX XXXXX',
            mail: 'Contact@qspider.com',
            address: 'Lorem ipsum dolor sit amet consectetur. Amet at at pellentesque urna.'
        },
        {
            country: 'United Kingdom',
            call: '+91 XXXXX XXXXX',
            mail: 'Contact@qspider.com',
            address: 'Lorem ipsum dolor sit amet consectetur. Amet at at pellentesque urna.'
        },
    ]
    return (
        <WebLayout>
            <div className='h-[70vw]'>
                <div className="relative bg-[url('/contactUspageBg.png')] bg-no-repeat bg-left bg-contain bg-cover h-[29.7vw]">
                    <header className='flex justify-center pt-[8%]'>
                        <div className=''>
                            <h1 className='flex justify-center'>
                                <span className='text-[3rem] font-extrabold text-white tracking-tight justify-around'>We are eager to </span>{'  '}<span className='tracking-tight gradient-text text-[3rem] font-extrabold'> hear from you!</span>
                            </h1>
                            <span className='text-white text-[2rem] font-medium flex justify-center tracking-widest justify-center'>Feel free to get in touch with team if you have any questions</span>
                        </div>
                    </header>
                    <article className='absulate top-[75%] left-[20%] bg-white rounded border border-gray-300 absolute w-[63%]' >
                        <section className='flex rounded-xl gap-10 justify-between'>
                            <aside className='basis-[70%]' >
                                <header className='p-4'>
                                    <h1 className='font-semibold text-[1.5rem] mb-3'>Fill out the form to hear from our Team!</h1>
                                </header>
                                <article className='pl-12'>
                                    <form>
                                        <div className='mb-5'>
                                            <span className='text-[0.75rem] font-normal'>Name</span>
                                            <Input
                                                inputStyle='w-full  h-[2.969vw]'
                                                iconPath='/nameTextFieldIcon.svg'
                                                placeholder='Enter your name'
                                            />
                                        </div>
                                        <div className='mb-5'>
                                            <span className='text-[0.75rem] font-normal'>Mobile</span>
                                            <Input
                                                inputStyle='w-full  h-[2.969vw]'
                                                iconPath='/mobilefieldicon.svg'
                                                type='text'
                                                placeholder='Enter your mobile number'
                                            />
                                        </div>
                                        <div className='mb-5'>
                                            <span className='text-[0.75rem] font-normal'>E-mail</span>
                                            <Input
                                                inputStyle='w-full h-[2.969vw]'
                                                iconPath='/emailFieldicon.svg'
                                                placeholder='Enter your email'
                                            />
                                        </div>
                                        <div className='mb-5'>
                                            <span className='text-[0.75rem] font-normal'>Your Message</span>
                                            <TextArea
                                                textAreaStyle='max-h-[8.516vw]'
                                                iconStyle='!top-[27%]'
                                                iconPath='/emailFieldicon.svg'
                                                placeholder='Type here...'
                                            />
                                        </div>
                                        <div className='flex justify-center p-2'>
                                            <Button
                                                className='bg-gradient text-white rounded text-[1rem] w-[8.281vw] h-[3.75vw]'
                                                title='Submit'
                                            />
                                        </div>
                                    </form>
                                </article>
                            </aside>
                            <aside className='bg-gradient p-2 h-auto w-[29%] rounded-r'>
                                <header>
                                    <h1 className='text-[1.5rem] text-white font-semibold mb-3'>
                                        Contact Info
                                    </h1>
                                    {contactInfo.map((data) => (
                                        <article className='p-2'>
                                            <h1 className='text-white pb-1 text-[1.25rem] font-bold'>
                                                {data.country}
                                            </h1>
                                            <p className='flex text-white text-[0.75rem] pl-1 pb-1'>
                                                <Svg
                                                    className='mr-2 basis-[15]'
                                                    width={svgicons.contactUsCallSvg[0]}
                                                    height={svgicons.contactUsCallSvg[1]}
                                                    viewBox={svgicons.contactUsCallSvg[2]}
                                                    icon={svgicons.contactUsCallSvg[3]}
                                                    color={svgicons.contactUsCallSvg[4]}
                                                />
                                                {data.call}
                                            </p>
                                            <p className='flex text-white text-[0.75rem] pl-1 pb-1'>
                                                <Svg
                                                    className='mr-2 3xl:basis-[7%] basis-[10%]'
                                                    width={svgicons.contactUsMail[0]}
                                                    height={svgicons.contactUsMail[1]}
                                                    viewBox={svgicons.contactUsMail[2]}
                                                    icon={svgicons.contactUsMail[3]}
                                                    color={svgicons.contactUsMail[4]}
                                                />
                                                <span>{data.mail}</span>
                                            </p>
                                            <p className='flex pl-1 pb-1'>
                                                <Svg
                                                    className='mr-2 3xl:basis-[10%] basis-[24%] '
                                                    width={svgicons.contactUsAdressSvg[0]}
                                                    height={svgicons.contactUsAdressSvg[1]}
                                                    viewBox={svgicons.contactUsAdressSvg[2]}
                                                    icon={svgicons.contactUsAdressSvg[3]}
                                                    color={svgicons.contactUsAdressSvg[4]}
                                                />
                                                <span className='text-white text-[0.75rem] col-5'>{data.address}</span>
                                            </p>
                                        </article>
                                    ))}

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