"use client";
import React, { useState } from "react";
import "./courseCard.scss";
import Button from "../button/Button";
import Svg from "../Svg/Svg";
import { truncateText } from "@/lib/utils";
import { svgicons } from "@/components/assets/icons/svgassets";
import EnrollPopUp from "./EnrollPopUp";
import { useRouter } from "next/navigation";
import Image from "next/image";
function CourseCard({ cardData }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleKnowMore = (id) => {
    router.push(`/courses/${id}`);
  };
  return (
    <>
      <section className="cardStyle flex flex-col ">
        <picture className="flex justify-gf-center w-full">
          {/* <img className='px-[0.781vw] pt-[1.389vh] pb-[1.111vh] w-full  mobile:p-0 mobile:h-[17.167vh]'
                        src={cardData.image ? cardData.image : cardData.homePageCourseImage}
                        alt='image'>
                    </img> */}
          {cardData?.image || cardData?.homePageCourseImage ? (
            <Image
              src={
                cardData?.image
                  ? cardData?.image
                  : cardData?.homePageCourseImage
              }
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
              alt="Course Image"
            />
          ) : (
            <Image
              src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20with%20Python/2024-06-18T16%3A58%3A07.793227700_Data%20Science%20with%20Python-homepage.png"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
              alt="Course Image"
            />
          )}
        </picture>
        <div></div>
        <aside className="sm:px-[0.781vw] sm:pt-[1.389vh] mobile:pt-[1.717vh] mobile:pl-[3.721vw] mobile:pr-[3.721vw]">
          <h3
            title={cardData?.courseName ? cardData?.courseName : cardData?.title}
            className="font-bold text-[1.25vw] mobile:text-[3.721vw] sm:h-[6.667vh] mobile:h-[5.15vh]"
          >
            {cardData?.courseName
              ? truncateText(cardData?.courseName, 43)
              : cardData?.title
              ? truncateText(cardData?.title, 43)
              : "Test Architect"}
          </h3>
          <p
            title={
              cardData?.courseDescription
                ? cardData?.courseDescription
                : cardData?.description
            }
            className="flex headerText justify-start pt-[0.833vh]  text-[0.938vw] mobile:text-[3.256vw] mobile:pt-[0.858vh] text-ash  "
          >
            {cardData?.courseDescription
              ? truncateText(cardData?.courseDescription, 50)
              : cardData?.description
              ? truncateText(cardData?.description, 50)
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards."}
          </p>
          <div className="flex gap-1 pt-[0.833vh] mobile:pt-[0.644vh] items-end">
            <span className="flex text-[0.938vw] mobile:text-[3.256vw] font-bold items-baseline">
              4.5
            </span>
            <span className="flex text-[0.938vw] mobile:text-[3.256vw] font-bold pt-0.5 items-baseline">
              <img src="/Icon__colored_star.svg" />
            </span>
            {/* <span className="flex text-[0.938vw] mobile:text-[2.791vw] items-baseline">{`(6,256+)`}</span> */}
          </div>

          <div className="flex justify-center gap-2 py-[1.389vh]  ">
            <aside>
              <Button
                onClick={() => handleCardClick()}
                className="courseCardBtn text-[1.094vw] mobile:text-[2.791vw]  font-semibold text-white bg-gradient rounded-md"
                title="Enroll now"
              />
            </aside>
            <aside>
              <Button
                onClick={() => handleKnowMore(cardData?.courseId || cardData?.courseResponseId)}
                className="courseCardBtn buttonTextColour  text-[1.094vw] mobile:text-[2.791vw]  font-semibold border border-orange-500 rounded-md"
                title="Know more"
              />
            </aside>
          </div>
        </aside>
      </section>
      <EnrollPopUp
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}

export default CourseCard;
