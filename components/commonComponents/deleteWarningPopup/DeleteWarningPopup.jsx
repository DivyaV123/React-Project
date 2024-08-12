import React from "react";
import {
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
const DeleteWarningPopup = ({ header, icon, setDeleteCategory, btnText,contentText,deleteFunction }) => {
  return (
    <div className="">
      <AlertDialogContent className="sm:max-w-[41.016vw] rounded-3xl px-[1.875vw] pt-[2.222vh] pb-[3.333vh] mobile:h-[50vh] mobile:w-[80vw] mobile:p-0">
        <header className="flex justify-between items-center pb-[2.222vh]">
          <div className="font-bold text-[1.25vw] text-[#212121]">{header}</div>

          <AlertDialogCancel className="border-none z-10  p-0 absolute right-2 mobile:right-0 mobile:-top-[0.5rem] cursor-pointer ">
            <Svg
              className="w-[5.953vw] h-[3.472vh] sm:w-[1.953vw] cursor-pointer"
              onClick={() => setDeleteCategory(false)}
              width={svgicons.cancelButtonIcon[0]}
              height={svgicons.cancelButtonIcon[1]}
              viewBox={svgicons.cancelButtonIcon[2]}
              icon={svgicons.cancelButtonIcon[3]}
              color={svgicons.cancelButtonIcon[4]}
            />
          </AlertDialogCancel>
        </header>
        <section className="flex flex-col items-center ">
          <img className="h-32 w-32 m-0" src={icon} />
          <p className="mb-[2.639vh] text-[#212121] text-[1.094vw] font-bold">
            {contentText}
          </p>
          <button className="bg-[#FF7B1B] text-white text-[1.094vw] font-medium rounded-md py-[0.833vh] px-[4.805vw] my-[1.389vh]" onClick={deleteFunction}>
            {btnText}
          </button>
        </section>
      </AlertDialogContent>
    </div>
  );
};

export default DeleteWarningPopup;
