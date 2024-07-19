"use client";
import React from "react";
import TrendingCard from "./TrendingCard";
const TrendingCourses = () => {
  return (
    <section className="pb-[8.194vh]">
      <article className="pt-[5.556vh] pb-[3.333vh] text-[2.5vw] font-bold">
        Trending Courses
      </article>
      <section className="py-[3.333vh] flex justify-between">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </section>
    </section>
  );
};

export default TrendingCourses;
