import React, { useState } from 'react'
import './courseCard.scss'
import Button from '../button/Button'
import Svg from '../Svg/Svg'
import { svgicons } from '@/components/assets/icons/svgassets'
import EnrollPopUp from './EnrollPopUp'
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


function CourseCard({ cardData }) {
    const [openDialog, setOpenDialog] = useState('false')
    return (
        <>
            <section className='cardStyle justify-center   justify-items-stretch'>
                <AlertDialog>
                    <picture className='flex justify-self-center  w-full '>
                        <img className='px-[0.781vw] pt-[1.389vh] pb-[1.111vh] w-full' src={cardData.image} alt='image'></img>
                    </picture>
                    <div>
                    </div>
                    <aside className='px-[0.781vw] pt-[1.389vh]'>
                        <h3 className='font-bold text-[1.25vw] '>Test Architect</h3>
                        <p className='flex headerText justify-start pt-[0.833vh]  text-[0.938vw]  text-ash  '>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.
                        </p>
                        <div className='flex pt-[0.833vh]'>
                            <span className='flex text-[0.938vw] font-bold items-baseline'><span className='font-bold'>4.5</span> <Svg
                                width={svgicons.ratingStar[0]}
                                height={svgicons.ratingStar[1]}
                                viewBox={svgicons.ratingStar[2]}
                                icon={svgicons.ratingStar[3]}
                                color={svgicons.ratingStar[4]}
                            /></span>
                            <span className='flex text-[0.938vw] items-baseline'>{`6,256`}</span>
                        </div>

                        <div className='flex justify-center gap-2 py-[1.389vh]  '>
                            <aside>
                                <AlertDialogTrigger asChild>
                                    <Button onClick={() => { setOpenDialog(true) }} className="courseCardBtn text-[1.094vw]  font-semibold text-white bg-gradient rounded-md" title='Enroll now' />
                                </AlertDialogTrigger>
                            </aside>
                            <aside>
                                <Button className="courseCardBtn buttonTextColour  text-[1.094vw]  font-semiboldF border border-orange-500 rounded-md" title='Request call' />
                            </aside>
                        </div>
                    </aside>
                    {openDialog && (
                        <EnrollPopUp />
                    )}
                </AlertDialog>

            </section>


        </>
    )
}

export default CourseCard