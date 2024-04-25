"use client";
import CarosalSection from "@/components/commonComponents/carosalSection/carosalSection";
import React from "react";
import "./sections.scss";
import Button from "@/components/commonComponents/button/Button";
import Fade from "react-reveal/Fade";
import CarosalFooter from "../carosalFooter/CarosalFooter";
import Counter from "@/components/commonComponents/counterAnimation/Counter";
function LandingCarosal() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 gap-4 h-[84vh]">
      <Fade left delay={0} duration={1000}>
        <aside className="flex items-center mb-8 2xl:mb-12 3xl:mb-16">
          <article className="headerArticle mb-10 w-full">
            <h1 className="mainHead pb-4 text-5xl 2xl:text-[3.5rem] 3xl:text-[4rem] opacity-100">
              Largest Software <br />{" "}
              <span className="gradient-text text-5xl 2xl:text-[3.5rem] 3xl:text-[4rem] font-extra-bold">Training Organization</span>{" "}
            </h1>
            {/* <h1 className=' text-xl gradient-text  text-primary-600 subHead pb-4 text-header-orange font-extra-bold mb-2 mt-2'>TRAINING ORGANIZATION</h1> */}
            <p className="paragraph 2xl:text[1.125rem] 3xl:text-[1.125rem] font-medium pb-4 text-ash">
              Innovating methodologies and tools to ensure flawless software{" "}
              <br /> performance. Your partner in achieving unparalleled quality{" "}
              <br /> assurance standards
            </p>
            <article className="pb-4">
              <Button className="primary 2xl:text-lg 3xl:text-xl" title="Get Started" />
            </article>
          </article>
        </aside>
      </Fade>
      <Fade right delay={0} duration={1000}>
        <aside className="flex items-center justify-end ">
          <article className="flex rounded-md gap-4 bg-white absolute w-56 h-[4.5rem] px-4 py-3 bg-primary-300 justify-start border-solid border-2 top-[5%] left-[9%] 2xl:left-[17%] border-dark-gray-600  items-center">
            <figure>
              <img src='./courseHomeIcon.svg' />
            </figure>
            <div>
              <h1 className="headerText font-bold">
                <Counter label="40+" targetValue={0} initialValue={0}></Counter>
              </h1>
              <h2 className="font-medium headerText font-large">
                Courses
              </h2>
            </div>
          </article>
          <article className="flex rounded-md gap-4 bg-white cursor-pointer  absolute w-[15.5rem] h-[4.5rem] px-4 py-3 bg-primary-300 justify-start border-solid border-2 top-[33%] left-[66%] 2xl:left-[68%] border-dark-gray-600  items-center">
            <figure>
              <img src="./hiringCompanyHomeicon.svg" />
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
          </article>
          <article className="flex rounded-md gap-4 absolute w-[14.75rem] h-[4.5rem] px-4 py-3 z-1  bg-white justify-start border-solid border-2 top-[57%] left-[62%] 2xl:[64%]  border-dark-gray-600  items-center">
            <figure>
              <img src="./teacherHomeIcon.svg" />
            </figure>
            <div>
              <h1 className="headerText font-bold">
                <Counter
                  label="500+"
                  targetValue={0}
                  initialValue={0}
                ></Counter>
              </h1>
              <h2 className="font-medium headerText font-large ">
                Trainers
              </h2>
            </div>
          </article>
          <article className="flex rounded-md gap-4 absolute w-[14.75rem] h-24 bg-white justify-start border-solid border-2 top-[27%] left-[3%] 2xl:left-[11%] border-dark-gray-600 px-4 py-3 items-center">
            <figure>
              <img src="./studentPlaceMentHomeIcon.svg" />
            </figure>
            <div>
              <h1 className="headerText font-bold">
                <Counter label="1" targetValue={0} initialValue={0}></Counter>
              </h1>
              <h2 className="headerText font-medium ">
                Student placed <br />
                in every 5 mins
              </h2>
            </div>
          </article>
          <article className="flex rounded-md gap-4 absolute w-[15rem] h-[4.5rem] px-4 py-3 bg-white justify-start border-solid border-2 top-[56%] -left-[3%] 2xl:left-[4%] border-dark-gray-600  items-center">
            <figure>
              <img src="./trainedStudentsHomeIcon.svg" />
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
          </article>
          <figure className="w-[75%] h-[84vh]">
            <img src="./landScreenpicture.png" className='h-[84vh]' alt="pic001"></img>
          </figure>
        </aside>
      </Fade>
    </div>
  );
}

export default LandingCarosal;
