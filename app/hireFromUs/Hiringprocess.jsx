import React from "react";
import "./HirefromusLanding.scss";
const Hiringprocess = () => {
  return (
    <>
    <section className="hiringprocessbg mobile:hidden">
      <img className="w-full" src="../../hiring_processNew.svg" />
    </section>
    <section className="hiringprocessbg hidden mobile:block">
      <img className="w-full" src="../../hiringProcessMobView.svg" />
    </section>
    </>
  );
};

export default Hiringprocess;
