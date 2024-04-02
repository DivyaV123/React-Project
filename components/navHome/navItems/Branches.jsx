"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./navitems.scss";
const Branches = () => {
  const courses = [
    {
      icon: "/BengaluruIcon.svg",
      title: "Bangalore",
      arrow: "/arrowIconDark.svg",
      list: [
        { icon: "", title: "Java Full Stack", arrow: "/arrowIconDark.svg" },
        { icon: "", title: "Python Full Stack", arrow: "/arrowIconDark.svg" },
        { icon: "", title: "MERN Stach", arrow: "/arrowIconDark.svg" },
        {
          icon: "",
          title: "Data Science and Python",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "",
          title: "Web Development with React",
          arrow: "/arrowIconDark.svg",
        },
        { icon: "", title: "Java Backend", arrow: "/arrowIconDark.svg" },
        { icon: "", title: "Python Backend", arrow: "/arrowIconDark.svg" },
        {
          icon: "",
          title: "Software Testing Master Course with Java selenium",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "",
          title: "Software Testing Master Course with Python selenium",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "",
          title: "Advance Java selenium Test Automation",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "",
          title: "API/Webservice Automation Testing",
          arrow: "/arrowIconDark.svg",
        },
      ],
      sublist: [
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Hebbal",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "BTM Layout",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
      ],
    },
    {
      icon: "/HyderabadIcon.svg",
      title: "Hyderabad",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Hebbal",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "BTM Layout",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
      ],
    },
    {
      icon: "/ChennaiIcon.svg",
      title: "Chennai",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Hebbal",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "BTM Layout",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
      ],
    },
    {
      icon: "/PuneIcon.svg",
      title: "Pune",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/MumbaiIcon.svg",
      title: "Mumbai",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/NoidaIcon.svg",
      title: "Noida",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/GurugramIcon.svg",
      title: "Gurugram",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/NewdelhiIcon.svg",
      title: "New Delhi",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/BhubaneswarIcon.svg",
      title: "Bhubaneswar",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/KolkataIcon.svg",
      title: "Kolkata",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/AhmedabadIcon.svg",
      title: "Ahmedabad",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/ChandigarhIcon.svg",
      title: "Chandigarh",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/TirupatiIcon.svg",
      title: "Tirupati",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/KochiIcon.svg",
      title: "Kochi",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/MysoreIcon.svg",
      title: "Mysore",
      arrow: "/arrowIconDark.svg",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(0);
  return (
    <div className="p-3 flex md:w-[600px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1500px]  lg:h-[500px] myscrollbar overflow-y-scroll">
      <div
        className={`bg-gradient-to-b from-muted/50 to-muted p-2 xl:w-[17%] 2xl:w-[11%] `}
      >
        {courses.map((courseItem, index) => (
          <div
            key={index}
            className="flex"
            onMouseEnter={() => setHoveredIndex(index)}
            // onMouseLeave={() => setHoveredIndex()}
          >
            <img src={courseItem.icon} />
            <div className="flex justify-between grow">
              <button className="p-2 text-xs">{courseItem.title}</button>
              <img src={courseItem.arrow} className="w-4" />
            </div>
          </div>
        ))}
      </div>
      <div className="xl:w-[83%] 2xl:w-[89%] flex overflow-auto">
        {hoveredIndex !== null && courses[hoveredIndex].list && (
          <div className="xl:w-[25%] 2xl:w-[17%] bg-gradient-to-b from-muted/50 to-muted p-2">
            {courses[hoveredIndex].list.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex justify-between grow"
                onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                onMouseLeave={() => {}}
              >
                {/* <img src={item.icon} /> */}
                <div className="flex justify-between grow">
                  <button className="p-2 text-xs text-left">{item.title}</button>
                  <img src={item.arrow} className="w-4" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`${
            hoveredIndex !== null && courses[hoveredIndex].list
              ? "courselist"
              : "coursefull"
          }   flex flex-wrap p-2`}
        >
          {(courses[hoveredIndex] ?? courses[0])?.sublist?.map(
            (content, index) => (
              <div
                key={index}
                className={`${
                  hoveredIndex !== null && courses[hoveredIndex].list
                    ? "courseMedium"
                    : "courseinitial"
                } 2xl:w-[33%] p-2 branchOverlay h-fit`}
              >
                <div className="flex h-10  justify-between">
                  <img className="h-10 w-16" src={content.image} />
                  <div>
                    <h3 className="text-left h-5 text-xs font-bold">
                      {content.title}
                    </h3>
                    <p className="text-left h-5 text-xs text-amber-800">
                      {content.mobile}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xs p-1">
                    <p>5 Upcoming Batches</p>
                    <p>5 Ongoing Batches</p>
                  </div>
                  <div className=" flex gap-1 text-xs directions p-2">
                    <p >Get Directions</p>
                    <img src="/DirectionIcon.svg" className="h-4 w-4"/>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Branches;
