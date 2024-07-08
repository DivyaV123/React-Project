'use client'
import React, { useContext } from "react";
import "./HirefromusLanding.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import Image from "next/image";

const Hiringprocess = () => {
  const { domainVariable } = useContext(GlobalContext);

  const domainBasedImage =
    domainVariable === "Qspiders" ? "/hiringProcessMobView.svg" :
      domainVariable === "Bspiders" ? "/hiring_processBS.png" :
        domainVariable === "Jspiders" ? "/hiring_processJ.png" :
          domainVariable === "Pyspiders" ? "/hiring_processPY.png" :
            "/hiring_processBS.png";

  return (
    <>
      <section className="hiringprocessbg mobile:hidden">
        <Image
          src='/images/hiring_process.png'
          height={700}
          width={1280}
          sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
        />
        {/* <img className="w-full" src="../images/hiring_process.png" /> */}
      </section>
      <section className="hiringprocessbg hidden mobile:block">
        {domainBasedImage &&
          <Image
            src={domainBasedImage}
            height={800}
            width={800}
          />
        }

        {/* <img className="w-full" src={domainBasedImage} /> */}
      </section>
    </>
  );
};

export default Hiringprocess;
