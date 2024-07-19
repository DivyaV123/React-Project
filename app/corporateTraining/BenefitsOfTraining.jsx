import React from "react";
import "./CorporateTraining.scss";

const benefitItems = [
  {
    title: "Tailored Programs",
    description: "Customized training solutions to meet your unique business needs.",
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry leaders and experienced professionals.",
  },
  {
    title: "Flexible Delivery",
    description: "On-site,online,and hybrid options to fit your schedule.",
  },
  {
    title: "Measurable Results",
    description: "Track progress and see the impact of training on your team’s performance.",
  },
  {
    title: "Measurable Results",
    description: "Customized training solutions to meet your unique business needs.",
  },
];

const BenefitsOfTraining = () => {
  return (
    <section className="pt-[5.556vh] pb-[3.333vh] flex justify-between ">
      <section className="w-[25.781vw]">
        <article className="font-bold text-[2.5vw] ">
          Benefits of training
        </article>
        <article className="text-[1.094vw] pt-[1.389vh] pb-[3.333vh]">
          Corporate training with QSpiders ensures your team is equipped with
          the latest skills and knowledge in software testing, enhancing
          productivity, improving software quality, and driving overall business
          success
        </article>
        <button className=" bg-gradient font-medium py-[1.667vh] flex items-center justify-center px-[1.875vw] w-[10.703vw] h-[6.667vh] text-[1.25vw] text-white rounded-md">
          Contact us
        </button>
      </section>
      <section className="flex justify-center gap-6 w-[50.625vw] flex-wrap">
        {benefitItems.map((item, index) => (
          <div key={index} className="bg-[#F9F9F9] pt-[3.333vh] pl-[1.875vw] pr-[0.938vw] rounded-3xl w-[15.625vw]">
            <article className="1.25vw font-bold gradient-text pb-[2.222vh]">
              {item.title.split(" ").map((word, idx) => (
                <React.Fragment key={idx}>
                  {word}
                  <br />
                </React.Fragment>
              ))}
            </article>
            <article className="text-[#737373] text-[1.094vw] pb-[3.889vh]">
              {item.description}
            </article>
          </div>
        ))}
      </section>
    </section>
  );
};

export default BenefitsOfTraining;
