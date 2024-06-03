import React from "react";
import "./PlacementSidebar.scss";

const PlacementContent = ({ counsellorFilterResponse }) => {
  return (
    <>
      {counsellorFilterResponse?.map((student, index) => (
        
        <section className="w-full contentCard flex pt-[0.556vh] pl-[0.469vw] pb-[1.111vh] mb-[3.333vh] mt-[0.556vh] h-[32.083vh]">
          <div className="w-[15.547vw] ">
            <img src={student?.photoLink} className="w-full h-[24.861vh] object-cover" />
            <div className="imageCard">
              <header className="studentName font-semibold py-[1.111vh]">
                {student?.name}
              </header>
              <div className="flex gap-1 studentDetails">
                <div>
                  <div className="studentDetails flex justify-center">{student?.degree?.degreeName}</div>
                  <div className="educationDetails">Degree</div>
                </div>
                <div>|</div>
                <div>
                  <div className="studentDetails flex justify-center">
                    Civil
                  </div>
                  <div className="educationDetails">Stream</div>
                </div>
                <div>|</div>
                <div>
                  <div className="studentDetails flex justify-center">
                    {student?.degree?.degreeAggregate}
                  </div>
                  <div className="educationDetails">Aggregate</div>
                </div>
                <div>|</div>
                <div>
                  <div className="studentDetails flex justify-center">{student?.degree?.degreeYop}</div>
                  <div className="educationDetails">YOP</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[1.563vw] w-[42.813vw] pt-[2.222vh] flex flex-col justify-between">
            <p className="studentReview">
              {student?.testimonial?.writtenTestimonial}
            </p>
            <div className="flex gap-2 items-center mb-[1.111vh] pl-[5vw]">
              <div className="text-[0.781vw] text-[#201C19] pr-[1.563vw]">
                Reviews :
              </div>
              <div className="iconContainer">
                <img src="../google 1.svg" />
              </div>
              <div className="iconContainer">
                <img src="../facebook 1.svg" />
              </div>
              <div className="iconContainer">
                <img src="../youtube 1.svg" />
              </div>
              <div className="iconContainer">
                <img src="../share 1.svg" />
              </div>
            </div>
          </div>
          <div className="pl-[3.125vw] pt-[2.222vh] flex flex-col gap-3">
            <div className="imageBox"></div>
            <div className="imageBox"></div>
          </div>
        </section>
      ))}
    </>
  );
};

export default PlacementContent;
