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
          <article className="headerArticle mb-10 w-full">
            <h1 className="mainHead pb-2   text-5xl opacity-100">
              Largest Software <br />{" "}
              <span className="gradient-text font-extra-bold">Training organization</span>{" "}
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
          <article className="flex rounded-md gap-4 bg-white absolute w-56 h-[4.5rem] px-4 py-3 bg-primary-300 justify-around border-solid border-2 top-[5%] left-[18%] border-dark-gray-600  items-center">
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
          <article className="flex rounded-md gap-4 bg-white cursor-pointer  absolute w-60 h-[4.5rem] px-4 py-3 bg-primary-300 justify-around border-solid border-2 top-[33%] left-[73%] border-dark-gray-600  items-center">
            <figure>
              <img src="./hiringCompanyHomeicon.svg" />
            </figure>
            <div>
              <h1 className="headerText font-bold">
                <Counter
                  label="3.000+"
                  targetValue={0}
                  initialValue={0}
                ></Counter>
              </h1>
              <h2 className="font-medium headerText font-large ">
                Hiring Companies
              </h2>
            </div>
          </article>
          <article className="flex rounded-md gap-4 absolute w-[14.5rem] h-[4.5rem] px-4 py-3 z-1  bg-white justify-around border-solid border-2 top-[57%] left-[70%]   border-dark-gray-600  items-center">
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
          <article className="flex rounded-md gap-4 absolute w-56 h-24 bg-white justify-around border-solid border-2 top-[29%] left-[13%] border-dark-gray-600 px-4 py-3 items-center">
            <figure>
              <img src="./studentPlaceMentHomeIcon.svg" />
            </figure>
            <div>
              <h1 className="headerText font-bold">
                <Counter label="01" targetValue={0} initialValue={0}></Counter>
              </h1>
              <h2 className="headerText text-sm">
                Student placed <br />
                in every 5min
              </h2>
            </div>
          </article>
          <article className="flex rounded-md gap-4 absolute w-[14.5rem] h-[4.5rem] px-4 py-3 bg-white justify-around border-solid border-2 top-[56%] left-[4%] border-dark-gray-600  items-center">
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
          <figure className="w-[68%]">
            <img src="./landScreenpicture.png" alt="pic001"></img>
          </figure>
        </aside>
      </Fade>
    </div>
  );
}

export default LandingCarosal;
