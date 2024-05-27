import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Button from '../button/Button'
import Svg from '../Svg/Svg'
import { svgicons } from '@/components/assets/icons/svgassets'
import Input from '../input/Input'
import TextArea from '../textArea/TextArea'


function EnrollPopUp() {
    return (
        <div className=''>
            <AlertDialogContent className="max-w-[62.5vw] px-[5.556vh] rounded-xl">
                <AlertDialogHeader className=''>
                    <AlertDialogTitle className='flex justify-between pt-[4.444vh]'>
                        <h1 className='font-bold text-[1.875vw] pb-[4.444vh]'>
                            Enroll now
                        </h1>
                        <AlertDialogCancel className='border-none hover:bg-white p-0'>
                            <Svg
                                width={svgicons.cancelButtonIcon[0]}
                                height={svgicons.cancelButtonIcon[1]}
                                viewBox={svgicons.cancelButtonIcon[2]}
                                icon={svgicons.cancelButtonIcon[3]}
                                color={svgicons.cancelButtonIcon[4]}
                            />
                        </AlertDialogCancel>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className='flex justify-between pb-[3.333vh]'>
                            <div>
                                <p className='text-[1.25vw] font-semibold pb-[1.389vh] text-black' >Mobile number</p>
                                <Input
                                    inputStyle='h-[5.833vh] w-[25vw] text-[0.938vw]'
                                    placeholder='Enter your phone number'
                                />
                            </div>
                            <div>
                                <p className='text-[1.25vw] font-semibold pb-[1.389vh] text-black' >Email</p>
                                <Input
                                    inputStyle='h-[5.833vh] w-[25vw] 0.938vw text-[0.938vw]'
                                    placeholder='Enter your email'
                                />
                            </div>
                        </div>
                        <div className='flex justify-between pb-[3.333vh]'>
                            <div>
                                <p className='text-[1.25vw] font-semibold pb-[1.389vh] text-black' >Course</p>
                                <Input
                                    inputStyle='h-[5.833vh] w-[25vw] text-[0.938vw]'
                                    placeholder='-Select-'
                                />
                            </div>
                            <div>
                                <p className='text-[1.25vw] font-semibold pb-[1.389vh] text-black' >Full Name</p>
                                <Input
                                    inputStyle='h-[5.833vh] w-[25vw] text-[0.938vw]'
                                    placeholder='Enter your full name'
                                />
                            </div>
                        </div>
                        <div className='flex justify-between pb-[3.333vh]'>
                            <div>
                                <p className='text-[1.25vw] font-semibold pb-[1.389vh] text-black' >Message</p>
                                <TextArea
                                    placeholder='Enter your message...'
                                    textAreaStyle='max-h-[11.667vh] resize-none w-[25vw] text-[0.938vw] '
                                />
                            </div>
                            <div className='relative'>
                                <AlertDialogAction className='bg-gradient text-white absolute right-0 bottom-0 py-[1.667vh] px-[1.875vw]'>
                                    <span className='text-[1.25vw]'>Submit</span>
                                </AlertDialogAction>
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                {/* <AlertDialogFooter>
                    
                </AlertDialogFooter> */}
            </AlertDialogContent>
        </div>
    )
}

export default EnrollPopUp