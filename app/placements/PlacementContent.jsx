import React, { useState } from "react";
import "./PlacementSidebar.scss";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import ImagePopup from "./ImagePopup";
import VideoPopup from "./VideoPopup";
import Link from "next/link";
import { branchAbbreviations } from "@/lib/utils";
import { truncateText, toProperCase } from "@/lib/utils";
import TestimonialPopup from "./TestimonialPopup";

const PlacementContent = ({ placementList }) => {
  const [imageDialog, setImageDialog] = useState(false);
  const [videoDialog, setVideoDialog] = useState(false);
  const [testimonialDialog, setTestimonialDialog] = useState(false);
  const openImageDialog = () => {
    setImageDialog(true);
    setVideoDialog(false);
    setTestimonialDialog(false);
  };
  const openVideoDialog = () => {
    setVideoDialog(true);
    setImageDialog(false);
    setTestimonialDialog(false);
  };

  const extractText = (data) => {
    return branchAbbreviations[data] || data;
  };
  const handleViewmore = () => {
    setTestimonialDialog(true);
    setVideoDialog(false);
    setImageDialog(false);
  };
  const defaultImage = "/user.svg";
  return (
    <>
      {placementList?.map((student) => {
        const getFilteredTestimonials = (getTestimonialArray) => {
          if (getTestimonialArray?.length > 0) {
            const checkArray = getTestimonialArray?.filter((testimonial) => {
              return testimonial?.verify;
            });
            return checkArray[0]?.url || checkArray[0]?.img;
          } else return "";
        };
        const studentInfoMap = {
          Masters: {
            degree: student?.masters?.short_form || student?.masters?.name,
            percentage: student?.percentage_mas,
            stream: student?.m_stream?.short_form || student?.m_stream?.name,
          },
          Degree: {
            degree: student?.degree?.short_form || student?.degree?.name,
            percentage: student?.percentage_deg,
            stream: student?.d_stream?.short_form || student?.d_stream?.name,
          },
          Diploma: {
            degree: "Diploma",
            percentage: student?.percentage_dip,
            stream:
              student?.dip_stream?.short_form || student?.dip_stream?.name,
          },
        };

        const studentInfo = studentInfoMap[student?.highest_degree] || {
          degree: "Diploma",
          percentage: "",
          stream: "",
        };

        const degree = studentInfo.degree;
        const percentage = studentInfo.percentage;
        const stream = studentInfo.stream;

        return (
          <section
            className="w-[99.4%] mobile:w-[92.558vw]  contentCard flex mobile:flex-row-reverse sm:pt-[0.556vh]
           sm:pl-[0.469vw] sm:pb-[1.111vh] sm:mb-[3.333vh] sm:mt-[0.556vh] sm:ml-[0.078vw] mobile:my-[2.575vh] mobile:gap-4 mobile:justify-end"
          >
            <AlertDialog popup="imagepopup">
              <div className="mobile:flex mobile:flex-col flex mobile:w-full mobile:pr-[3.721vw]">
                <div className="sm:w-[15.547vw] ">
                  <div className="h-[24.861vh] overflow-hidden w-full rounded-2xl mobile:hidden">
                    <img
                      src={student?.image || defaultImage}
                      className="w-full"
                    />
                  </div>
                  <div className="imageCard">
                    <header className="studentName font-semibold sm:py-[1.111vh] mobile:pt-[1.717vh] mobile:pb-[1.502vh] sm:text-center">
                      {student?.name}
                    </header>
                    <div className="flex gap-1 studentDetails mobile:pb-[1.609vh]">
                      <div>
                        <div
                          className="studentDetails flex justify-center"
                          title={degree}
                        >
                          {toProperCase(truncateText(degree, 5))}
                        </div>
                        <div className="educationDetails">Degree</div>
                      </div>
                      <div>|</div>
                      <div>
                        <div
                          className="studentDetails flex justify-center"
                          title={stream}
                        >
                          {truncateText(stream, 3)?.toUpperCase()}
                        </div>
                        <div className="educationDetails">Stream</div>
                      </div>
                      <div>|</div>
                      <div>
                        <div className="studentDetails flex justify-center">
                          {percentage}
                        </div>
                        <div className="educationDetails">Aggregate</div>
                      </div>
                      <div>|</div>
                      <div>
                        <div className="studentDetails flex justify-center">
                          {student?.highestyop}
                        </div>
                        <div className="educationDetails">YOP</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:pl-[1.563vw] sm:w-[42.813vw] sm:pt-[2.222vh] flex flex-col justify-between">
                  <p className="studentReview mobile:hidden">
                    {student?.gotjob[0]?.mini_testimonial?.written_testimonial}
                  </p>

                  <p className="studentReview mobile:pb-[1.502vh] sm:hidden">
                    {student?.gotjob[0]?.mini_testimonial?.written_testimonial
                      ?.length > 75 ? (
                      <>
                        {truncateText(
                          student?.gotjob[0]?.mini_testimonial
                            ?.written_testimonial,
                          75
                        )}
                        <AlertDialogTrigger asChild>
                          <span
                            className="text-[2.558vw] font-semibold"
                            onClick={handleViewmore}
                          >
                            View more
                          </span>
                        </AlertDialogTrigger>
                      </>
                    ) : (
                      student?.gotjob[0]?.mini_testimonial?.written_testimonial
                    )}
                  </p>

                  <div className="flex gap-2 items-center mb-[1.111vh] sm:pl-[5vw] mobile:mb-[1.824vh] mobile:gap-4 ">
                    <div className="text-[0.781vw] text-[#201C19] pr-[1.563vw] mobile:hidden">
                      Reviews :
                    </div>
                    <div className="iconContainer ">
                      <Link
                        href={
                          getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.google_review
                          ) || "#"
                        }
                        target={
                          getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.google_review
                          )
                            ? "_blank"
                            : "_self"
                        }
                        onClick={(e) => {
                          if (
                            !getFilteredTestimonials(
                              student?.gotjob[0]?.mini_testimonial?.url_details
                                ?.google_review
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                        className={`${
                          !getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
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
                              student?.gotjob[0]?.mini_testimonial?.url_details
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
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.facebook
                          ) || "#"
                        }
                        target={
                          getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.facebook
                          )
                            ? "_blank"
                            : "_self"
                        }
                        onClick={(e) => {
                          if (
                            !getFilteredTestimonials(
                              student?.gotjob[0]?.mini_testimonial?.url_details
                                ?.facebook
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                        className={`${
                          !getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
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
                              student?.gotjob[0]?.mini_testimonial?.url_details
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
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.youtube_video_with_company_name
                          ) || "#"
                        }
                        target={
                          getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.youtube_video_with_company_name
                          )
                            ? "_blank"
                            : "_self"
                        }
                        onClick={(e) => {
                          if (
                            !getFilteredTestimonials(
                              student?.gotjob[0]?.mini_testimonial?.url_details
                                ?.youtube_video_with_company_name
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                        className={`${
                          !getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.youtube_video_with_company_name
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
                              student?.gotjob[0]?.mini_testimonial?.url_details
                                ?.youtube_video_with_company_name
                            )
                              ? "opacity-30 pointer-events-none"
                              : ""
                          }`}
                        />
                      </Link>
                    </div>
                    <div className="iconContainer">
                      <img
                        src="../share 1.svg"
                        alt="Share"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:pl-[1.125vw] sm:pr-[1vw] sm:pt-[2.222vh] flex flex-col gap-4  mobile:pt-[1.717vh]">
                <AlertDialogTrigger asChild>
                  <img
                    onClick={openImageDialog}
                    src={student.base_url+getFilteredTestimonials(
                      student?.gotjob[0]?.mini_testimonial?.img_details
                        ?.written_testimonial_image
                    )}
                    className="imageBox cursor-pointer"
                    alt="Testimonial Image"
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
                      src={student?.photoLink}
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
                  testimonialLink={student.base_url+getFilteredTestimonials(
                    student?.gotjob[0]?.mini_testimonial?.img_details
                      ?.written_testimonial_image
                  )}
                />
              )}
              {videoDialog && (
                <VideoPopup videoLink={getFilteredTestimonials(
                  student?.gotjob[0]?.mini_testimonial?.url_details
                    ?.youtube_video_with_company_name
                )} />
              )}
              {testimonialDialog && (
                <TestimonialPopup student={student} extractText={extractText} />
              )}
            </AlertDialog>
          </section>
        );
      })}
    </>
  );
};

export default PlacementContent;
