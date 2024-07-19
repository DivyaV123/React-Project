import React from "react";
import "./CorporateTraining.scss";
const TrendingCard = () => {
  return (
    <div className="w-[27.813vw] px-[1.25vw] py-[2.222vh] Trendingcard">
      <img src="../../trendingcard.svg" />
      <p className="font-bold text-[#454545] text-[1.25vw] pt-[2.778vh]">
        Java Full stack
      </p>
      <article className="text-[#737373] text-[1.094vw] pt-[1.111vh]">
        Complete a Java Full Stack certification to showcase mastery in both
        front-end and back-end web application development.
      </article>
      <div className="flex justify-end pt-[2.222vh]">
        <button className="courseCardBtn text-[1.094vw] mobile:text-[2.791vw]  font-semibold text-white bg-gradient rounded-md">
          Know more
        </button>
      </div>
    </div>
  );
};

export default TrendingCard;
