"use client";
import React, { useEffect, useState } from "react";
import TrainingCardSkeleton from "@/components/ourBranches/trainingMode/TrainingCardSkeleton";
import "./CourseLanding.scss";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";
import ImagePopup from "../placements/ImagePopup";
import VideoPopup from "../placements/VideoPopup";
import { truncateText, toProperCase ,extractVideoId} from "@/lib/utils";


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
        let detail = `${element?.degree?.name}(${element?.percentage_deg}%)- ${element.highestyop}`;
        const getFilteredTestimonials = (getTestimonialArray) => {
          if (getTestimonialArray?.length > 0) {
            const checkArray = getTestimonialArray?.filter((testimonial) => {
              return testimonial?.verify;
            });
            return checkArray[0]?.url || checkArray[0]?.img;
          } else return "";
        };
        const videoId = extractVideoId(getFilteredTestimonials(
          element?.gotjob[0]?.mini_testimonial?.url_details
            ?.youtube_video_without_company_name));
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        return isloading ? (
          <TrainingCardSkeleton />
        ) : (
          <AlertDialog popup="imagepopup">
            <section className="testinomialShadow flex w-[28.281vw] mobile:w-[92.558vw] bg-white py-[2.222vh] px-[1.25vw] mobile:px-[3.721vw] mobile:pt-[1.717vh] mobile:pb-[1.288vh] rounded-xl">
              <div>
                <img
                  className="h-10 w-[3.125vw] mobile:w-[9.302vw] rounded-full"
                  src={
                    element.image.length
                      ? element.image
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
                  title={element?.d_stream?.name}
                  className="pb-[1.389vh] mobile:pb-[1.288vh] text-[#454545] text-[1.094vw] mobile:text-[3.256vw]"
                >
                  {truncateText(element?.d_stream?.name, 20)}
                </p>
                <div className="flex gap-4">
                <div className="iconContainer ">
                      <Link
                        href={
                          getFilteredTestimonials(
                            element?.gotjob[0]?.mini_testimonial?.url_details
                              ?.google_review
                          ) || "#"
                        }
                        target={
                          getFilteredTestimonials(
                            element?.gotjob[0]?.mini_testimonial?.url_details
                              ?.google_review
                          )
                            ? "_blank"
                            : "_self"
                        }
                        onClick={(e) => {
                          if (
                            !getFilteredTestimonials(
                              element?.gotjob[0]?.mini_testimonial?.url_details
                                ?.google_review
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                        className={`${
                          !getFilteredTestimonials(
                            element?.gotjob[0]?.mini_testimonial?.url_details
                              ?.google_review
                          )
                            ? "pointer-events-none"
                            : ""
                        }`}
                      >
                        <img
                          src="../google 1.svg"
                          alt="Google review"
                          className={`${
                            !getFilteredTestimonials(
                              element?.gotjob[0]?.mini_testimonial?.url_details
                                ?.google_review
                            )
                              ? "opacity-30 pointer-events-none"
                              : ""
                          }`}
                        />
                      </Link>
                    </div>
                    <div className="iconContainer">
                      <Link
                        href={
                          getFilteredTestimonials(
                            element?.gotjob[0]?.mini_testimonial?.url_details
                              ?.facebook
                          ) || "#"
                        }
                        target={
                          getFilteredTestimonials(
                            element?.gotjob[0]?.mini_testimonial?.url_details
                              ?.facebook
                          )
                            ? "_blank"
                            : "_self"
                        }
                        onClick={(e) => {
                          if (
                            !getFilteredTestimonials(
                              element?.gotjob[0]?.mini_testimonial?.url_details
                                ?.facebook
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                        className={`${
                          !getFilteredTestimonials(
                            element?.gotjob[0]?.mini_testimonial?.url_details
                              ?.facebook
                          )
                            ? "pointer-events-none"
                            : ""
                        }`}
                      >
                        <img
                          src="../facebook 1.svg"
                          alt="Facebook Review"
                          className={`${
                            !getFilteredTestimonials(
                              element?.gotjob[0]?.mini_testimonial?.url_details
                                ?.facebook
                            )
                              ? "opacity-30 pointer-events-none"
                              : ""
                          }`}
                        />
                      </Link>
                    </div>
                    <div className="iconContainer">
                      <Link
                        href={
                          getFilteredTestimonials(
                            element?.gotjob[0]?.mini_testimonial?.url_details
                              ?.youtube_video_without_company_name
                          ) || "#"
                        }
                        target={
                          getFilteredTestimonials(
                            element?.gotjob[0]?.mini_testimonial?.url_details
                              ?.youtube_video_without_company_name
                          )
                            ? "_blank"
                            : "_self"
                        }
                        onClick={(e) => {
                          if (
                            !getFilteredTestimonials(
                              element?.gotjob[0]?.mini_testimonial?.url_details
                                ?.youtube_video_without_company_name
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                        className={`${
                          !getFilteredTestimonials(
                            element?.gotjob[0]?.mini_testimonial?.url_details
                              ?.youtube_video_without_company_name
                          )
                            ? "pointer-events-none"
                            : ""
                        }`}
                      >
                        <img
                          src="../youtube 1.svg"
                          alt="YouTube Review"
                          className={`${
                            !getFilteredTestimonials(
                              element?.gotjob[0]?.mini_testimonial?.url_details
                                ?.youtube_video_without_company_name
                            )
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
                    src={element?.gotjob[0]?.mini_testimonial?.img_details?.written_testimonial_image ? element.base_url+getFilteredTestimonials(
                      element?.gotjob[0]?.mini_testimonial?.img_details
                        ?.written_testimonial_image 
                    ) : "Error.src"}
                    className="imageBox cursor-pointer"
                  />
                </AlertDialogTrigger>
                <AlertDialogTrigger asChild>
                <div
                  className="videoBox cursor-pointer"
                  onClick={openVideoDialog}
                  style={{ position: "relative", display: "inline-block" }}
                 >
                  <img
                    typeof="foaf:Image"
                    src={thumbnailUrl}
                    alt="Video Thumbnail"
                    style={{
                      display: "block",
                      width: "6.797vw",
                      height: "10.056vh",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src="../play_button_placements.svg"
                    alt="Play Button"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                </AlertDialogTrigger>
              </div>
              {imageDialog && (
                <ImagePopup
                  testimonialLink={element.base_url+getFilteredTestimonials(
                    element?.gotjob[0]?.mini_testimonial?.img_details
                      ?.written_testimonial_image
                  )}
                />
                
              )}
              {videoDialog  && element?.gotjob[0]?.mini_testimonial?.url_details.youtube_video_without_company_name && (
                <VideoPopup videoLink={getFilteredTestimonials(
                  element?.gotjob[0]?.mini_testimonial?.url_details
                    ?.youtube_video_without_company_name)}  />
              )}
            </section>
          </AlertDialog>
        );
      })}
    </section>
  );
}

export default StudentsPlacedCard;
