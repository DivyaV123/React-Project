"use client";
import React, { useEffect, useState } from "react";
import TrainingCardSkeleton from "@/components/ourBranches/trainingMode/TrainingCardSkeleton";
import "./CourseLanding.scss";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";
import ImagePopup from "../placements/ImagePopup";
import VideoPopup from "../placements/VideoPopup";
import { truncateText, toProperCase } from "@/lib/utils";

function StudentsPlacedCard({ studentsInfo, page }) {
  const [isloading, setisLoading] = useState(true);
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
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, []);

  return (
    <section
      className={`flex flex-wrap sm:gap-y-[1.25vw] mobile:gap-4 mobile:py-[1.717vh] mobile:mx-[4.651vw] ${
        page === "branch"
          ? "justify-between"
          : "px-[1.25vw] py-[2.222vh] gap-x-[2.222vh]"
      }`}
    >
      {studentsInfo?.map((element) => {
        let detail = `${element.degree.degreeName}(${element.degree.degreeAggregate}%)- ${element.degree.degreeYop}`;
        return isloading ? (
          <TrainingCardSkeleton />
        ) : (
          <AlertDialog popup="imagepopup">
            <section className="testinomialShadow flex w-[28.281vw] mobile:w-[92.558vw] bg-white py-[2.222vh] px-[1.25vw] mobile:px-[3.721vw] mobile:pt-[1.717vh] mobile:pb-[1.288vh] rounded-xl">
              <div>
                <img
                  className="h-10 w-[3.125vw] mobile:w-[9.302vw] rounded-full"
                  src={
                    element.photoLink.length
                      ? element.photoLink
                      : "../../images/user.jpg"
                  }
                  alt="no image"
                />
              </div>
              <div className="w-[15.313vw] mobile:w-[53.953vw] mobile:ml-[2.791vw] mobile:mr-[4.651vw] sm:pl-[0.938vw] sm:pr-[1.641vw]">
                <article
                  className="pb-[1.667vh] mobile:pb-[1.073vh] text-[#454545] font-bold text-[1.094vw] mobile:text-[3.256vw]"
                  title={element?.name}
                >
                  {toProperCase(element?.name)}
                </article>
                <p className="pb-[0.556vh] mobile:pb-[0.429vh] text-[#454545] text-[1.094vw] mobile:text-[3.256vw]">
                  {detail}
                </p>
                <p
                  title={element?.degree?.degreeStream}
                  className="pb-[1.389vh] mobile:pb-[1.288vh] text-[#454545] text-[1.094vw] mobile:text-[3.256vw]"
                >
                  {truncateText(element?.degree?.degreeStream, 20)}
                </p>
                <div className="flex gap-4">
                  <div className="iconContainer ">
                    <Link
                      href={element?.testimonial?.googleReview || "#"}
                      target={
                        element?.testimonial?.googleReview ? "_blank" : "_self"
                      }
                      onClick={(e) => {
                        if (!element?.testimonial?.googleReview) {
                          e.preventDefault();
                        }
                      }}
                      className={`${
                        !element?.testimonial?.googleReview
                          ? "pointer-events-none"
                          : ""
                      }`}
                    >
                      <img
                        src="../google 1.svg"
                        alt="Google review"
                        className={`${
                          !element?.testimonial?.googleReview
                            ? "opacity-30 pointer-events-none"
                            : ""
                        }`}
                      />
                    </Link>
                  </div>
                  <div className="iconContainer">
                    <Link
                      href={element?.testimonial?.fbReview || "#"}
                      target={
                        element?.testimonial?.googleReview ? "_blank" : "_self"
                      }
                      onClick={(e) => {
                        if (!element?.testimonial?.fbReview) {
                          e.preventDefault();
                        }
                      }}
                      className={`${
                        !element?.testimonial?.fbReview
                          ? "pointer-events-none"
                          : ""
                      }`}
                    >
                      <img
                        src="../facebook 1.svg"
                        alt="Facebook Review"
                        className={`${
                          !element?.testimonial?.fbReview
                            ? "opacity-30 pointer-events-none"
                            : ""
                        }`}
                      />
                    </Link>
                  </div>
                  <div className="iconContainer">
                    <Link
                      href={element?.testimonial?.youtubeReview || "#"}
                      target={
                        element?.testimonial?.googleReview ? "_blank" : "_self"
                      }
                      onClick={(e) => {
                        if (!element?.testimonial?.youtubeReview) {
                          e.preventDefault();
                        }
                      }}
                      className={`${
                        !element?.testimonial?.youtubeReview
                          ? "pointer-events-none"
                          : ""
                      }`}
                    >
                      <img
                        src="../youtube 1.svg"
                        alt="YouTube Review"
                        className={`${
                          !element?.testimonial?.youtubeReview
                            ? "opacity-30 pointer-events-none"
                            : ""
                        }`}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-2.5">
                <AlertDialogTrigger asChild>
                  <img
                    onClick={openImageDialog}
                    src={element?.testimonial?.testimonialLink}
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
                  testimonialLink={element?.testimonial?.testimonialLink}
                />
              )}
              {videoDialog && (
                <VideoPopup videoLink={element?.testimonial?.youtubeReview} />
              )}
            </section>
          </AlertDialog>
        );
      })}
    </section>
  );
}

export default StudentsPlacedCard;
