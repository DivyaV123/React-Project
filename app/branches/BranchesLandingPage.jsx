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
import './branchesLandingPage.scss'
import { useGetAllBranchesQuery } from '@/redux/queries/getAllBranchData'

function BranchesLandingPage() {
    const { data, error, isLoading } = useGetAllBranchesQuery()
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
        <MaxWebWidth sectionStyling='bg-coursegradient ' articalStyling='flex justify-between mobile:flex-col'>
            <section className='basis-[50%] pt-[11.111vh] sm:pb-[8.889vh] mobile:py-[2.575vh]'>
                <figure className=''>
                    <img className='h-[25vw]  w-[49.219vw] rounded-2xl mobile:h-[20.815vh] mobile:w-full' src={selectedImg} />
                </figure>
                <article className='flex gap-2 pt-[2.222vh] mobile:hidden'>
                    <div>
                        <Svg
                            className=''
                            width={svgicons.corasalArrowLeft[0]}
                            height={svgicons.corasalArrowLeft[1]}
                            viewBox={svgicons.corasalArrowLeft[2]}
                            icon={svgicons.corasalArrowLeft[3]}
                            color={svgicons.corasalArrowLeft[4]}
                        />
                    </div>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem >
                                <div className='flex w-full justify-center gap-4'>
                                    {corosalImgs.map((image) => (
                                        <figure className='' onClick={() => { setSelectedImg(image) }}>
                                            <img className={selectedImg === image ? 'border-2 rounded-md border-orange-500  w-[7.813vw] rounded' : ' w-[7.813vw] rounded'} src={image} alt='image' />
                                        </figure>
                                    ))}
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        {/* <CarouselPrevious />
                        <CarouselNext /> */}
                    </Carousel>
                    <div>
                        <Svg
                            className=''
                            width={svgicons.corasalArrowRight[0]}
                            height={svgicons.corasalArrowRight[1]}
                            viewBox={svgicons.corasalArrowRight[2]}
                            icon={svgicons.corasalArrowRight[3]}
                            color={svgicons.corasalArrowRight[4]}
                        />
                    </div>
                </article>
            </section>
             <section className='basis-[50%] sm:pl-[3.047vw] sm:pt-[11.111vh] pb-[3.333vh] mobile:pb-[1.717vh]'>
                <header>
                    <div className='font-bold text-[3.75vw] mobile:text-[7.442vw] mobile:pb-[1.717vh]'>
                        Basavanagudi
                    </div>
                </header>
                <article className='flex font-medium gap-2.5 sm:pt-[3.333vh] mobile:pb-[1.502vh]'>
                    <span>
                        <Svg
                            width={svgicons.locationIcon[0]}
                            height={svgicons.locationIcon[1]}
                            viewBox={svgicons.locationIcon[2]}
                            icon={svgicons.locationIcon[3]}
                            color={svgicons.locationIcon[4]}
                        />
                    </span>
                    <p className='font-medium text-[1.25vw] mobile:text-[2.791vw] pl-[0.625vw]'>
                        01, Hayavadana Rao Rd, Basappa Layout, Gavipuram Extension, Gavipuram Extention, Kempegowda Nagar, Bengaluru, Karnataka 560019
                    </p>
                </article>
                <article className='flex font-medium gap-2.5 sm:pt-[3.333vh] mobile:pb-[1.502vh]'>
                    <span>
                        <Svg
                            width={svgicons.phoneCall[0]}
                            height={svgicons.phoneCall[1]}
                            viewBox={svgicons.phoneCall[2]}
                            icon={svgicons.phoneCall[3]}
                            color={svgicons.phoneCall[4]}
                        />
                    </span>
                    <p className='font-medium text-[1.25vw] mobile:text-[2.791vw] pl-[0.625vw] mobile:flex mobile:items-center'>
                        +91 8265-569-845
                    </p>
                </article>
                <article className='flex font-medium gap-2.5 sm:pt-[3.333vh] mobile:pb-[1.502vh]'>
                    <span>
                        <Svg
                            width={svgicons.calender[0]}
                            height={svgicons.calender[1]}
                            viewBox={svgicons.calender[2]}
                            icon={svgicons.calender[3]}
                            color={svgicons.calender[4]}
                        />
                    </span>
                    <p className='font-medium text-[1.25vw] mobile:text-[2.791vw] pl-[0.625vw] mobile:flex mobile:items-center'>
                        12 Upcoming Batches
                    </p>
                </article>
                <article className='flex font-medium gap-2.5 sm:pt-[3.333vh] mobile:pb-[1.502vh]'>
                    <span>
                        <Svg
                            width={svgicons.calenderTicked[0]}
                            height={svgicons.calenderTicked[1]}
                            viewBox={svgicons.calenderTicked[2]}
                            icon={svgicons.calenderTicked[3]}
                            color={svgicons.calenderTicked[4]}
                        />
                    </span>
                    <p className='font-medium text-[1.25vw] mobile:text-[2.791vw] pl-[0.625vw] mobile:flex mobile:items-center'>
                        06 Ongoing Batches
                    </p>
                </article>
            </section>
        </MaxWebWidth>
    )
}

export default BranchesLandingPage