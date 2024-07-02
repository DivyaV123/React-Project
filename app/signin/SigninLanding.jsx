'use client'
import React, { useContext, useEffect, useState } from "react";
import "./SigninLanding.scss";
import SignInForm from "./SignInForm";
import Link from "next/link";
import { HOME_PATH, COURSEADDER_HOME } from "@/lib/RouteConstants";
import { GlobalContext } from "@/components/Context/GlobalContext";
const SigninLanding = () => {
  const { domainVariable } = useContext(GlobalContext)
  const [token, setToken] = useState(null);

  useEffect(() => {
    // This will run only on the client side
    const storedToken = localStorage.getItem('authToken');
    setToken(storedToken);
  }, []);

  return (
    <section className="initialPage h-[100vh] overflow-hidden">
      <div className="flex h-full w-full relative mobile:flex-col tabView:flex-col">
        <div className="theorySection mt-[4.188vh] ml-[9.125rem] mobile:mt-[2.575vh] mobile:mx-[5.581vw] w-[28.125vw] mobile:w-full tabView:w-full tabView:mt-0 tabView:top-[3.117vh] tabView:relative tabView:left-[3.226vw] tabView:ml-0">
          <Link href={token === 'COURSEADDER' ? COURSEADDER_HOME : HOME_PATH}>
            <img
              className="w-[7.5vw] h-[8.333vh] tabView:w-[12.903vw] tabView:h-[5.844vh] mobile:w-[22.326vw] mobile:h-[6.438vh]"
              src="../../signin_logo.svg"
            />
          </Link>
          <article className="font-bold text-[2.813vw] text-[#FFFFFF] tabView:flex  tabView:text-[4.839vw] tabView:relative tabView:w-[72.446vw] tabView:left-[14.651vw] tabView:justify-center tabView:mt-[3.722vh] mt-[9.722vh] mobile:text-[5.581vw] mobile:mt-[2.575vh]">
            Welcome to Worlds Largest Training Organization
          </article>
          <p className="mt-[5vh] tabView:hidden tabView:mt-[2vh] tabView:flex tabView:justify-center tabView:w-[69.22vw] tabView:relative tabView:left-[4.263vw] tabView:text-[2.151vw] font-semibold text-[1.25vw] text-white mobile:mt-[2.146vh] mobile:text-[2.791vw]">
            From dreams to reality, ignite your path to
            <br /> success with {domainVariable}
          </p>
          <p className="mt-[5vh] hidden tabView:block tabView:mt-[2vh] tabView:flex tabView:justify-center tabView:w-[69.22vw] tabView:relative tabView:left-[11.263vw] tabView:text-[2.151vw] font-semibold text-[1.25vw] text-white mobile:mt-[2.146vh] mobile:text-[2.791vw]">
            From dreams to reality, ignite your path to
            success with <br />{domainVariable}
          </p>
        </div>
        <div className="sm:top-[50%] tabView:left-[1.5vw] tabView:flex tabView:justify-center tabView:top-[35.193vh] sm:-translate-y-[50%] tabView:relative sm:absolute sm:right-[6%]  mobile:mx-[5.581vw]">
          <SignInForm />
        </div>
        <p className="text-white text-[0.938vw] tabView:bottom-[2.889vh] tabView:ml-0 tabView:w-[100vw] tabView:flex tabView:justify-center tabView:items-center tabView:text-[1.613vw] sm:absolute sm:bottom-[13.889vh] sm:ml-[9.125rem] mobile:text-[2.791vw] mobile:flex mobile:justify-center">
          Copyright @ {domainVariable} All Rights Reserved{" "}
        </p>
      </div>
    </section>
  );
};

export default SigninLanding;
