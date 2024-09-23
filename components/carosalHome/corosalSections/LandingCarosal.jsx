"use client";
import CarosalSection from "@/components/commonComponents/carosalSection/carosalSection";
import React, { useContext, useEffect, useState } from "react";
import "./sections.scss";
import Button from "@/components/commonComponents/button/Button";
import { Fade } from 'react-awesome-reveal'
import CarosalFooter from "../carosalFooter/CarosalFooter";
import Counter from "@/components/commonComponents/counterAnimation/Counter";
import LandingCarosalSkeleton from "./LandingCarosalSkeleton";
import HiringModal from "@/app/hireFromUs/Modal/HiringModal";
import { GlobalContext } from "@/components/Context/GlobalContext";
import Image from "next/image";
import { useGetHeroPageQuery } from "@/redux/queries/getheroPageApi";
function LandingCarosal() {
  const { domainVariable } = useContext(GlobalContext)
      let domain = domainVariable === "Qspiders" ? "qspiders" : domainVariable === "Jspiders" ? "jspiders" : domainVariable === "Pyspiders" ? "pyspiders" : "prospiders"
  const [isloading, setisLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('General Enquiries')
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, []);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen,"isModalOpen")
  const { data:heroPageData, isLoading, error } = useGetHeroPageQuery(domain);
  return (
    // isloading ? <LandingCarosalSkeleton />
    //   :
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 gap-4 sm:h-[84vh] mobile:block">
        <Fade direction="left" delay={0} duration={1000}>
          <aside className="flex items-center mb-8 2xl:mb-12 3xl:mb-16 mobile:m-0">
            <article className="headerArticle mb-10 w-full mobile:m-0">
              <h1 className="mainHead pb-[2.222vh] text-[3.75vw] mobile:text-[7.907vw] opacity-100 mobile:pt-[6.438vh] mobile:pb-[1.288vh] tabView:text-[4.57vw] tabView:font-normal">
                {heroPageData?.data?.title} <br />{" "}
                <span className="gradient-text text-[3.75vw] mobile:text-[7.907vw] font-extra-bold tabView:text-[3.59vw]">
                  {heroPageData?.data?.subtitle}
                </span>{" "}
              </h1>
              <p className="paragraph text-[1.25vw] mobile:text-[2.791vw] font-medium pb-[2.222vh] text-ash mobile:pb-[1.717vh]">
                {heroPageData?.data?.description}
              </p>
              <article className="sm:pb-[2.222vh] mobile:pb-[4.292vh]">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="primary text-[1.25vw] mobile:text-[3.721vw]"
                  title="Get Started"
                />
              </article>
            </article>
          </aside>
        </Fade>
        <Fade direction="right" delay={0} duration={1000}>
          <aside className="flex items-center justify-end mobile:hidden">
            {/* <article className="flex rounded-md gap-4 bg-white absolute w-56 h-[4.5rem] px-4 py-3 bg-primary-300 justify-start border-solid border-2 top-[5%] left-[9%] 2xl:left-[17%] border-dark-gray-600  items-center">
              <figure>
                <Image
                  src='courseHomeIcon.svg'
                  alt="Graduation Report Icon"
                  width={500}
                  height={500}
                  className="w-[90%]"
                />
              </figure>
              <div>
                <h1 className="headerText font-bold">
                  <Counter
                    label="40+"
                    targetValue={0}
                    initialValue={0}
                  ></Counter>
                </h1>
                <h2 className="font-medium headerText font-large">Courses</h2>
              </div>
            </article> */}
            {/* <article className="flex rounded-md gap-4 bg-white cursor-pointer  absolute w-[15.5rem] h-[4.5rem] px-4 py-3 bg-primary-300 justify-start border-solid border-2 top-[33%] left-[66%] 2xl:left-[68%] border-dark-gray-600  items-center">
              <figure>
                <Image
                  src='/hiringCompanyHomeicon.svg'
                  alt="Graduation Report Icon"
                  width={500}
                  height={500}
                  className="w-[90%]"
                />
              </figure>
              <div>
                <h1 className="headerText font-bold">
                  <Counter
                    label="3,000+"
                    targetValue={0}
                    initialValue={0}
                  ></Counter>
                </h1>
                <h2 className="font-medium headerText font-large ">
                  Hiring Companies
                </h2>
              </div>
            </article> */}
            {/* <article className="flex rounded-md gap-4 absolute w-[14.75rem] h-[4.5rem] px-4 py-3 z-1  bg-white justify-start border-solid border-2 top-[57%] left-[62%] 2xl:[64%]  border-dark-gray-600  items-center">
              <figure>
                <Image
                  src='/teacherHomeIcon.svg'
                  alt="Graduation Report Icon"
                  width={500}
                  height={500}
                  className="w-[90%]"
                />
              </figure>
              <div>
                <h1 className="headerText font-bold">
                  <Counter
                    label="500+"
                    targetValue={0}
                    initialValue={0}
                  ></Counter>
                </h1>
                <h2 className="font-medium headerText font-large ">Trainers</h2>
              </div>
            </article> */}
            {/* <article className="flex rounded-md gap-4 absolute w-[14.75rem] h-24 bg-white justify-start border-solid border-2 top-[27%] left-[3%] 2xl:left-[11%] border-dark-gray-600 px-4 py-3 items-center">
              <figure>
                <Image
                  src='/studentPlaceMentHomeIcon.svg'
                  alt="Graduation Report Icon"
                  width={500}
                  height={500}
                  className="w-[90%]"
                />
              </figure>
              <div>
                <h1 className="headerText font-bold">
                  <Counter label="1" targetValue={0} initialValue={0}></Counter>
                </h1>
                <h2 className="headerText font-medium ">
                  Students placed <br />
                  in every 5 mins
                </h2>
              </div>
            </article> */}
            {/* <article className="flex rounded-md gap-4 absolute w-[15rem] h-[4.5rem] px-4 py-3 bg-white justify-start border-solid border-2 top-[56%] -left-[3%] 2xl:left-[4%] border-dark-gray-600  items-center">
              <figure>
                <Image
                  src='/trainedStudentsHomeIcon.svg'
                  alt="Graduation Report Icon"
                  width={500}
                  height={500}
                  className="w-[90%]"
                />
              </figure>
              <div>
                <h1 className="headerText font-bold">
                  <Counter
                    label="4,00,000+"
                    targetValue={0}
                    initialValue={0}
                  ></Counter>
                </h1>
                <h2 className="headerText font-medium">Trained Students</h2>
              </div>
            </article> */}
            <figure className="w-[75%] h-[84vh] tabView:w-full tabView:h-auto">
              <Image
                src='/landScreenpicture.png'
                priority={true}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          </aside>
        </Fade>
      </div>
      <CarosalFooter heroPageData={heroPageData}/>
      {isModalOpen && (
        <HiringModal
          isModalOpen={isModalOpen}
          activeTab={activeTab}
          handleCloseModal={handleCloseModal}
          setActiveTab={setActiveTab}
        />
      )
      }
    </>
  );
}

export default LandingCarosal;
