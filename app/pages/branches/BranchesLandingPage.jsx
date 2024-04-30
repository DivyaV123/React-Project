import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Svg from '@/components/commonComponents/Svg/Svg'
import { svgicons } from '@/components/assets/icons/svgassets'

function BranchesLandingPage() {
    const [selectedImg, setSelectedImg] = useState('../images/Frame 22.png')
    const corosalImgs = [
        '../images/branchesCorosalImg1.png',
        '../images/branchesCorosamg2.png',
        '../images/branchesCorosamg3.png',
        '../images/branchesCorosamg4.png',
        '../images/branchesCorosamg5.png'
    ]

    const branchDetails = [
        {
            branchName: 'Basavanagudi',
            address: '01, Hayavadana Rao Rd, Basappa Layout, Gavipuram Extension, Gavipuram Extention, Kempegowda Nagar, Bengaluru, Karnataka 560019',
            phone: '+91 8265-569-845',
            upcomingBatches: '12 Upcoming Batches',
            onGoingBaches: '06 Ongoing Batches'
        }
    ]
    return (
        <MaxWebWidth sectionStyling='bg-[#FEF2E7]' articalStyling='flex justify-between'>
            <section className='basis-[50%] pt-10 pb-10'>
                <figure className='h-[25vw] w-[49.219vw] rounded-2xl'>
                    <img className='w-full  p-2 ' src={selectedImg} />
                </figure>
                <article className='p-2'>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem >
                                <div className='flex w-full justify-center'>
                                    {corosalImgs.map((image) => (
                                        <figure className={selectedImg === image ? 'p-3 h-[4.063vw] w-[7.813vw] rounded border-orange-500' : 'p-3 h-[4.063vw] w-[7.813vw] rounded'} onClick={() => { setSelectedImg(image) }}>
                                            <img src={image} alt='image' />
                                        </figure>
                                    ))}
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </article>
            </section>
            <section className='basis-[40%] pt-10 pb-10'>
                <header>
                    <h1 className='font-bold text-[3rem]'>
                        Basavanagudi
                    </h1>
                </header>
                <article className='flex font-medium text-base pt-6'>
                    <span>
                        <Svg
                            width={svgicons.locationIcon[0]}
                            height={svgicons.locationIcon[1]}
                            viewBox={svgicons.locationIcon[2]}
                            icon={svgicons.locationIcon[3]}
                            color={svgicons.locationIcon[4]}
                        />
                    </span>
                    <p className='font-medium pl-2'>
                        01, Hayavadana Rao Rd, Basappa Layout, Gavipuram Extension, Gavipuram Extention, Kempegowda Nagar, Bengaluru, Karnataka 560019
                    </p>
                </article>
                <article className='flex font-medium text-base pt-6'>
                    <span>
                        <Svg
                            width={svgicons.phoneCall[0]}
                            height={svgicons.phoneCall[1]}
                            viewBox={svgicons.phoneCall[2]}
                            icon={svgicons.phoneCall[3]}
                            color={svgicons.phoneCall[4]}
                        />
                    </span>
                    <p className='font-medium pl-2'>
                        +91 8265-569-845
                    </p>
                </article>
                <article className='flex font-medium text-base pt-6'>
                    <span>
                        <Svg
                            width={svgicons.calender[0]}
                            height={svgicons.calender[1]}
                            viewBox={svgicons.calender[2]}
                            icon={svgicons.calender[3]}
                            color={svgicons.calender[4]}
                        />
                    </span>
                    <p className='font-medium pl-2'>
                        12 Upcoming Batches
                    </p>
                </article>
                <article className='flex font-medium text-base pt-6'>
                    <span>
                        <Svg
                            width={svgicons.calenderTicked[0]}
                            height={svgicons.calenderTicked[1]}
                            viewBox={svgicons.calenderTicked[2]}
                            icon={svgicons.calenderTicked[3]}
                            color={svgicons.calenderTicked[4]}
                        />
                    </span>
                    <p className='font-medium pl-2'>
                        06 Ongoing Batches
                    </p>
                </article>
            </section>
        </MaxWebWidth>
    )
}

export default BranchesLandingPage