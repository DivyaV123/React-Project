import React from "react";
import "./GenerateLinkSidebar.scss";

const GenerateLinkSidebar = () => {
  const data = [
    { src: "../../drives.svg", text: "19 Drives per day" },
    {
      src: "../../interview.svg",
      text: "Per day 1000-1300 students attended interview",
    },
    { src: "../../job.svg", text: "4000-4800 Students get a job in a month" },
    { src: "../../company.svg", text: "4180 companies tied up" },
    { src: "../../placement.svg", text: "Every 2 minutes 1 placement" },
  ];

  const paragraphData = [
    "Every month we place 5200 students",
    "For one month we work for 160 hours i.e 8 hours in a day * 21 working days in a month = 160 hours",
    "For 1 month: 160 hours*60min=9600 placements for minute: 5200/9600 = 0.5",
    "Every 2 min = 1 Placements"
  ];

  return (
    <section>
      {data.map((item, index) => (
        <article
          key={index}
          className="w-[23.438vw] bg-white gap-[0.781vw] flex generateSidebar"
        >
          <img src={item.src} />
          <p className="font-medium text-[1.094vw]">{item.text}</p>
        </article>
      ))}
      <article className="w-[23.438vw] bg-white generatedArticle">
        {paragraphData.map((text, index) => (
          <p key={index} className="pb-[1.389vh] font-medium text-[1.094vw]">
            {text}
          </p>
        ))}
      </article>
    </section>
  );
};

export default GenerateLinkSidebar;
