import React, { useContext } from "react";
import "./HirefromusLanding.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
const Hiringprocess = () => {
  const { domainVariable } = useContext(GlobalContext)
  let domainBasedImage =
    domainVariable === "Qspiders" ? domainBasedImage = "../../hiringProcessMobView.svg" :
      domainVariable === "Bspiders" ? domainBasedImage = "../../hiring_processBS.png" :
        domainVariable === "Jspiders" ? domainBasedImage = "../../hiring_processJ.png" :
          domainVariable === "Pyspiders" ? domainBasedImage = "../../hiring_processPY.png" :
            domainBasedImage = "../../hiring_processBS.png"
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
