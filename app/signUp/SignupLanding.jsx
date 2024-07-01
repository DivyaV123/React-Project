import React, { useContext } from "react";
import "../signin/SigninLanding.scss";
import SignupForm from "./SignupForm";
import Link from "next/link";
import { HOME_PATH } from "@/lib/RouteConstants";
import { GlobalContext } from "@/components/Context/GlobalContext";
const SignupLanding = () => {
  const { domainVariable } = useContext(GlobalContext)
  return (
    <section className="initialPage h-[100vh] overflow-hidden mobile:bg-center">
      <div className="flex h-full w-full relative mobile:block tabView:block">
        <div className="theorySection mt-[4.188vh] ml-[9.125rem] mobile:ml-[5.581vw] mobile:mt-[2.5vh] tabView:w-full tabView:mt-0 tabView:top-[1.117vh] tabView:relative tabView:left-[3.226vw] tabView:ml-0">
          <Link href={HOME_PATH}>
            <img
              className="w-[7.5vw] h-[8.333vh] tabView:w-[12.903vw] tabView:h-[5.844vh] mobile:w-[22.326vw] mobile:h-[6.438vh]"
              src="../../QSPLogo.png"
            />
          </Link>
          <article className="font-bold text-[2.813vw] text-[#FFFFFF] tabView:mt-0 mt-[9.722vh] mobile:mt-[2.722vh]  mobile:w-[87.442vw] mobile:h-[2.575vh] mobile:text-[2.575vh] mobile:font-[700]">
            <span className="hidden mobile:block tabView:block tabView:mt-[1vh] tabView:flex tabView:justify-center tabView:w-[69.22vw] tabView:relative tabView:left-[11.263vw] tabView:text-[4.839vw]">
              Welcome to Worlds Largest
              <br />
              Training Organization
            </span>
            <span className=" mobile:hidden tabView:hidden">
              Welcome to Worlds <br />
              Largest Training <br />
              Organization
            </span>
          </article>
          <p className="mt-[5vh] tabView:block tabView:mt-[1vh] tabView:flex tabView:justify-center tabView:w-[69.22vw] tabView:relative tabView:left-[1vw] tabView:text-[2.151vw] font-semibold text-[1.25vw] text-white mobile:mt-[7vh] mobile:w-[62.093vw] mobile:text-[2.791vw] mobile:font-[500]">
            From dreams to reality, ignite your path to
            <br /> success with {domainVariable}
          </p>
          <p className="text-white tabView:top-[44vh] tabView:relative tabView:ml-0 tabView:w-[100vw] tabView:flex tabView:justify-center tabView:items-center tabView:text-[1.613vw] text-[0.938vw] mt-[27.083vh] mobile:relative mobile:top-[43vh] mobile:flex mobile:justify-center mobile:items-center mobile:text-[2.791vw] mobile:leading-[1.931vh] mobile:font-[400] mobile:w-[88.442vw]">
            Copyright @ {domainVariable} All Rights Reserved{" "}
          </p>
        </div>
        <div className="top-[50%] tabView:left-[1.5vw] tabView:flex tabView:justify-center tabView:top-[8.193vh] tabView:relative -translate-y-[50%] absolute right-[6%] mobile:right-0 mobile:flex mobile:justify-center mobile:items-center mobile:relative mobile:mt-[1vh] mobile:w-[100vw] mobile:top-[2vh]">
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default SignupLanding;
