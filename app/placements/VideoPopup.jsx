import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import "./PlacementCards.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
const VideoPopup = ({ videoLink }) => {
  function extractLastWord(url) {
    const match = url.match(/youtu\.be\/([^\/]+)$/);
    return match ? match[1] : null;
  }
  return (
    <div className="">
      <AlertDialogContent className="max-w-[62.5vw] px-[5.556vh] rounded-xl">
        <AlertDialogCancel className="border-none hover:bg-white p-0 absolute right-0">
          <Svg
          className='w-[1.953vw] h-[3.472vh]'
            width={svgicons.cancelButtonIcon[0]}
            height={svgicons.cancelButtonIcon[1]}
            viewBox={svgicons.cancelButtonIcon[2]}
            icon={svgicons.cancelButtonIcon[3]}
            color={svgicons.cancelButtonIcon[4]}
          />
        </AlertDialogCancel>
        <iframe
          className="videoPopup"
          src={`https://www.youtube.com/embed/${extractLastWord(videoLink)}`}
          allowFullScreen
        ></iframe>
      </AlertDialogContent>
    </div>
  );
};

export default VideoPopup;
