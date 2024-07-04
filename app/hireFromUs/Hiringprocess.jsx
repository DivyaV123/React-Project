'use client'
import React, { useContext } from "react";
import "./HirefromusLanding.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";

const Hiringprocess = () => {
  const { domainVariable } = useContext(GlobalContext);

  const domainBasedImage =
    domainVariable === "Qspiders" ? "../../hiringProcessMobView.svg" :
    domainVariable === "Bspiders" ? "../../hiring_processBS.png" :
    domainVariable === "Jspiders" ? "../../hiring_processJ.png" :
    domainVariable === "Pyspiders" ? "../../hiring_processPY.png" :
    "../../hiring_processBS.png";

  return (
    <>
      <section className="hiringprocessbg mobile:hidden">
        <img className="w-full" src="../images/hiring_process.png" />
      </section>
      <section className="hiringprocessbg hidden mobile:block">
        <img className="w-full" src={domainBasedImage} />
      </section>
    </>
  );
};

export default Hiringprocess;
