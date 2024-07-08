import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useContext, useState } from 'react'
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
import { GlobalContext } from '@/components/Context/GlobalContext'
import Image from 'next/image'

function BranchesLandingPage({ BranchDetails }) {
    const branchData = BranchDetails?.data
    const { onGoingBatches, upComingBatches } = useContext(GlobalContext)
    const [selectedImg, setSelectedImg] = useState(branchData.branchImage != "" ? branchData.branchImage : '../images/Frame 22.png')
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
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Assume 4 images per slide
    const imagesPerSlide = 4;
    const gallery = BranchDetails?.data?.branchGallery.length > 0
        ? BranchDetails.data.branchGallery
        : corosalImgs;

    // Calculate the number of slides
    const totalSlides = Math.ceil(gallery.length / imagesPerSlide);

    const handlePrevious = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
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
                    {selectedImg &&
                        <Image
                            src={selectedImg}
                            style={{ height: "25vw", width: "49.219vw", objectFit: "cover" }}
                            height={500}
                            width={500}
                            className='rounded-2xl'
                        />
                    }

                    {/* <img className='h-[25vw]  w-[49.219vw] rounded-2xl mobile:h-[20.815vh] mobile:w-full object-cover' src={selectedImg} /> */}
                </figure>
                <article className='flex gap-2 pt-[2.222vh] mobile:hidden'>
                    <div onClick={handlePrevious}>
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
                                            onClick={() => { setSelectedImg(image) }}
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
                                            {image &&
                                                <Image
                                                    height={100}
                                                    src={image}
                                                    width={100}
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
                    <div onClick={handleNext}>
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
                        <div className='flex flex-col items-end'>
                            <button onClick={() => window.open(branchData?.address.location, "_blank")} className="flex gap-1  text z-1">
                                <p className="text-orange-500 text-[0.703vw] p-[0.156vw]">Get Directions</p>
                                <Svg
                                    className="pr-[0.469vw]"
                                    width={svgicons.navigationIcon[0]}
                                    height={svgicons.navigationIcon[1]}
                                    viewBox={svgicons.navigationIcon[2]}
                                    icon={svgicons.navigationIcon[3]}
                                    color={svgicons.navigationIcon[4]}
                                />
                            </button>
                        </div>
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