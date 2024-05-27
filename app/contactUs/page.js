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
            address: 'Lorem ipsum dolor sit amet consectetur. Amet at at pellentesque urna. Lorem ipsum dolor sit amet consectetur.'
        },
        {
            country: 'Canada',
            call: '+91 XXXXX XXXXX',
            mail: 'Contact@qspider.com',
            address: 'Lorem ipsum dolor sit amet consectetur. Amet at at pellentesque urna. Lorem ipsum dolor sit amet consectetur.'
        },
        {
            country: 'United Kingdom',
            call: '+91 XXXXX XXXXX',
            mail: 'Contact@qspider.com',
            address: 'Lorem ipsum dolor sit amet consectetur. Amet at at pellentesque urna. Lorem ipsum dolor sit amet consectetur.'
        },
    ]
    const contactUsInput = "w-full  h-full text-[0.938vw]";
    const contentStyle = 'flex gap-2 pb-[0.625vw] item-center'
    return (
        <WebLayout>
            <div className='h-[178.194vh]'>
                <div className="relative bg-[url('/contactUspageBg.png')] bg-no-repeat bg-left bg-contain bg-cover h-[69.167vh]">
                    <header className='flex flex-col justify-center pb-[11.111vh]'>
                        <h1 className='flex justify-center gap-2 pt-[14.444vh]  pb-[0.625vw]'>
                            <span className='text-[3.75vw] font-extrabold text-white tracking-tight justify-around'>We are eager to </span><span className='tracking-tight gradient-text text-[3rem] font-extrabold'>hear from you!</span>
                        </h1>
                        <span className='text-white text-[2rem] font-medium flex justify-center  justify-center'>Feel free to get in touch with team if you have any questions</span>
                    </header>
                    <article className='absulate top-[47.333vh] left-[16.25vw] bg-white rounded border border-gray-300 absolute' >
                        <section className='flex rounded-xl  justify-between w-[67.5vw]'>
                            <aside >
                                <header >
                                    <h1 className='font-semibold py-[3.333vh] text-[1.875vw] pl-[3.333vh]'>Fill out the form to hear from our Team!</h1>
                                </header>
                                <article className='px-[4.375vw]'>
                                    <form>
                                        <div className='pb-[2.5vw]'>
                                            <span className='text-[0.938vw] font-normal'>Name</span>
                                            <Input
                                                inputStyle={`${contactUsInput}`}
                                                iconPath='/nameTextFieldIcon.svg'
                                                placeholder='Enter your name'
                                            />
                                        </div>
                                        <div className='pb-[2.5vw]'>
                                            <span className='text-[0.938vw] font-normal'>Mobile</span>
                                            <Input
                                                inputStyle={`${contactUsInput}`}
                                                iconPath='/mobilefieldicon.svg'
                                                type='text'
                                                placeholder='Enter your mobile number'
                                            />
                                        </div>
                                        <div className='pb-[2.5vw]'>
                                            <span className='text-[0.938vw] font-normal'>E-mail</span>
                                            <Input
                                                inputStyle={`${contactUsInput}`}
                                                iconPath='/emailFieldicon.svg'
                                                placeholder='Enter your email'
                                            />
                                        </div>
                                        <div className='pb-[2.5vw]'>
                                            <span className='text-[0.938vw] font-normal'>Your Message</span>
                                            <TextArea
                                                textAreaStyle='h-full text-[0.938vw] resize-none'
                                                iconStyle=''
                                                iconPath='/emailFieldicon.svg'
                                                placeholder='Type here...'
                                            />
                                        </div>
                                        <div className='flex justify-center  pb-[9.444vh]'>
                                            <Button
                                                className='bg-gradient text-white rounded text-[1.25vw] py-[1.667vh] px-[1.875vw]'
                                                title='Submit'
                                            />
                                        </div>
                                    </form>
                                </article>
                            </aside>
                            <aside className='bg-gradient px-[1.25vw] h-auto w-[25.859vw] rounded-r'>
                                <header>
                                    <h1 className='text-[1.875vw] text-white font-semibold pt-[2.222vh] pb-[2.5vw]'>
                                        Contact Info
                                    </h1>
                                    {contactInfo.map((data) => (
                                        <article className={`${data.country === "United Kingdom" ? "pb-[7.031vw]" : "pb-[3.125vw]"}`}>
                                            <h1 className='text-white pb-[0.625vw] text-[1.563vw]  font-bold'>
                                                {data.country}
                                            </h1>
                                            <div className={`${contentStyle}`}>
                                                <Svg
                                                    className=''
                                                    width={svgicons.contactUsCallSvg[0]}
                                                    height={svgicons.contactUsCallSvg[1]}
                                                    viewBox={svgicons.contactUsCallSvg[2]}
                                                    icon={svgicons.contactUsCallSvg[3]}
                                                    color={svgicons.contactUsCallSvg[4]}
                                                />
                                                <div className='text-white  text-[0.938vw]'>{data.call}</div>
                                            </div>
                                            <div className={`${contentStyle}`}>
                                                <Svg
                                                    className=''
                                                    width={svgicons.contactUsMail[0]}
                                                    height={svgicons.contactUsMail[1]}
                                                    viewBox={svgicons.contactUsMail[2]}
                                                    icon={svgicons.contactUsMail[3]}
                                                    color={svgicons.contactUsMail[4]}
                                                />
                                                <div className='text-white  text-[0.938vw]'>{data.mail}</div>
                                            </div>
                                            <div className={`${contentStyle}`}>
                                                <Svg
                                                    className='basis-[15%]'
                                                    width={svgicons.contactUsAdressSvg[0]}
                                                    height={svgicons.contactUsAdressSvg[1]}
                                                    viewBox={svgicons.contactUsAdressSvg[2]}
                                                    icon={svgicons.contactUsAdressSvg[3]}
                                                    color={svgicons.contactUsAdressSvg[4]}
                                                />
                                                <div className='text-white  text-[0.938vw] px-[0.625vw]'>{data.address}</div>
                                            </div>
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