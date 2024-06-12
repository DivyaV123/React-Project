import React, { useState } from "react";
import "./PlacementSidebar.scss";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import ImagePopup from "./ImagePopup";
import VideoPopup from "./VideoPopup";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";
import Link from "next/link";
import { branchAbbreviations } from "@/lib/utils";
const PlacementContent = ({ counsellorFilterResponse }) => {
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
    <>
      {counsellorFilterResponse?.map((student) => (
        <section className="w-full contentCard flex pt-[0.556vh] pl-[0.469vw] pb-[1.111vh] mb-[3.333vh] mt-[0.556vh] ">
          <AlertDialog popup="imagepopup">
            <div className="w-[15.547vw] ">
              <div className="h-[24.861vh] overflow-hidden w-full">
               <img
                src={student?.photoLink}
                className="w-full"
               />
              </div>             
              <div className="imageCard">
                <header className="studentName font-semibold py-[1.111vh] text-center">
                  {student?.name}
                </header>
                <div className="flex gap-1 studentDetails">
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
            <div className="pl-[1.563vw] w-[42.813vw] pt-[2.222vh] flex flex-col justify-between">
              <p className="studentReview">
                {student?.testimonial?.writtenTestimonial}
              </p>
              <div className="flex gap-2 items-center mb-[1.111vh] pl-[5vw]">
                <div className="text-[0.781vw] text-[#201C19] pr-[1.563vw]">
                  Reviews :
                </div>
                <div className="iconContainer">
                  <Link
                    href={student?.testimonial?.googleReview || "#"}
                    target="_blank"
                  >
                    <img src="../google 1.svg" 
                    alt="Google review"
                    onClick={(e) => {
                      if (!student?.testimonial?.googleReview) {
                        e.preventDefault();
                      }
                    }} />
                  </Link>
                </div>
                <div className="iconContainer">
                  <Link href={student?.testimonial?.fbReview || "#"} target="_blank">
                    <img src="../facebook 1.svg"
                    alt="Facebook Review"
                    onClick={(e) => {
                      if (!student?.testimonial?.fbReview) {
                        e.preventDefault();
                      }
                    }} />
                  </Link>
                </div>
                <div className="iconContainer">
                  <Link
                    href={student?.testimonial?.youtubeReview || "#"}
                    target="_blank"
                  >
                    <img
                      src="../youtube 1.svg"
                      alt="YouTube Review"
                      onClick={(e) => {
                        if (!student?.testimonial?.youtubeReview) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </Link>
                </div>
                <div className="iconContainer">
                  <img src="../share 1.svg" className="cursor-pointer"/>
                </div>
              </div>
            </div>
            <div className="pl-[3.125vw] pt-[2.222vh] flex flex-col gap-3">
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
          </AlertDialog>
        </section>
      ))}
    </>
  );
};

export default PlacementContent;
