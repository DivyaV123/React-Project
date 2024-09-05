import React from "react";
import {
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import "./PlacementCards.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import Link from "next/link";
import { truncateText, toProperCase } from "@/lib/utils";
const TestimonialPopup = ({
  student,
  extractText,
  degree,
  stream,
  percentage,
  getFilteredTestimonials,
}) => {
  return (
    <div>
      <AlertDialogContent className="w-[92.558vw] p-4">
        <AlertDialogCancel className="border-none  p-0 top-0 absolute right-2">
          <Svg
            className="w-[6.512vw] h-[3.004vh] outline-none"
            width={svgicons.cancelButtonIcon[0]}
            height={svgicons.cancelButtonIcon[1]}
            viewBox={svgicons.cancelButtonIcon[2]}
            icon={svgicons.cancelButtonIcon[3]}
            color={svgicons.cancelButtonIcon[4]}
          />
        </AlertDialogCancel>
        <div className="mobile:flex mobile:flex-col flex mobile:w-full mobile:pr-[3.721vw]">
          <div className="imageCard">
            <header className="studentName font-semibold sm:py-[1.111vh] mobile:pt-[1.717vh] mobile:pb-[1.502vh] sm:text-center">
              {student?.name}
            </header>
            <div className="flex gap-1 studentDetails mobile:pb-[1.609vh]">
              <div>
                <div className="studentDetails flex justify-center">
                  {toProperCase(truncateText(degree, 5))}
                </div>
                <div className="educationDetails">Degree</div>
              </div>
              <div>|</div>
              <div>
                <div className="studentDetails flex justify-center">
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
          <div className="sm:pl-[1.563vw] sm:w-[42.813vw] sm:pt-[2.222vh] flex flex-col justify-between">
            <p className="studentReview mobile:pb-[1.502vh]">
              {student?.gotjob[0]?.mini_testimonial?.written_testimonial}
            </p>
            <div className="flex gap-2 items-center mb-[1.111vh] sm:pl-[5vw] mobile:mb-[1.824vh] mobile:gap-4 ">
              <div className="iconContainer ">
                <Link
                  href={
                    getFilteredTestimonials(
                      student?.gotjob[0]?.mini_testimonial?.url_details
                        ?.google_review
                    ) || "#"
                  }
                  target="_blank"
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
                  target="_blank"
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
                  target="_blank"
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
                  />
                </Link>
              </div>
              <div className="iconContainer">
                <img src="../share 1.svg" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </div>
  );
};

export default TestimonialPopup;
