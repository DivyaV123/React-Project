import React, { useState } from "react";
import "./PlacementSidebar.scss";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import ImagePopup from "./ImagePopup";
import VideoPopup from "./VideoPopup";
import Link from "next/link";
import { branchAbbreviations } from "@/lib/utils";
import { truncateText } from "@/lib/utils";
import TestimonialPopup from "./TestimonialPopup";
const PlacementContent = ({ counsellorFilterResponse }) => {
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

  return (
    <>
      {counsellorFilterResponse?.map((student) => (
        <section
          className="w-[99.4%] mobile:w-[92.558vw]  contentCard flex mobile:flex-row-reverse sm:pt-[0.556vh]
         sm:pl-[0.469vw] sm:pb-[1.111vh] sm:mb-[3.333vh] sm:mt-[0.556vh] sm:ml-[0.078vw] mobile:my-[2.575vh] mobile:gap-4 mobile:justify-end"
        >
          <AlertDialog popup="imagepopup">
            <div className="mobile:flex mobile:flex-col flex mobile:w-full mobile:pr-[3.721vw]">
              <div className="sm:w-[15.547vw] ">
                <div className="h-[24.861vh] overflow-hidden w-full rounded-2xl mobile:hidden">
                  <img src={student?.photoLink} className="w-full" />
                </div>
                <div className="imageCard">
                  <header className="studentName font-semibold sm:py-[1.111vh] mobile:pt-[1.717vh] mobile:pb-[1.502vh] sm:text-center">
                    {student?.name}
                  </header>
                  <div className="flex gap-1 studentDetails mobile:pb-[1.609vh]">
                    <div>
                      <div className="studentDetails flex justify-center">
                        {student?.mastersDegree?.mastersDegreeName
                          ? student?.mastersDegree?.mastersDegreeName
                          : student?.degree?.degreeName}
                      </div>
                      <div className="educationDetails">Degree</div>
                    </div>
                    <div>|</div>
                    <div>
                      <div className="studentDetails flex justify-center">
                        {extractText(student?.degree?.degreeStream)}
                      </div>
                      <div className="educationDetails">Stream</div>
                    </div>
                    <div>|</div>
                    <div>
                      <div className="studentDetails flex justify-center">
                        {student?.mastersDegree?.mastersDegreeAggregate
                          ? student?.mastersDegree?.mastersDegreeAggregate
                          : student?.degree?.degreeAggregate}
                      </div>
                      <div className="educationDetails">Aggregate</div>
                    </div>
                    <div>|</div>
                    <div>
                      <div className="studentDetails flex justify-center">
                        {student?.mastersDegree?.mastersDegreeYop
                          ? student?.mastersDegree?.mastersDegreeYop
                          : student?.degree?.degreeYop}
                      </div>
                      <div className="educationDetails">YOP</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:pl-[1.563vw] sm:w-[42.813vw] sm:pt-[2.222vh] flex flex-col justify-between">
                <p className="studentReview mobile:hidden">
                  {student?.testimonial?.writtenTestimonial}
                </p>

                <p className="studentReview mobile:pb-[1.502vh] sm:hidden">
                  {student?.testimonial?.writtenTestimonial.length > 75 ? (
                    <>
                      {truncateText(student.testimonial.writtenTestimonial, 75)}
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
                    student.testimonial.writtenTestimonial
                  )}
                </p>

                <div className="flex gap-2 items-center mb-[1.111vh] sm:pl-[5vw] mobile:mb-[1.824vh] mobile:gap-4 ">
                  <div className="text-[0.781vw] text-[#201C19] pr-[1.563vw] mobile:hidden">
                    Reviews :
                  </div>
                  <div className="iconContainer ">
                    <Link
                      href={student?.testimonial?.googleReview || "#"}
                      target={
                        student?.testimonial?.googleReview ? "_blank" : "_self"
                      }
                      onClick={(e) => {
                        if (!student?.testimonial?.googleReview) {
                          e.preventDefault();
                        }
                      }}
                      className={`${
                        !student?.testimonial?.googleReview
                          ? "pointer-events-none"
                          : ""
                      }`}
                    >
                      <img
                        src="../google 1.svg"
                        alt="Google review"
                        className={`${
                          !student?.testimonial?.googleReview
                            ? "opacity-30 pointer-events-none"
                            : ""
                        }`}
                      />
                    </Link>
                  </div>
                  <div className="iconContainer">
                    <Link
                      href={student?.testimonial?.fbReview || "#"}
                      target={
                        student?.testimonial?.googleReview ? "_blank" : "_self"
                      }
                      onClick={(e) => {
                        if (!student?.testimonial?.fbReview) {
                          e.preventDefault();
                        }
                      }}
                      className={`${
                        !student?.testimonial?.fbReview
                          ? "pointer-events-none"
                          : ""
                      }`}
                    >
                      <img
                        src="../facebook 1.svg"
                        alt="Facebook Review"
                        className={`${
                          !student?.testimonial?.fbReview
                            ? "opacity-30 pointer-events-none"
                            : ""
                        }`}
                      />
                    </Link>
                  </div>
                  <div className="iconContainer">
                    <Link
                      href={student?.testimonial?.youtubeReview || "#"}
                      target={
                        student?.testimonial?.googleReview ? "_blank" : "_self"
                      }
                      onClick={(e) => {
                        if (!student?.testimonial?.youtubeReview) {
                          e.preventDefault();
                        }
                      }}
                      className={`${
                        !student?.testimonial?.youtubeReview
                          ? "pointer-events-none"
                          : ""
                      }`}
                    >
                      <img
                        src="../youtube 1.svg"
                        alt="YouTube Review"
                        className={`${
                          !student?.testimonial?.youtubeReview
                            ? "opacity-30 pointer-events-none"
                            : ""
                        }`}
                      />
                    </Link>
                  </div>
                  <div className="iconContainer">
                    <img src="../share 1.svg" className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:pl-[1.125vw] sm:pr-[1vw] sm:pt-[2.222vh] flex flex-col gap-3  mobile:pt-[1.717vh]">
              <AlertDialogTrigger asChild>
                <img
                  onClick={openImageDialog}
                  src={student?.testimonial?.testimonialLink}
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
                testimonialLink={student?.testimonial?.testimonialLink}
              />
            )}
            {videoDialog && (
              <VideoPopup videoLink={student?.testimonial?.youtubeReview} />
            )}
            {testimonialDialog && (
              <TestimonialPopup student={student} extractText={extractText} />
            )}
          </AlertDialog>
        </section>
      ))}
    </>
  );
};

export default PlacementContent;
