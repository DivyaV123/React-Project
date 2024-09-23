"use client";
import React,{useContext} from "react";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import Link from "next/link";
import { NAV_BAR, HOME_PATH } from "@/lib/RouteConstants";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import { useRouter } from "next/navigation";
import Loading from "@/lib/Loading";
import { GlobalContext } from "@/components/Context/GlobalContext";
const CoursePopup = () => {
  const { domainVariable } = useContext(GlobalContext);
  let domain =
    domainVariable === "Qspiders"
      ? "qspiders"
      : domainVariable === "Jspiders"
      ? "jspiders"
      : domainVariable === "Pyspiders"
      ? "pyspiders"
      : "bspiders";
  const router = useRouter();
  const {
    data: courseResponse,
    isLoading: CourseIsLoading,
    error: CourseError,
  } = useGetAllCategoriesQuery(domain); 

  const getAllCategories = courseResponse?.data;

  const handleGetAllCategories = (id) => {
    router.push(`/coursenav/${id}`);
  };

  return (
    <section className="w-full h-full block">
      {CourseIsLoading ? (
        <Loading />
      ) : (
        <>
          <section className="flex justify-between my-[2.575vh] mx-[3.721vw] items-center">
            <Link className="flex items-center" href={NAV_BAR}>
              <img className="" src="/icon_arrow_left.svg" />
              <div className="font-bold text-[3.256vw]">Courses</div>
            </Link>
            <Link className="border-none hover:bg-white p-0" href={HOME_PATH}>
              <Svg
                className="w-[6.512vw] h-[3.004vh] outline-none"
                width={svgicons.cancelButtonIcon[0]}
                height={svgicons.cancelButtonIcon[1]}
                viewBox={svgicons.cancelButtonIcon[2]}
                icon={svgicons.cancelButtonIcon[3]}
                color={svgicons.cancelButtonIcon[4]}
              />
            </Link>
          </section>
          <section className="mx-[3.721vw] my-[0.858vh]">
            {getAllCategories?.map((course) => (
              <div
                className="flex justify-between py-[1.073vh]"
                onClick={() => handleGetAllCategories(course?.courseId)}
              >
                <div key={course?.courseId} className="flex gap-4">
                  <img src={course.icon} />
                  <div className="text-[2.791vw] text-[#454545] font-semibold">
                    {course?.title}
                  </div>
                </div>
                <div>
                  <img src="/arrow_right.svg" />
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </section>
  );
};

export default CoursePopup;
