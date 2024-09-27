import React from "react";
import "./CorporateTraining.scss";
const CorporateTrainingLanding = ({heroPageData}) => {

  return (
    <section className="corporateBackground">
      <section className="w-[87.5vw] m-auto">
        <div className="w-[49.219vw]">
          <article className="text-white font-bold text-[3.125vw] pt-[16.667vh]">
              {heroPageData?.corporate?.title}
          </article>
          <p className="text-white font-medium text-[1.875vw] pt-[3.333vhs]">
              {heroPageData?.corporate?.description}
          </p>
          <button className="text-white text-[0.938vw] font-medium RequestButton py-[1.667vh] mt-[3.333vh]">
            Get Started Today
          </button>
        </div>
      </section>
    </section>
  );
};

export default CorporateTrainingLanding;
