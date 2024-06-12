"use client";
import React, { useRef, useState } from "react";

import "./HirefromusLanding.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "VAIO",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "AECOM",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "HBO",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "HTC",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "HTC",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "HTC",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "HTC",
    },
    {
      quote:
        "The software testing course exceeded my expectations. The instructor’s expertise made complex concepts easy to understand, and the hands-on approach was invaluable. I gained practical skills and knowledge that.",
      company: "HTC",
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
        <Carousel
          className="carousel-body mx-2"
          ref={carouselRef}
          breakPoints={breakPoints}
          showArrows={false}
          pagination={false}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 carousel-item">
                  <div className="mx-2 my-2 quotes">
                    <span className="custom-quote">“</span>
                    {testimonial.quote}
                  </div>
                  <p className="companylogo mx-2 my-2">{testimonial.company}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientTesimonials;
