import { svgicons } from '@/components/assets/icons/svgassets'
import Svg from '@/components/commonComponents/Svg/Svg'
import Button from '@/components/commonComponents/button/Button'
import React from 'react'
import './upComingBranches.scss'

function BatchesCard() {
    return (
        <section className='w-[23.594vw] 3xl:h-auto h-[30.556vh] bg-white rounded p-3 border-t-4 cardShadow border-t-orange-500'>
            <header>
                <h1 className='font-bold text-black text-[1.25rem] pb-5'>
                    Java Full Stack
                </h1>
            </header>
            <article>
                <div className='text-ash text-[0.75rem] pb-3'>By : Abhishek bandi</div>
                <article className='flex gap-2 pb-2'>
                    <Svg
                        width={svgicons.orangeCalender[0]}
                        height={svgicons.orangeCalender[1]}
                        viewBox={svgicons.orangeCalender[2]}
                        icon={svgicons.orangeCalender[3]}
                        color={svgicons.orangeCalender[4]}
                    />
                    <div className='font-medium text-[1.094vw] text-ash'>
                        02 Jan - 30 Mar
                    </div>
                </article>
                <article className='flex gap-2'>
                    <Svg
                        width={svgicons.orangeClockIcon[0]}
                        height={svgicons.orangeClockIcon[1]}
                        viewBox={svgicons.orangeClockIcon[2]}
                        icon={svgicons.orangeClockIcon[3]}
                        color={svgicons.orangeClockIcon[4]}
                    />
                    <div className='font-medium text-[1.094vw] text-ash'>
                        10am - 12am
                    </div>
                </article>
            </article>
            <article className='flex gap-2 pt-[2.222vh]'>
                <div>
                    <Button
                        title='Enroll'
                        className='px-[1.389vh] py-[1.25vw] bg-gradient rounded-md text-white'
                    />
                </div>
                <div>
                    <Button
                        title='Details'
                        className='px-[1.389vh]  py-[0.938vw] border border-orange-500  rounded-md text-orange-500'
                    />
                </div>
            </article>
        </section>
    )
}

export default BatchesCard