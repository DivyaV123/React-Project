import React from "react";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import Link from "next/link";
import {
  HOME_PATH,
} from "@/lib/RouteConstants";
import MobileNavItems from "./MobileNavItems";
const MainNavPopup = () => {

  return (
    <section className="w-full h-full block">
      <section className="flex justify-between my-[2.575vh] mx-[3.721vw] items-center">
        <Link className="flex items-center" href={HOME_PATH}>
          <img className="" src="/icon_arrow_left.svg" />
          <div className="font-bold text-[3.256vw]">Home</div>
        </Link>
        <section className="border-none hover:bg-white p-0 ">
          <Svg
            className="w-[6.512vw] h-[3.004vh] outline-none"
            width={svgicons.cancelButtonIcon[0]}
            height={svgicons.cancelButtonIcon[1]}
            viewBox={svgicons.cancelButtonIcon[2]}
            icon={svgicons.cancelButtonIcon[3]}
            color={svgicons.cancelButtonIcon[4]}
          />
        </section>
      </section>
      <MobileNavItems />
    </section>
  );
};

export default MainNavPopup;
