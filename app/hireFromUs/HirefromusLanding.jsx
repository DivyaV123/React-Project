import React from "react";
import "./HirefromusLanding.scss";
const HirefromusLanding = () => {
  return (
    <section className="hireFromSection">
      <aside className="pl-[6.25vw] pt-[13.889vh]">
        <article className="text-[2.5vw] font-bold text-[#575757] pb-[3.333vh]">
          Welcome to <span className="textgradient">Hire From Us platform</span>
          , Hire <br />
          Candidates With just a click
        </article>
        <p className="font-medium text-[#575757] text-[1.563vw] pb-[9.722vh]">
          {" "}
          your gateway to skilled software testers. With just a<br /> click,
          ensure your code meets the highest standards,
          <br /> backed by proficient testing professionals.
        </p>
        <section className="flex gap-6 w-[32.031vw] justify-between">
          <img className="w-[4.688vw]" src="../../googlehire.svg" />
          <img className="w-[4.688vw]" src="../../awshire.svg" />
          <img className="w-[4.688vw]" src="../../tatahire.svg" />
          <img className="w-[4.688vw]" src="../../bmghire.svg" />
          <img className="w-[4.688vw]" src="../../isrohire.svg" />
        </section>
      </aside>
    </section>
  );
};

export default HirefromusLanding;
