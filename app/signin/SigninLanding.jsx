import React from "react";
import "./SigninLanding.scss";
import SignInForm from "./SignInForm";
import Link from "next/link";
import { HOME_PATH } from "@/lib/RouteConstants";
const SigninLanding = () => {
  return (
    <section className="initialPage h-[100vh] overflow-hidden">
      <div className="flex h-full w-full relative">
        <div className="theorySection mt-[4.188vh] ml-[9.125rem]">
          <Link href={HOME_PATH}>
            <img
              className="w-[7.5vw] h-[8.333vh]"
              src="../../signin_logo.svg"
            />
          </Link>
          <article className="font-bold text-[2.813vw] text-[#FFFFFF] mt-[9.722vh]">
            Welcome to Worlds <br />
            Largest Training <br />
            Organization
          </article>
          <p className="mt-[5vh] font-semibold text-[1.25vw] text-white">
            From dreams to reality, ignite your path to
            <br /> success with Qspiders
          </p>
          <p className="text-white text-[0.938vw] mt-[27.083vh]">
            Copyright @ Qspiders All Rights Reserved{" "}
          </p>
        </div>
        <div className="top-[50%] -translate-y-[50%] absolute right-[6%]">
          <SignInForm />
        </div>
      </div>
    </section>
  );
};

export default SigninLanding;
