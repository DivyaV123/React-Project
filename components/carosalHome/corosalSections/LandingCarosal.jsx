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
    <div className="h-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 gap-4 h-{1000px}">
      <Fade left delay={0} duration={1000}>
        <aside className="flex items-center mb-8">
          <article className="headerArticle">
            <h1 className="mainHead pb-2 text-dark-gray font-extra-bold font-2xl opacity-100">
              Largest Software <br />{" "}
              <span className="gradient-text">Training organization</span>{" "}
            </h1>
            {/* <h1 className=' text-xl gradient-text  text-primary-600 subHead pb-4 text-header-orange font-extra-bold mb-2 mt-2'>TRAINING ORGANIZATION</h1> */}
            <p className="paragraph font-medium pb-4 text-ash">
              Innovating methodologies and tools to ensure flawless software{" "}
              <br /> performance. Your partner in achieving unparalleled quality{" "}
              <br /> assurance standards
            </p>
            <article>
              <Button className="primary" title="Get Started" />
            </article>
          </article>
        </aside>
      </Fade>
      <Fade right delay={0} duration={1000}>
        <aside className="flex items-center justify-end ">
          <article className="flex rounded-md gap-3 bg-white absolute h-16  bg-primary-300 justify-around border-solid border-2 top-[8%] left-[29%] border-dark-gray-600 w-40 items-center">
            <figure>
              <img src='./courseHomeIcon.svg' />
            </figure>
            <div>
              <h1 className="text-dark-gray font-extra-bold">
                <Counter label="40+" targetValue={0} initialValue={0}></Counter>
              </h1>
              <h2 className="font-medium text-dark-gray font-large">
                Courses
              </h2>
            </div>
          </article>
          <article className="flex rounded-md gap-3 bg-white cursor-pointer teansform hover:-translate-y-1 duration-300 absolute h-16  bg-primary-300 justify-around border-solid border-2 top-[24%] left-[84%] border-dark-gray-600 w-40 items-center">
            <figure>
              <img src="./hiringCompanyHomeicon.svg" />
            </figure>
            <div>
              <h1 className="text-dark-gray font-extra-bold">
                <Counter
                  label="3.000+"
                  targetValue={0}
                  initialValue={0}
                ></Counter>
              </h1>
              <h2 className="font-medium text-dark-gray font-large ">
                Companies
              </h2>
            </div>
          </article>
          <article className="flex rounded-md gap-3 absolute h-16 z-1  bg-white justify-around border-solid border-2 top-[52%] left-[72%]   border-dark-gray-600 w-40 items-center">
            <figure>
              <img src="./teacherHomeIcon.svg" />
            </figure>
            <div>
              <h1 className="text-dark-gray font-extra-bold">
                <Counter
                  label="500+"
                  targetValue={0}
                  initialValue={0}
                ></Counter>
              </h1>
              <h2 className="font-medium text-dark-gray font-large ">
                Trainers
              </h2>
            </div>
          </article>
          <article className="flex rounded-md gap-3 absolute h-16 bg-white justify-around border-solid border-2 top-[37%] left-[28%] border-dark-gray-600 p-2 items-center">
            <figure>
              <img src="./studentPlaceMentHomeIcon.svg" />
            </figure>
            <div>
              <h1 className="text-dark-gray font-extra-bold">
                <Counter label="01" targetValue={0} initialValue={0}></Counter>
              </h1>
              <h2 className="text-dark-gray text-sm">
                Student placed <br />
                in every 5min
              </h2>
            </div>
          </article>
          <article className="flex rounded-md gap-3 absolute h-16 bg-white justify-around border-solid border-2 top-[66%] left-[15%] border-dark-gray-600 p-2 items-center">
            <figure>
              <img src="./trainedStudentsHomeIcon.svg" />
            </figure>
            <div>
              <h1 className="text-dark-gray font-extra-bold">
                <Counter
                  label="4,00,000+"
                  targetValue={0}
                  initialValue={0}
                ></Counter>
              </h1>
              <h2 className="text-dark-gray font-medium">Trained Students</h2>
            </div>
          </article>
          <figure className="w-[70%]">
            <img src="./landScreenpicture.png" alt="pic001"></img>
          </figure>
        </aside>
      </Fade>
    </div>
  );
}

export default LandingCarosal;
