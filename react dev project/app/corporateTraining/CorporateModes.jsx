import React from "react";
import "./CorporateTraining.scss";
const CorporateModes = ({heroPageData}) => {

  const typesOfClasses = [
    {
      icon: "../../offline_corp.svg",
      title: "Offline Mode",
      description:
        "Offline classes involve face-to-face interaction, structured schedules, hands-on learning.",
    },
    {
      icon: "../../online_corp.svg",
      title: "Online Mode",
      description:
        "Online classes provide remote learning flexibility through digital platforms.",
    },
    {
      icon: "../images/Online_Test.png",
      title: "Self Paced Mode",
      description:
        "Learn at your own speed, offering flexibility and independence in your learning journey.",
    },
  ];
  return (
    <section className="bg-[#F9F9F9] ">
      <header className="pt-[5.556vh] pb-[3.333vh] text-[2.5vw] font-bold flex justify-center">
        Modes We Train
      </header>
      <section className="w-[87.5vw] m-auto ">
        <p className="text-[#575757] text-[1.094vw] pt-[3.333vh] pb-[4.444vh] text-center">
          {heroPageData?.description}
        </p>
        <div className="flex justify-center items-center flex-col  pb-[3.333vh]">
          <button
            style={{ borderRadius: "24px" }}
            className="py-[1.667vh] px-[1.875vw] text-[1.563vw] font-bold custom-border"
          >
            Corporate Training Program
          </button>
        </div>
        <section className="flex justify-center gap-10 pb-[10.556vh]">
          {typesOfClasses.map((item, index) => {
            {console.log(heroPageData?.modeswetrain[index])}
            return (
              
              <section className="flex flex-col gap-[1.667vw] bg-white items-center px-[1.25vw] rounded-xl w-[19.531vw]">
                <img
                  className=" flex justify-center items-center pt-[3.472vh] pb-[4.306vh]"
                  src={item.icon}
                  alt=""
                />
                <h1 className="text-[1.563vw] font-bold pb-[2.222vh]">{heroPageData?.modeswetrain[index].mode}</h1>
                <p className="text-[#575757] text-[1.094vw] pb-[4.861vh] text-center">
                {heroPageData?.modeswetrain[index].detail}
                </p>
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default CorporateModes;
