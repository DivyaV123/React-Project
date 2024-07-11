"use client";
import React, { useContext } from "react";
import "./HirefromusLanding.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import Image from "next/image";

const Hiringprocess = () => {
  const { domainVariable } = useContext(GlobalContext);

  const domainBasedImage =
    domainVariable === "Qspiders"
      ? "../../hiring_process_mobileView.png"
      : domainVariable === "Bspiders"
      ? "../../hiring_processBS.png"
      : domainVariable === "Jspiders"
      ? "../../hiring_processJ.png"
      : domainVariable === "Pyspiders"
      ? "../../hiring_processPY.png"
      : "../../hiring_processBS.png";

  return (
    <>
      <section className="hiringprocessbg mobile:hidden">
        <img className="w-full" src="../images/hiring_process.png" />
      </section>
      <section className="hiringprocessbg hidden mobile:block">
        {domainBasedImage && <img src={domainBasedImage} />}
      </section>
    </>
  );
};

export default Hiringprocess;
