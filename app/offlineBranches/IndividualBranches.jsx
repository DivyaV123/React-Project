"use client";
import React, { useContext, useState } from "react";
import "./IndividualBranches.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useRouter } from "next/navigation";
import { OFFLINE_CENTRES } from "@/lib/RouteConstants";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { truncateText } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const IndividualBranches = () => {
  const router = useRouter();
  const { data: homeBranchData, error, isLoading } = useGetAllBranchesQuery();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Assume 10 cities per view
  const citiesPerView = 10;
  const newNavCities = homeBranchData?.data[0].cities?.map((element) => {
    return {
      name: element.cityName,
      course: element.courses,
    };
  });

  // Total cities
  const totalCities = newNavCities?.length;

  const { selectedBranch, setSelectedBranch, setSelectedCourseId } = useContext(GlobalContext);



  const selectedCity = newNavCities?.find((city) => city.name === selectedBranch);

  const handleCourseRoute = (e, course) => {
    e.preventDefault();
    router.push(`${OFFLINE_CENTRES}`);
    setSelectedCourseId(course);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalCities - citiesPerView));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalCities - citiesPerView ? prev + 1 : 0));
  };

  const currentCities = newNavCities?.slice(currentSlide, currentSlide + citiesPerView);

  return (
    <div className="w-full">
      <header className="offlineHeader">Our Offline Centres</header>
      <section className="justify-center citySection w-[87.5vw] m-auto pt-[1.667vh] pb-[8.889vh]">
        <div className="flex justify-center gap-1">
          <div onClick={handlePrevious}>
            <Svg
              className="pb-[2.939vh]"
              width={svgicons.corasalArrowLeft[0]}
              height={svgicons.corasalArrowLeft[1]}
              viewBox={svgicons.corasalArrowLeft[2]}
              icon={svgicons.corasalArrowLeft[3]}
              color={svgicons.corasalArrowLeft[4]}
            />
          </div>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="flex items-center">
                  {currentCities?.map((ele, index) => (
                    <div
                      onClick={() => setSelectedBranch(ele.name)}
                      className={`cityNavbar flex justify-center p-1 items-center w-[8.359vw] py-[1.111vh] text-[0.938vw] ${ele.name === selectedBranch ? "activeCity" : ""
                        }`}
                      key={index}
                    >
                      <button>{ele.name}</button>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div onClick={handleNext}>
            <Svg
              className="pb-[2.939vh]"
              width={svgicons.corasalArrowRight[0]}
              height={svgicons.corasalArrowRight[1]}
              viewBox={svgicons.corasalArrowRight[2]}
              icon={svgicons.corasalArrowRight[3]}
              color={svgicons.corasalArrowRight[4]}
            />
          </div>
        </div>

        <div className="sm:pt-[3.333vh] mobile:py-[2.575vh]">
          <p className="font-medium text-[0.938vw] text-[#4987CE] mobile:text-[2.791vw]">
            Select Course to View our offline Centres
          </p>
        </div>
        <section className="sm:w-[80vw] m-auto sm:pt-[1.667vh] flex sm:flex-wrap mobile:flex-col gap-4">
          {selectedCity &&
            selectedCity?.course?.map((course, index) => (
              <div
                onClick={(e) => handleCourseRoute(e, course.courseId)}
                key={index}
                className="BranchCard  py-[1.111vh] px-[0.625vw] mobile:px-[2.326vw] mobile:py-[1.073vh] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-[3.333vh] w-[1.875vw] mobile:w-[8.372vw] mobile:h-[3.863vh]"
                  />
                  <h3 className="text-[0.938vw] text-[#454545] font-bold mobile:text-[2.791vw]">
                    {course.title}
                  </h3>
                </div>
                <div>
                  <article className="text-[#575757] text-[0.866vw] pt-[2.222vh] mobile:text-[2.558vw] mobile:pt-[0.858vh]">
                    {course.description}
                  </article>
                </div>
              </div>
            ))}
        </section>
      </section>
    </div>
  );
};

export default IndividualBranches;
