import { svgicons } from '@/components/assets/icons/svgassets'
import Svg from '@/components/commonComponents/Svg/Svg'
import Button from '@/components/commonComponents/button/Button'
import React from 'react'
import './upCommingBranches.scss'

function BatchesCard() {
    return (
        <section className='w-[23.594vw] 3xl:h-auto h-[17.188vw] bg-white rounded p-3 border-t-4 cardShadow border-t-orange-500'>
            <header>
                <h1 className='font-bold text-black text-[1.25rem] pb-5'>
                    Java Full Stack
                </h1>
            </header>
            <article>
                <p className='text-ash text-[0.75rem] pb-3'>By : Abhishek bandi</p>
                <article className='flex gap-2 pb-2'>
                    <Svg
                        width={svgicons.orangeCalender[0]}
                        height={svgicons.orangeCalender[1]}
                        viewBox={svgicons.orangeCalender[2]}
                        icon={svgicons.orangeCalender[3]}
                        color={svgicons.orangeCalender[4]}
                    />
                    <p className='font-medium text-[0.875rem] text-ash'>
                        02 Jan - 30 Mar
                    </p>
                </article>
                <article className='flex gap-2'>
                    <Svg
                        width={svgicons.orangeClockIcon[0]}
                        height={svgicons.orangeClockIcon[1]}
                        viewBox={svgicons.orangeClockIcon[2]}
                        icon={svgicons.orangeClockIcon[3]}
                        color={svgicons.orangeClockIcon[4]}
                    />
                    <p className='font-medium text-[0.875rem] text-ash'>
                        10am - 12am
                    </p>
                </article>
            </article>
            <article className='flex gap-2 pt-4'>
                <Button
                    title='Enroll'
                    className='w-[10.625vw] 3xl:[2.438vw] h-[3.438vw] bg-gradient rounded-md text-white'
                />
                <Button
                    title='Details'
                    className='w-[10.625vw] 3xl:[2.438vw] h-[3.438vw] border border-orange-500  rounded-md text-orange-500'
                />
            </article>
        </section>
    )
}

export default BatchesCard