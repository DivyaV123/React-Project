import React from 'react'
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import Link from 'next/link';
import { NAV_BAR } from '@/lib/RouteConstants';
const CoursePopup = () => {
  return (
    <section className="w-full h-full block">
      <section className="flex justify-between my-[2.575vh] mx-[3.721vw] items-center">
      <Link className="flex items-center" href={NAV_BAR}>
          <img className="" src="/icon_arrow_left.svg" />
          <div className="font-bold text-[3.256vw]">Courses</div>
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
    </section>
  )
}

export default CoursePopup