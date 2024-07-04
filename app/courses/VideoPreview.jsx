import React from "react";
import {
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import "./CourseLanding.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
const VideoPreview = ({ videoUrl,setVideoPreview}) => {
  return (
    <div className="">
      <AlertDialogContent className="sm:max-w-[62.5vw]  rounded-xl mobile:h-[50vh] mobile:w-[80vw] mobile:p-0">
        <AlertDialogCancel className="border-none z-10  p-0 absolute right-2 mobile:right-0 mobile:-top-[0.5rem] cursor-pointer " >
          <Svg
          className='w-[5.953vw] h-[3.472vh] sm:w-[1.953vw] cursor-pointer'
          onClick={()=>setVideoPreview(false)}
            width={svgicons.cancelButtonIcon[0]}
            height={svgicons.cancelButtonIcon[1]}
            viewBox={svgicons.cancelButtonIcon[2]}
            icon={svgicons.cancelButtonIcon[3]}
            color={svgicons.cancelButtonIcon[4]}
          />
        </AlertDialogCancel>
        <video
          className="videoPreview"
          src={videoUrl}
          allowFullScreen
          autoPlay
          controls
        ></video>
      </AlertDialogContent>
    </div>
  );
};

export default VideoPreview;
