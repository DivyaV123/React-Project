import React from "react";
import "../signin/SigninLanding.scss";
import SignupForm from "./SignupForm";
import Link from "next/link";
import { HOME_PATH } from "@/lib/RouteConstants";
const SignupLanding = () => {
  return (
    <section className="initialPage h-[100vh] overflow-hidden mobile:bg-center">
      <div className="flex h-full w-full relative mobile:block">
        <div className="theorySection mt-[4.188vh] ml-[9.125rem] mobile:ml-[5.581vw] mobile:mt-[2.5vh]">
          <Link href={HOME_PATH}>
            <img
              className="w-[7.5vw] h-[8.333vh] mobile:w-[22.326vw] mobile:h-[6.438vh]"
              src="../../QSPLogo.png"
            />
          </Link>
          <article className="font-bold text-[2.813vw] text-[#FFFFFF] mt-[9.722vh] mobile:mt-[2.722vh]  mobile:w-[87.442vw] mobile:h-[2.575vh] mobile:text-[2.575vh] mobile:font-[700]">
          <span className="hidden mobile:block ">
    Welcome to Worlds Largest
    <br />
    Training Organization
  </span>
  <span className=" mobile:hidden">
    Welcome to Worlds <br />
    Largest Training <br />
    Organization
  </span>
          </article>
          <p className="mt-[5vh] font-semibold text-[1.25vw] text-white mobile:mt-[7vh] mobile:w-[62.093vw] mobile:text-[2.791vw] mobile:font-[500]">
            From dreams to reality, ignite your path to
            <br /> success with Qspiders
          </p>
          <p className="text-white text-[0.938vw] mt-[27.083vh] mobile:relative mobile:top-[43vh] mobile:flex mobile:justify-center mobile:items-center mobile:text-[2.791vw] mobile:leading-[1.931vh] mobile:font-[400] mobile:w-[88.442vw]">
            Copyright @ Qspiders All Rights Reserved{" "}
          </p>
        </div>
        <div className="top-[50%] -translate-y-[50%] absolute right-[6%] mobile:right-0 mobile:flex mobile:justify-center mobile:items-center mobile:relative mobile:mt-[1vh] mobile:w-[100vw] mobile:top-[2vh]">
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default SignupLanding;
