import React, { useState } from "react";
import "./PlacementSidebar.scss";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import ImagePopup from "./ImagePopup";
import VideoPopup from "./VideoPopup";
import Link from "next/link";
import { branchAbbreviations } from "@/lib/utils";
import { truncateText, toProperCase } from "@/lib/utils";
import TestimonialPopup from "./TestimonialPopup";
import { extractVideoId } from "@/lib/utils";

const PlacementContentGridMode = ({ placementList }) => {
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
    <div className=" w-[90vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
      {placementList?.map((student, i) => {
        const getFilteredTestimonials = (getTestimonialArray) => {
          if (getTestimonialArray?.length > 0) {
            const checkArray = getTestimonialArray?.filter((testimonial) => {
              return testimonial?.verify;
            });
           
            return checkArray[0]?.url || checkArray[0]?.img;
          } else return "";
        };
        const videoId = extractVideoId(
          getFilteredTestimonials(
            student?.gotjob[0]?.mini_testimonial?.url_details
              ?.youtube_video_without_company_name
          )
        );
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
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
          <AlertDialog popup="imagespopups" key={i}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <AlertDialogTrigger asChild>
                <div
                  onClick={openVideoDialog}
                  className={`relative h-48  ${
                    student?.gotjob[0]?.mini_testimonial?.url_details
                      ?.youtube_video_without_company_name
                      ? "cursor-pointer"
                      : "cursor-not-allowed"
                  }`}
                >
                  <img
                    src={
                      student?.thumbnail_img
                        ? `${student.base_url}${student.thumbnail_img}`
                        : defaultImage
                    }
                    className="w-full h-full object-cover"
                    alt={student?.name}
                  />
                  <img
                    src="../play_button_placements.svg"
                    alt="Play Button"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
                  />
                </div>
              </AlertDialogTrigger>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2">{student?.name}</h3>
                <div className="flex flex-wrap gap-2 text-sm mb-2">
                  <span title={degree}>
                    {toProperCase(truncateText(degree, 5))}
                  </span>
                  <span>|</span>
                  <span title={stream}>
                    {truncateText(stream, 3)?.toUpperCase() || "N/A"}
                  </span>
                  <span>|</span>
                  <span>{percentage || "N/A"}</span>
                  <span>|</span>
                  <span>{student?.highestyop || "N/A"}</span>
                </div>
                {/* <p className="text-sm mb-4 flex-grow">
                  {student?.gotjob[0]?.mini_testimonial?.written_testimonial?.length > 75 ? (
                    <>
                      {truncateText(student?.gotjob[0]?.mini_testimonial?.written_testimonial, 75)}
                      <AlertDialogTrigger asChild>
                        <span className="text-blue-500 cursor-pointer" onClick={handleViewmore}>
                          View more
                        </span>
                      </AlertDialogTrigger>
                    </>
                  ) : (
                    student?.gotjob[0]?.mini_testimonial?.written_testimonial
                  )}
                </p> */}
                <div className="flex gap-2 mt-auto">
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
                            ?.youtube_video_without_company_name
                        ) || "#"
                      }
                      target={
                        getFilteredTestimonials(
                          student?.gotjob[0]?.mini_testimonial?.url_details
                            ?.youtube_video_without_company_name
                        )
                          ? "_blank"
                          : "_self"
                      }
                      onClick={(e) => {
                        if (
                          !getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.youtube_video_without_company_name
                          )
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className={`${
                        !getFilteredTestimonials(
                          student?.gotjob[0]?.mini_testimonial?.url_details
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
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.youtube_video_without_company_name
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
                            ?.twitter
                        ) || "#"
                      }
                      target={
                        getFilteredTestimonials(
                          student?.gotjob[0]?.mini_testimonial?.url_details
                            ?.twitter
                        )
                          ? "_blank"
                          : "_self"
                      }
                      onClick={(e) => {
                        if (
                          !getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.twitter
                          )
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className={`${
                        !getFilteredTestimonials(
                          student?.gotjob[0]?.mini_testimonial?.url_details
                            ?.twitter
                        )
                          ? "pointer-events-none"
                          : ""
                      }`}
                    >
                      <img
                        src="../twitter.svg"
                        alt="Share"
                        className={`${
                          !getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.twitter
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
                            ?.instagram
                        ) || "#"
                      }
                      target={
                        getFilteredTestimonials(
                          student?.gotjob[0]?.mini_testimonial?.url_details
                            ?.instagram
                        )
                          ? "_blank"
                          : "_self"
                      }
                      onClick={(e) => {
                        if (
                          !getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.instagram
                          )
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className={`${
                        !getFilteredTestimonials(
                          student?.gotjob[0]?.mini_testimonial?.url_details
                            ?.instagram
                        )
                          ? "pointer-events-none"
                          : ""
                      }`}
                    >
                      <img
                        src="../instagram.svg"
                        alt="Share"
                        className={`${
                          !getFilteredTestimonials(
                            student?.gotjob[0]?.mini_testimonial?.url_details
                              ?.instagram
                          )
                            ? "opacity-30 pointer-events-none"
                            : ""
                        }`}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {imageDialog &&
                student?.gotjob[0]?.mini_testimonial?.img_details
                  ?.written_testimonial_image && (
                  <ImagePopup
                    testimonialLink={
                      student.base_url +
                      getFilteredTestimonials(
                        student?.gotjob[0]?.mini_testimonial?.img_details
                          ?.written_testimonial_image
                      )
                    }
                  />
                )}
              {videoDialog &&
                student?.gotjob[0]?.mini_testimonial?.url_details
                  ?.youtube_video_without_company_name && (
                  <VideoPopup
                    videoLink={getFilteredTestimonials(
                      student?.gotjob[0]?.mini_testimonial?.url_details
                        ?.youtube_video_without_company_name
                    )}
                  />
                )}
              {testimonialDialog && (
                <TestimonialPopup
                  student={student}
                  degree={degree}
                  stream={stream}
                  percentage={percentage}
                  getFilteredTestimonials={getFilteredTestimonials}
                  extractText={extractText}
                />
              )}
            </div>
          </AlertDialog>
        );
      })}
    </div>
  );
};

export default PlacementContentGridMode;
