"use client";
import React, { useState } from "react";
import "./IndividualCentres.scss";
import "../../IndividualBranches.scss";
import CommonBranch from "./CommonBranch";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { truncateText } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const IndividualCentres = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [branchName, courseId] = pathname.split("/").slice(2, 4);
  const { data: homeBranchData, error, isLoading } = useGetAllBranchesQuery();
  const filterCountryObj = homeBranchData?.data?.filter(ele=>ele?.countryName==='India')
  const navCities = filterCountryObj?.[0]?.cities;
  const selectedCity = navCities?.find((city) => city.cityName === branchName);
  const selectedId = selectedCity?.courses?.find(
    (item) => String(item.courseId) === String(courseId)
  );
  const citiesPerView = 10;
  const newNavCities = filterCountryObj?.[0]?.cities?.map((element) => {
    return {
      name: element.cityName,
      course: element.courses,
    };
  });

  const totalCities = newNavCities?.length;

  const handlePrevious = () => {
    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : totalCities - citiesPerView
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev < totalCities - citiesPerView ? prev + 1 : 0
    );
  };

  const currentCities = newNavCities?.slice(
    currentSlide,
    currentSlide + citiesPerView
  );

  return (
    <div className="w-full">
      <header className="offlineHeader">Our Offline Centres</header>
      <section className="citySection w-[95vw] mobile:w-[92.558vw] m-auto  pt-3 pb-16">
        <div className="flex justify-between items-center gap-1">
          {/* <div onClick={handlePrevious}>
            <Svg
              className="h-[3.004vh] w-[3.86vw]"
              width={svgicons.corasalArrowLeft[0]}
              heewBox={svgicons.corasalArrowLeft[2]}
              icoight={svgicons.corasalArrowLeft[1]}
              vin={svgicons.corasalArrowLeft[3]}
              color={svgicons.corasalArrowLeft[4]}
            />
          </div>
          <Carousel>
            <CarouselContent page="offlineBranches">
              <CarouselItem> */}
                <div className="flex cityNavbar w-full justify-evenly">
                  {newNavCities?.map((ele, index) => (
                    <div
                      onClick={() =>
                        router.push(`/offlineBranches/${ele.name}/${courseId}`)
                      }
                      className={`flex justify-center items-center py-2 mobile:w-[25vw] mobile:text-[2.791vw] mobile:py-[0.858vh]  text-[0.938vw] 
              ${ele.name === branchName ? "activeCity" : ""}`}
                    >
                      <button key={index}>{ele.name}</button>
                    </div>
                  ))}
                </div>
              {/* </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div onClick={handleNext}>
            <Svg
              className="h-[3.004vh] w-[3.86vw]"
              width={svgicons.corasalArrowRight[0]}
              height={svgicons.corasalArrowRight[1]}
              viewBox={svgicons.corasalArrowRight[2]}
              icon={svgicons.corasalArrowRight[3]}
              color={svgicons.corasalArrowRight[4]}
            />
          </div> */}
        </div>
        <section className="flex mobile:flex-col sm:gap-5 ">
          <div className="sm:w-[20vw] mt-6  p-1 h-full overflow-y-scroll myscrollbar mobile:hidden">
            {selectedCity &&
              selectedCity?.courses?.map((item, index) => (
                <section className="mobile:mb-[1.717vh] mobileCentre">
                  <div
                    onClick={() =>
                      router.push(
                        `/offlineBranches/${branchName}/${item.courseId}`
                      )
                    }
                    key={index}
                    className={`w-full sm:pr-6 sm:pl-4 sm:py-3 flex items-center gap-2 cursor-pointer ${
                      String(item.courseId) === String(courseId)
                        ? "courseName"
                        : ""
                    }`}
                  >
                    <img
                      src={item.courseIcon}
                      alt={item.courseName}
                      className="h-6 w-6 mobile:h-[3.863vh] mobile:w-[8.372vw]"
                    />
                    <h3
                      className={`text-[0.75rem] mobile:text-[2.791vw] font-medium ${
                        String(item.courseId) === String(courseId)
                          ? "text-white"
                          : "text-[#454545]"
                      }`}
                    >
                      {item.courseName}
                    </h3>
                  </div>
                  <div className="sm:hidden mobile:text-[2.558vw] mobile:pt-[1.931vh]">
                    {truncateText(item.courseDescription, 10)}
                  </div>
                </section>
              ))}
          </div>
          <div className="sm:hidden text-[#454545] text-[2.791vw] font-medium my-[2.575vh]">
            {selectedId?.courseName}
          </div>
          <CommonBranch selectedId={selectedId} page="NotofflineBranches" />
        </section>
      </section>
    </div>
  );
};

export default IndividualCentres;
