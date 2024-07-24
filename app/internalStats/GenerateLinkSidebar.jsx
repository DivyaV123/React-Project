'use client'
import React, { useRef, useState, useEffect } from "react";
import "./GenerateLinkSidebar.scss";

const GenerateLinkSidebar = () => {
  const data = [
    { src: "../../icon_interview.svg", text: " On Average we conduct 19 recruitment drives every day.", header: "Daily Drives:" },
    { src: "../../Attendance.svg", text: " Between 1000-1300 students attend interviews daily.", header: "Interview Attendance:" },
    { src: "../../icon_recruitment.svg", text: " We facilitate job placements for 4000-4800 students each month.", header: "Monthly Job Placements:" },
    { src: "../../icon_corporation.svg", text: " Proudly partnered with 4810 companies.", header: "Corporate Partnerships:" },
    { src: "../../icon_time23.svg", text: " Achieving one placement every 2 minutes.", header: "Placement Rate:" },
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = (index) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollPosition = carousel.scrollWidth / data.length * index;
      carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const index = Math.round(carousel.scrollLeft / (carousel.scrollWidth / data.length));
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <section className="mt-[1.111vh] mobile:hidden mobile:pl-[3.721vw]">
      {data.map((item, index) => (
        <article
          key={index}
          className="w-[23.438vw] bg-white gap-2.5 flex generateSidebar"
        >
          <img className="w-[2.5vw] mobile:w-[10.442vw]" src={item.src} />
          <p className="font-medium mobile:text-[3.256vw] text-[1.094vw]"><span className="font-extrabold mobile:text-[3.256vw] mobile:font-bold text-[1.172vw]">{item.header}</span>{item.text}</p>
        </article>
      ))}
    </section>
    <section className="relative mt-[1.111vh] hidden mobile:block">
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex mobile:gap-[10vw] mobile:ml-[4vw]" style={{ width: `${data.length * 91}%` }}>
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[23.438vw] bg-white gap-2.5 flex generateSidebar mobile:pl-[2.781vw]"
              style={{ flex: `0 0 ${100 / data.length}%` }}
            >
              <img className="w-[2.5vw] mobile:w-[9.442vw]" src={item.src} />
              <p className="font-medium text-[1.094vw] mobile:text-[3.256vw]">
                <span className="font-extrabold text-[1.172vw] mobile:text-[3.256vw]">{item.header}</span>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-1">
        {data.map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-orange-600" : "bg-gray-400"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
    </>
  );
};

export default GenerateLinkSidebar;
