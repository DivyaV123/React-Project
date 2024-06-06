import React, { useState } from "react";
import "./PlacementSidebar.scss";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import ImagePopup from "./ImagePopup";
import VideoPopup from "./VideoPopup";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";
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
  const convertStream = (inputString) => {
    const mapping = {
      "INFORMATION TECHNOLOGY": "IT",
      "CIVIL ENGINEERING": "Civil",
      "COMPUTER SCIENCE AND ENGINEERING":"CSE",
      "MICROSYSTEMS ENGINEERING":"MIE",
      "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING":"AI&ML",
      "MECHANICAL ENGINEERING":"MECH",
      "ELECTRONICS AND COMMUNICATION ENGINEERING":"ECE",
      "AERONAUTICAL ENGINEERINGNAUTICAL ENGINEERING":"AEE",
      "BIOMEDICAL ENGINEERING":"BIE",
      "MINING ENGINEERING":"ME",
      "AERONAUTICAL ENGINEERING":"AE",
      "POLITICAL SCIENCE":"PS"
    };

    return mapping[inputString.toUpperCase()] || inputString;
  };
  
  return (
    <>
      {counsellorFilterResponse?.map((student) => (
        <section className="w-full contentCard flex pt-[0.556vh] pl-[0.469vw] pb-[1.111vh] mb-[3.333vh] mt-[0.556vh] h-[32.083vh]">
          <AlertDialog popup='imagepopup'>
            <div className="w-[15.547vw] ">
              <img
                src={student?.photoLink}
                className="w-full h-[24.861vh] object-cover"
              />
              <div className="imageCard">
                <header className="studentName font-semibold py-[1.111vh]">
                  {student?.name}
                </header>
                <div className="flex gap-1 studentDetails">
                  <div>
                    <div className="studentDetails flex justify-center">
                      {student?.mastersDegree?.mastersDegreeName ? student?.mastersDegree?.mastersDegreeName : student?.degree?.degreeName}
                    </div>
                    <div className="educationDetails">Degree</div>
                  </div>
                  <div>|</div>
                  <div>
                    <div className="studentDetails flex justify-center">
                      {convertStream(student?.degree?.degreeStream)}
                    </div>
                    <div className="educationDetails">Stream</div>
                  </div>
                  <div>|</div>
                  <div>
                    <div className="studentDetails flex justify-center">
                      {student?.mastersDegree?.mastersDegreeAggregate ? student?.mastersDegree?.mastersDegreeAggregate : student?.degree?.degreeAggregate}
                    </div>
                    <div className="educationDetails">Aggregate</div>
                  </div>
                  <div>|</div>
                  <div>
                    <div className="studentDetails flex justify-center">
                      {student?.degree?.degreeYop}
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
                  <img src="../google 1.svg" />
                </div>
                <div className="iconContainer">
                  <img src="../facebook 1.svg" />
                </div>
                <div className="iconContainer">
                  <img src="../youtube 1.svg" />
                </div>
                <div className="iconContainer">
                  <img src="../share 1.svg" />
                </div>
              </div>
            </div>
            <div className="pl-[3.125vw] pt-[2.222vh] flex flex-col gap-3">
              <AlertDialogTrigger asChild>
                <img onClick={openImageDialog} src={student?.testimonial?.testimonialLink} className="imageBox cursor-pointer" />
              </AlertDialogTrigger>
              <AlertDialogTrigger asChild>
                <img onClick={openVideoDialog} typeof="foaf:Image" className="videoBox cursor-pointer" />
              </AlertDialogTrigger>
            </div>
            {
              imageDialog && (
                <ImagePopup testimonialLink={student?.testimonial?.testimonialLink} />
              )
            }
            {
              videoDialog && (
                <VideoPopup videoLink={student?.testimonial?.youtubeReview} />
              )
            }
          </AlertDialog>
        </section>
      ))}
    </>
  );
};

export default PlacementContent;
