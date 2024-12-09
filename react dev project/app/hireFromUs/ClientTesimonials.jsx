"use client";
import React, { useRef, useState } from "react";

import "./HirefromusLanding.scss";

import { TestimonialCarousel, CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, } from "./TestimonialCarousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const ClientTesimonials = () => {
  const testimonials = [
    {
      quote:
        "The software testing course exceeded my expectations.The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "../../htc.svg",
    },
    {
      quote:
        "The software testing course exceeded my expectations.The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "../../Aecom.svg",
    },
    {
      quote:
        "The software testing course exceeded my expectations.The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "../../Hbo.svg",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "../../vaio.svg",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "../../htc.svg",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "../../Aecom.svg",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "../../Hbo.svg",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "../../vaio.svg",
    },
  ];

  const carouselRef = useRef(null);

  return (
    <div className="clientTestimonial">
      <header className="header-wrapper">
        <div>
          {" "}
          <span className="testimonials-text">Client Testimonials</span>
        </div>
      </header>
      <div className="carousel-wrapper custom-arrows">
        <TestimonialCarousel
          className="carousel-body mx-2"
          ref={carouselRef}
          breakPoints={breakPoints}
          showArrows={false}
          pagination={false}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="carousel-item mobile:max-h-fit  mobile:w-auto mobile:pl-[2.791vw] mobile:pr-[2.791vw]">
                  <img
                    src={testimonial.company}
                    className="pl-[1.25vw] pt-[3.333vh]"
                  />
                  <img
                    className="pl-[1.25vw] pt-[2.222vh]"
                    src="../../quote.svg"
                  />
                  <div className="pl-[2.656vw] mobile:h-auto pr-[1.172vw] quotes pb-[3.333vh]">
                    {testimonial.quote}
                  </div>
                  <div className="flex pl-[2.656vw]  pt-[2vh] gap-2 pb-[2.778vh]">
                    <div>
                      <img src="../../clientImage.png" />
                    </div>
                    <div>
                      <p className="text-[#575757] font-bold text-[0.938vw] mobile:text-[2.791vw]">Andy Jassy</p>
                      <p className="text-[0.938vw] text-[#575757] mobile:text-[2.791vw]">Amazon</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </TestimonialCarousel>
      </div>
    </div>
  );
};

export default ClientTesimonials;
