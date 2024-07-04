import React from "react";
import "./HirefromusLanding.scss";
const HirefromusLanding = () => {
  return (
    <section className="hireFromSection">
      <aside className="pl-[6.25vw] pt-[13.889vh] mobile:pt-[3.433vh] tabView:pt-[3.433vh]">
        <article className="text-[2.5vw] font-bold text-[#575757]  pb-[3.333vh] tabView:hidden mobile:hidden ">
          Welcome To <span className="textgradient">Hire From Us Platform</span>
          , Hire <br />
          Candidates With Just A Click
        </article>
        <article className="text-[2.5vw] font-bold text-[#575757] tabView:text-[5.581vw] mobile:text-[5.581vw] pb-[3.333vh] hidden mobile:block tabView:block">
          Welcome to{" "}
          <span className="textgradient">
            Hire From Us <br />
            platform
          </span>
          , Hire Candidates <br /> With just a click
        </article>
        <div className=" mobile:h-[12.76vh]  tabView:h-[12.76vh]">
          <p className=" tabView:hidden font-medium text-[#575757] text-[1.563vw] pb-[9.722vh] mobile:text-[3.307vw] tabView:text-[3.307vw]">
            {" "}
            your gateway to skilled software testers. With just a<br /> click,
            ensure your code meets the highest standards,
            <br /> backed by proficient testing professionals.
          </p>
          {/* added for tablet mode only */}
          <p className="hidden tabView:block tabView:w-[58.213vw] font-medium text-[#575757] text-[1.563vw] pb-[9.722vh]  tabView:text-[2.688vw]">
            {" "}
            your gateway to skilled software testers. With just a click, ensure
            your code meets the highest standards, backed by proficient testing
            professionals.
          </p>
        </div>
        <section className="flex gap-6 w-[32.031vw] justify-between tabView:mt-[2vh]">
          <img className="w-[12vw]" src="../../googlehire.svg" />
          <img className="w-[12vw]" src="../../awshire.svg" />
          <img className="w-[12vw]" src="../../tatahire.svg" />
          <img className="w-[12vw]" src="../../bmghire.svg" />
          <img className="w-[12vw]" src="../../isrohire.svg" />
        </section>
      </aside>
    </section>
  );
};

export default HirefromusLanding;
