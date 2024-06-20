import React from "react";
import "./GenerateLinkSidebar.scss";

const GenerateLinkSidebar = () => {
  const data = [
    { src: "../../icon_interview.svg", text: " On Average we conduct 19 recruitment drives every day.",header:"Daily Drives:" },
    {
      src: "../../Attendance.svg",
      text: " Between 1000-1300 students attend interviews daily.",
      header:"Interview Attendance:" 
    },
    { src: "../../icon_recruitment.svg", text: " We facilitate job placements for 4000-4800 students each month.",header:"Monthly Job Placemeents:"  },
    { src: "../../icon_corporation.svg", text: " Proudly partnered with 4810 companies." ,header:"Corporate Partnerships:" },
    { src: "../../icon_time23.svg", text: " Achieving one placement every 2 minutes." ,header:"Placement Rate:" },
  ];


  return (
    <section>
      {data.map((item, index) => (
        <article
          key={index}
          className="w-[23.438vw] bg-white gap-2.5 flex generateSidebar"
        >
          <img className="w-[2.5vw]" src={item.src} />
          <p className="font-medium text-[1.094vw]"><span className="font-extrabold text-[1.172vw]">{item.header}</span>{item.text}</p>
        </article>
      ))}
    </section>
  );
};

export default GenerateLinkSidebar;
