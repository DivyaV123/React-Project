'use client'
import React, { useEffect, useState } from "react";
import "./SigninLanding.scss";
import SignInForm from "./SignInForm";
import Link from "next/link";
import { HOME_PATH, COURSEADDER_HOME } from "@/lib/RouteConstants";
const SigninLanding = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // This will run only on the client side
    const storedToken = localStorage.getItem('authToken');
    setToken(storedToken);
  }, []);

  return (
    <section className="initialPage h-[100vh] overflow-hidden">
      <div className="flex h-full w-full relative mobile:flex-col">
        <div className="theorySection mt-[4.188vh] ml-[9.125rem] mobile:mt-[2.575vh] mobile:mx-[5.581vw] w-[28.125vw] mobile:w-full">
          <Link href={token === 'COURSEADDER' ? COURSEADDER_HOME : HOME_PATH}>
            <img
              className="w-[7.5vw] h-[8.333vh] mobile:w-[22.326vw] mobile:h-[6.438vh]"
              src="../../signin_logo.svg"
            />
          </Link>
          <article className="font-bold text-[2.813vw] text-[#FFFFFF] mt-[9.722vh] mobile:text-[5.581vw] mobile:mt-[2.575vh]">
            Welcome to Worlds Largest Training Organization
          </article>
          <p className="mt-[5vh] font-semibold text-[1.25vw] text-white mobile:mt-[2.146vh] mobile:text-[2.791vw]">
            From dreams to reality, ignite your path to
            <br /> success with Qspiders
          </p>
        </div>
        <div className="sm:top-[50%] sm:-translate-y-[50%] sm:absolute sm:right-[6%]  mobile:mx-[5.581vw]">
          <SignInForm />
        </div>
        <p className="text-white text-[0.938vw] sm:absolute sm:bottom-[13.889vh] sm:ml-[9.125rem] mobile:text-[2.791vw] mobile:flex mobile:justify-center">
            Copyright @ Qspiders All Rights Reserved{" "}
          </p>
      </div>
    </section>
  );
};

export default SigninLanding;
