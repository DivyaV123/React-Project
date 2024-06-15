'use client'
import { svgicons } from '@/components/assets/icons/svgassets'
import Svg from '@/components/commonComponents/Svg/Svg'
import { AlertDialog, AlertDialogTrigger } from '@radix-ui/react-alert-dialog'
import React, { useState } from 'react'
import PlacementContent from '../placements/PlacementContent'
import ImagePopup from '../placements/ImagePopup'
import VideoPopup from '../placements/VideoPopup'

function TestimonialsCard({ testimonialsData, compleateData }) {
    const [imageDialog, setImageDialog] = useState(false);
    const [videoDialog, setVideoDialog] = useState(false);
    const openImageDialog = () => {
        setImageDialog(true);
        setVideoDialog(false);
    };
    const openVideoDialog = () => {
        setVideoDialog(true);
        setImageDialog(false);
    };

    function extractText(data) {
        return branchAbbreviations[data] || data
    }

    return (
        <AlertDialog className='flex justify-around w-[28.906vw] bg-white rounded-xl py-3 px-1 overflow-hide'>
            {/* <article className='base-[35%]'>
                <figure className='p-1 w-full'>
                    <img className='w-full' src='../images/Testimonialsimage1.png' />
                </figure>
                <figure className='p-1 w-full'>
                    <img className='w-full' src='../images/TestimonialImage2.png' />
                </figure>
            </article> */}
            <div className="pl-[3.125vw] pt-[2.222vh] flex flex-col gap-3">
                <AlertDialogTrigger asChild>
                    <img
                        onClick={openImageDialog}
                        src={testimonialsData?.testimonial?.testimonialLink}
                        className="imageBox cursor-pointer"
                    />
                </AlertDialogTrigger>
                <AlertDialogTrigger asChild>
                    <img
                        onClick={openVideoDialog}
                        typeof="foaf:Image"
                        className="videoBox cursor-pointer"
                    />
                </AlertDialogTrigger>
            </div>
            {imageDialog && (
                <ImagePopup
                    testimonialLink={testimonialsData?.testimonial?.testimonialLink}
                />
            )}
            {videoDialog && (
                <VideoPopup videoLink={testimonialsData?.testimonial?.youtubeReview} />
            )}
            <article className='basis-[65%]'>
                <header>
                    <h1 className='font-bold pb-1 text-dark-gray'>
                        {testimonialsData?.name}
                    </h1>
                    <p className='text-[0.75rem] text-ash'>
                        {testimonialsData?.testimonial?.writtenTestimonial.length > 150 ? testimonialsData?.testimonial?.writtenTestimonial.substring(0, 150) + "..." : testimonialsData?.testimonial?.writtenTestimonial ? testimonialsData?.testimonial?.writtenTestimonial : "Thank you for being a valued member of our community! Your feedback is important to us."}
                    </p>
                </header>
                <p>
                    <span className='flex text-[0.875rem] gap-1 font-bold justify-end items-baseline'><span className='font-bold'>4.5</span> <Svg
                        className='mt-[0.15rem]'
                        width={svgicons.ratingStar[0]}
                        height={svgicons.ratingStar[1]}
                        viewBox={svgicons.ratingStar[2]}
                        icon={svgicons.ratingStar[3]}
                        color={svgicons.ratingStar[4]}
                    /></span>
                </p>
            </article>
        </AlertDialog>
    )
}

export default TestimonialsCard