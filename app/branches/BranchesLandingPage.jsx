import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useContext, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Svg from '@/components/commonComponents/Svg/Svg'
import { svgicons } from '@/components/assets/icons/svgassets'
import './branchesLandingPage.scss'
import { GlobalContext } from '@/components/Context/GlobalContext'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

function BranchesLandingPage({ BranchDetails }) {
    const branchData = BranchDetails?.data
    const { onGoingBatches, upComingBatches } = useContext(GlobalContext)
    const [selectedImg, setSelectedImg] = useState(branchData.branchImage ? branchData.branchImage : '/images/Frame 22.png')
    const corosalImgs = [
        '/images/branchesCorosalImg1.png',
        '/images/branchesCorosamg2.png',
        '/images/branchesCorosamg3.png',
        '/images/branchesCorosamg4.png',
        '/images/branchesCorosamg5.png'
    ]
    const [isLoading, setisLoading] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0);


    // Assume 4 images per slide
    const imagesPerSlide = 4;
    const gallery = BranchDetails?.data?.branchGallery.length > 0
        ? BranchDetails.data.branchGallery
        : corosalImgs;

    // Calculate the number of slides
    const totalSlides = Math.ceil(gallery.length / imagesPerSlide);

    const handlePrevious = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(prev => prev + 1);
        }
    };

    // Determine the images for the current slide
    const currentImages = gallery.slice(
        currentSlide * imagesPerSlide,
        (currentSlide + 1) * imagesPerSlide
    );





    return (
        <MaxWebWidth sectionStyling='bg-coursegradient ' articalStyling='flex justify-between mobile:flex-col'>
            <section className='basis-[50%] pt-[11.111vh] sm:pb-[8.889vh] mobile:py-[2.575vh]'>
                <figure className=''>
                    {
                        isLoading ?
                            <Skeleton className='h-[25vw] w-[49.219vw] flex flex-col justify-center items-center'>
                                <div className="spinner"></div>
                            </Skeleton>
                            :
                            selectedImg &&
                            <Image
                                style={{ height: "25vw", width: "49.219vw", objectFit: "cover" }}
                                height={500}
                                width={500}
                                className='rounded-2xl'
                                src={selectedImg}
                                alt="Image"
                                placeholder='blur'
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAFElEQVR4nGNsaGhgwA2Y8MiNYGkA22EBlPG3fjQAAAAASUVORK5CYII="
                            />
                    }

                    {/* {/ {/ <img className='h-[25vw]  w-[49.219vw] rounded-2xl mobile:h-[20.815vh] mobile:w-full object-cover' src={selectedImg} /> /}  */}
                </figure>
                <article className='flex gap-2 pt-[2.222vh] mobile:hidden'>
                    <div onClick={handlePrevious} className={` ${currentSlide === 0 ? 'disabled opacity-50 cursor-default' : 'cursor-pointer'}`}>
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
                            <CarouselItem>
                                <div className='flex w-full justify-center gap-4'>
                                    {currentImages.map((image) => (
                                        <figure
                                            className=''
                                            onClick={() => {
                                                setTimeout(() => {
                                                    setSelectedImg(image);
                                                    setisLoading(false)
                                                }, 500);

                                                setisLoading(true);
                                            }}
                                            key={image}
                                        >
                                            {/* <img
                                                className={selectedImg === image
                                                    ? 'border-2 rounded-md border-orange-500 object-cover w-[7.813vw] h-[4.563vw] rounded'
                                                    : 'w-[7.813vw] rounded h-[4.563vw] object-cover'
                                                }
                                                src={image}
                                                alt='image'
                                            /> */}
                                            {
                                                <Image
                                                    height={100}
                                                    src={image}
                                                    width={100}
                                                    alt="image"
                                                    placeholder='blur'
                                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAFElEQVR4nGNsaGhgwA2Y8MiNYGkA22EBlPG3fjQAAAAASUVORK5CYII='
                                                    style={selectedImg === image ? { height: "4.563vw", width: "7.813vw", objectFit: "cover" } : { height: "4.563vw", width: "7.813vw", objectFit: "cover" }}
                                                    className={selectedImg === image
                                                        ? 'border-2 rounded-md border-orange-500 object-cover rounded'
                                                        : 'w-[7.813vw] rounded h-[4.563vw] object-cover'
                                                    }
                                                />
                                            }

                                        </figure>
                                    ))}
                                </div>
                            </CarouselItem>

                        </CarouselContent>
                    </Carousel>
                    <div onClick={handleNext} className={` ${currentSlide === totalSlides - 1 ? 'disabled opacity-50 cursor-default' : 'cursor-pointer'}`}>
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
                    <div className='font-medium text-[3.75vw] mobile:text-[7.442vw] mobile:pb-[1.717vh]'>
                        {branchData.name}
                    </div>
                </header>
                <article className='flex gap-2.5 sm:pt-[3.333vh] mobile:pb-[1.502vh]'>
                    <span>
                        <Svg
                            width={svgicons.locationIcon[0]}
                            height={svgicons.locationIcon[1]}
                            viewBox={svgicons.locationIcon[2]}
                            icon={svgicons.locationIcon[3]}
                            color={svgicons.locationIcon[4]}
                        />
                    </span>
                    <p className=' text-[1.25vw] mobile:text-[2.791vw] pl-[0.625vw]'>
                        {[
                            branchData?.address?.street,
                            branchData?.address?.city,
                            branchData?.address?.state,
                            branchData?.address?.pincode
                        ].filter(Boolean).join(' ')}
                    </p>
                </article>
                <article className="flex  gap-2.5 sm:pt-[3.333vh] mobile:pb-[1.502vh] cursor-pointer " onClick={() => window.open(branchData?.address.location, "_blank")}>
                    <img src="../../navigation_branch.svg" />
                    <p className="text-[1.25vw] mobile:text-[2.791vw] ml-[0.625vw] mobile:flex mobile:items-center border-b border-slate-500 hover:border-orange-600 hover:text-orange-600">
                        Get Navigation
                    </p>
                </article>
                <article className='flex  gap-2.5 sm:pt-[3.333vh] mobile:pb-[1.502vh]'>
                    <span>
                        <Svg
                            width={svgicons.phoneCall[0]}
                            height={svgicons.phoneCall[1]}
                            viewBox={svgicons.phoneCall[2]}
                            icon={svgicons.phoneCall[3]}
                            color={svgicons.phoneCall[4]}
                        />
                    </span>
                    <p className=' text-[1.25vw] mobile:text-[2.791vw] pl-[0.625vw] mobile:flex mobile:items-center'>
                        {branchData?.contacts && branchData?.contacts.map((cont) => {
                            return (<span>
                                {cont},{" "}
                            </span>);
                        })}
                    </p>
                </article>
                <article className='flex gap-2.5 sm:pt-[3.333vh] mobile:pb-[1.502vh]'>
                    <span>
                        <Svg
                            width={svgicons.calender[0]}
                            height={svgicons.calender[1]}
                            viewBox={svgicons.calender[2]}
                            icon={svgicons.calender[3]}
                            color={svgicons.calender[4]}
                        />
                    </span>
                    <p className='text-[1.25vw] mobile:text-[2.791vw] pl-[0.625vw] mobile:flex mobile:items-center'>
                        {upComingBatches} Upcoming Batches
                    </p>
                </article>
                <article className='flex  gap-2.5 sm:pt-[3.333vh] mobile:pb-[1.502vh]'>
                    <span>
                        <Svg
                            width={svgicons.calenderTicked[0]}
                            height={svgicons.calenderTicked[1]}
                            viewBox={svgicons.calenderTicked[2]}
                            icon={svgicons.calenderTicked[3]}
                            color={svgicons.calenderTicked[4]}
                        />
                    </span>
                    <p className='\ text-[1.25vw] mobile:text-[2.791vw] pl-[0.625vw] mobile:flex mobile:items-center'>
                        {onGoingBatches} Ongoing Batches
                    </p>
                </article>
            </section>
        </MaxWebWidth>
    )
}

export default BranchesLandingPage