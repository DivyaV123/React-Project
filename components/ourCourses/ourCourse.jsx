"use client";
import React, { useEffect, useState } from "react";
import "./ourCourses.scss";
import CourseCard from "../commonComponents/courseCard/courseCard";
import MaxWebWidth from "../commonComponents/maxwebWidth/maxWebWidth";
import "../ui/button.scss";
import Button from "../commonComponents/button/Button";
import Slide from "react-reveal/Slide";
import { Fade } from "react-reveal";
import Svg from "../commonComponents/Svg/Svg";
import { svgicons } from "../assets/icons/svgassets";
import Link from "next/link";
import Input from "../commonComponents/input/Input";
import { Skeleton } from "@/components/ui/skeleton";
import CourseCardSkeleton from "../commonComponents/courseCard/CourseCardSkeleton";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetHomePageCourseQuery } from "@/redux/queries/getHomePageCourse";

function OurCourse({ page }) {
  const { data: AllCourse, error, isloading } = useGetAllCategoriesQuery();
  const { data: homeCourse, error: homeCourseError, isloading: homeCourseLoading } = useGetHomePageCourseQuery();
  const [openIndex, setOpenIndex] = useState(0);
  const initialCard = [
    {
      name: "Angular",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Angular/2024-06-24T15%3A33%3A19.395339700_Advanced%20Angular_homePage.png",
      detail: "The Angular course provides a comprehensive introduction to building dynamic web applications using the Angular framework. It covers core concepts like data binding, directives, controllers, and services",
      category: "Software Development"
    },
    {
      name: "Advanced React JS ",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advanced%20React%20JS%20/2024-06-24T15%3A32%3A07.801929_Advanced%20React_homePage.png",
      detail: " Our React JS course covers the fundamentals of React, including components, state, and props, and advanced topics like hooks, context, and routing.",
      category: "Software Development"
    },
    {
      name: "Java Full Stack",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Java+Full+Stack/2024-06-22T13%3A28%3A20.778559800_java+full+stack+home+page+image.png",
      detail: "Master the full spectrum of web development with comprehensive training in both front-end and back-end technologies, leveraging Java, Spring Framework, modern JavaScript frameworks to build scalable and efficient applications.",
      category: "Software Development"
    },
    {
      name: "MEAN Full Stack",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/MEAN%20Full%20Stack/2024-06-24T15%3A28%3A11.806942_MeanStack_HomePage.png",
      detail: "Master the full spectrum of web development with comprehensive training in both front-end technologies, leveraging JavaScript, Angular Library, modern TypeScript and frameworks like express js with node to build scalable and efficient applications",
      category: "Software Development"
    },
    {
      name: "MERN Full Stack",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/MERN%20Full%20Stack/2024-06-24T15%3A28%3A54.280740500_Mern%20Stack_HomePage.png",
      detail: "Master the full spectrum of web development with comprehensive training in both front-end technologies, leveraging JavaScript, React Library, modern TypeScript and frameworks like express js with node to build scalable and efficient applications.",
      category: "Software Development"
    },
    {
      name: "Software Testing Master Course with Python Selenium",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Software%20Testing%20Master%20Course%20with%20Python%20Selenium/2024-06-24T12%3A28%3A16.097773600_Software%20Testing%20Master%20Course%20with%20Python%20Selenium-homepage.png",
      detail: "Master software testing with in-depth Python Selenium training for automated testing.",
      category: "Software Testing"
    },
    {
      name: "Software Testing Master Course with Java Selenium",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Software%20Testing%20Master%20Course%20with%20Java%20Selenium/2024-06-24T12%3A27%3A46.491110_Software%20Testing%20Master%20Course%20with%20Java%20Selenium-homepage.png",
      detail: "Master software testing with in-depth Java Selenium training for automated testing.",
      category: "Software Testing"
    },
    {
      name: "Advanced Java Selenium Automation",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advanced%20Java%20Selenium%20Automation/2024-06-24T12%3A27%3A03.665673800_Advanced%20Java%20Selenium%20Automation-homepage.png",
      detail: "Master advanced Selenium techniques with Java for robust and scalable test automation.",
      category: "Software Testing"
    },
    {
      name: "API/Web Services Automation Testing",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/API/Web%20Services%20Automation%20Testing/2024-06-24T12%3A26%3A17.546756100_APIWeb%20Services%20Automation%20Testing-homepage.png",
      detail: "Learn to automate API/Web Services testing for robust and efficient software validation",
      category: "Software Testing"
    },
    {
      name: "Advanced Java Selenium Automation",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advanced%20Java%20Selenium%20Automation/2024-06-24T12%3A27%3A03.665673800_Advanced%20Java%20Selenium%20Automation-homepage.png",
      detail: "Master advanced Selenium techniques with Java for robust and scalable test automation.",
      category: "Popular Courses"
    },
    {
      name: "API/Web Services Automation Testing",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/API/Web%20Services%20Automation%20Testing/2024-06-24T12%3A26%3A17.546756100_APIWeb%20Services%20Automation%20Testing-homepage.png",
      detail: "Learn to automate API/Web Services testing for robust and efficient software validation",
      category: "Popular Courses"
    },
    {
      name: "Software Testing Master Course with Python Selenium",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Software%20Testing%20Master%20Course%20with%20Python%20Selenium/2024-06-24T12%3A28%3A16.097773600_Software%20Testing%20Master%20Course%20with%20Python%20Selenium-homepage.png",
      detail: "Master software testing with in-depth Python Selenium training for automated testing.",
      category: "Popular Courses"
    },
    {
      name: "Software Testing Master Course with Java Selenium",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Software%20Testing%20Master%20Course%20with%20Java%20Selenium/2024-06-24T12%3A27%3A46.491110_Software%20Testing%20Master%20Course%20with%20Java%20Selenium-homepage.png",
      detail: "Master software testing with in-depth Java Selenium training for automated testing.",
      category: "Popular Courses"
    },
    {
      name: "Angular",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Angular/2024-06-24T15%3A33%3A19.395339700_Advanced%20Angular_homePage.png",
      detail: "The Angular course provides a comprehensive introduction to building dynamic web applications using the Angular framework. It covers core concepts like data binding, directives, controllers, and services",
      category: "Popular Courses"
    },
    {
      name: "Advanced React JS ",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advanced%20React%20JS%20/2024-06-24T15%3A32%3A07.801929_Advanced%20React_homePage.png",
      detail: " Our React JS course covers the fundamentals of React, including components, state, and props, and advanced topics like hooks, context, and routing.",
      category: "Popular Courses"
    },
    {
      name: "Java Full Stack",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Java+Full+Stack/2024-06-22T13%3A28%3A20.778559800_java+full+stack+home+page+image.png",
      detail: "Master the full spectrum of web development with comprehensive training in both front-end and back-end technologies, leveraging Java, Spring Framework, modern JavaScript frameworks to build scalable and efficient applications.",
      category: "Popular Courses"
    },
    {
      name: "MEAN Full Stack",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/MEAN%20Full%20Stack/2024-06-24T15%3A28%3A11.806942_MeanStack_HomePage.png",
      detail: "Master the full spectrum of web development with comprehensive training in both front-end technologies, leveraging JavaScript, Angular Library, modern TypeScript and frameworks like express js with node to build scalable and efficient applications",
      category: "Popular Courses"
    },
    {
      name: "MERN Full Stack",
      image: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/MERN%20Full%20Stack/2024-06-24T15%3A28%3A54.280740500_Mern%20Stack_HomePage.png",
      detail: "Master the full spectrum of web development with comprehensive training in both front-end technologies, leveraging JavaScript, React Library, modern TypeScript and frameworks like express js with node to build scalable and efficient applications.",
      category: "Popular Courses"
    }
  ];
  const initialCategory = [
    {
      icon: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software+Development/2024-06-05T11%3A30%3A30.821485400_SoftwareDevelopment.svg",
      iconlite: "",
      title: "Software Development",
      arrow: "./arrowIconDark.svg"
    },
    {
      icon: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software%20Testing/2024-06-13T12%3A50%3A08.645801400_Softwaretesting.svg",
      iconlite: "",
      title: "Software Testing",
      arrow: "./arrowIconDark.svg"
    },
    {
      icon: "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Popular%20Courses/2024-06-24T23%3A11%3A19.263026500_popular%20courses.svg",
      iconlite: "",
      title: "Popular Courses",
      arrow: "./arrowIconDark.svg"
    }
  ];

  const [viewAllCoursesHover, setviewAllCoursesHover] = useState(false);
  const [courseCardData, setCourseCardData] = useState(initialCard);
  const [category, setCategory] = useState(initialCategory);
  const [hoveredCategory, setHoveredCategory] = useState(initialCategory[0].title);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const typesOfClasses = [
    {
      title: "Offline Classes",
    },
    {
      title: "Online Live Classes",
    },
    {
      title: "Experiential Learning",
    },
    {
      title: "Self Paced",
    },
  ];
  const [btnState, setBtnState] = useState(
    page === "tution" ? "Experiential Learning" : "Offline Classes"
  );
  const courseCard = [
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseimage.png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseimage(1).png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/Courseimage(2).png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseimage(3).png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseimage(4).png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseimage(5).png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseimage(6).png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseimage(8).png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseCardImages.png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseimage.png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/courseimage(1).png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
    {
      name: "Cloud Solution  Architect - Azure",
      image: "./images/Courseimage(2).png",
      deytail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const tutionClasses =
    page === "tution" ? typesOfClasses.slice(2, 4) : typesOfClasses;
  const statisticsData = [
    { number: "25,000+", text: "Students placed" },
    { number: "180+", text: "Hiring Companies" },
    { number: "10,000+", text: "Non IT Students placed" },
    { number: "15,000+", text: "IT Students placed" },
  ];
  const filteredCourses = courseCard.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAccordionToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  const exploreCourseFilter = (selectedMode) => {
    let categories = [];
    let cardData = [];
    AllCourse?.data.forEach((allCourse, mainCategoryIndex) => {
      if (allCourse.courseResponse.length > 0) {
        allCourse.courseResponse.forEach((element) => {
          if (element.modes.includes(selectedMode)) {
            categories.push({
              icon: allCourse.icon,
              iconlite: "",
              title: allCourse.title,
              arrow: "./arrowIconDark.svg",
            });
            cardData.push({
              name: element.title,
              image: element.homePageCourseImage,
              detail: element.description, // Fixed typo: 'deytail' to 'detail'
              category: allCourse.title, // Added category to the card data
            });
          }
        });
      }

      if (allCourse.subCourse.length > 0) {
        allCourse.subCourse.forEach((subcourse) => {
          if (subcourse.subCourseResponse.length > 0) {
            subcourse.subCourseResponse.forEach((element) => {
              if (element.modes.includes(selectedMode)) {
                categories.push({
                  icon: allCourse.icon,
                  iconlite: "",
                  title: allCourse.title,
                  arrow: "./arrowIconDark.svg",
                });
                cardData.push({
                  name: element.title,
                  image: element.homePageCourseImage,
                  detail: element.description, // Fixed typo: 'deytail' to 'detail'
                  category: allCourse.title, // Added category to the card data
                });
              }
            });
          }
        });
      }
    });

    // Remove duplicate categories
    const uniqueCategories = categories.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.title === value.title
      ))
    );

    setCourseCardData(cardData);
    setCategory(uniqueCategories);
    setHoveredCategory(uniqueCategories[0]?.title)
  }
  return (
    <MaxWebWidth>
      {page !== "explore" && (
        <aside className="flex justify-center align-center mb-8 mt-8">
          <Slide top cascade>
            <h1 className="font-bold text-[2rem] header text-black">
              Explore Our Courses
            </h1>
          </Slide>
        </aside>
      )}
      <article
        className={
          page === "explore"
            ? "flex justify-between  mb-8 mt-8"
            : "flex justify-end mb-3"
        }
      >
        {page === "explore" && (
          <div>
            <header className="">
              <h1 className="font-bold text-[1.5rem] header text-black ">
                Explore Our Courses
              </h1>
            </header>
          </div>
        )}
        <div className="flex">
          {page === "explore" && (
            <article className="pr-2 pt-[1px]">
              <Input
                onChange={(e) => setSearchTerm(e.target.value)}
                inputStyle="searchField p-2 text-sm"
                placeholder="Search"
                iconPath="../images/shape.png"
              />
            </article>
          )}

          <div className="bg-white border border-gray-300 flex rounded">
            {tutionClasses.map((classItem, index) => (
              <button
                key={index}
                className={`flex justify-center items-center px-4 py-2 font-medium text-[0.75rem] text-dark-gray ${classItem.title === btnState
                  ? "bg-gradient text-white rounded p-2"
                  : ""
                  } `}
                onClick={() => {
                  let mode = ''
                  setBtnState(classItem.title);
                  if (classItem.title === "Self Paced") {
                    mode = "SELFPACED";
                  } else if (classItem.title === "Experiential Learning") {
                    mode = "EXPERIENTIALLEARNING";
                  } else if (classItem.title === "Offline Classes") {
                    mode = "OFFLINECLASSES";
                  } else if (classItem.title === "Online Classes") {
                    mode = "ONLINECLASSES";
                  }
                  exploreCourseFilter(mode);
                }}
              >
                {classItem.title}
              </button>
            ))}
          </div>
        </div>
      </article>
      <aside className=" sm:hidden">
        <Accordion
          defaultValue="hello"
          className="w-full"
          type="single"
          collapsible
        >
          {category.map((item, itemIndex) => {
            return isloading ? (
              <div
                className={`bg-orange hover:font-semibold hover:text-white w-full  flex  gradient-bg cursor-pointer `}
              >
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-7 w-7 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-[12.5rem]" />
                  </div>
                </div>
              </div>
            ) : (
              <AccordionItem
                key={itemIndex}
                value={itemIndex === 0 ? "hello" : itemIndex}
                className="accordionitem"
              >
                <AccordionTrigger
                  onClick={() => handleAccordionToggle(itemIndex)}
                  className={`${itemIndex === openIndex ? 'bg-[#FEF2E7]' : ""}`}
                >
                  <div className="flex  items-center  w-full">
                    <picture className="flex justify-start">
                      <img className="w-[5.581vw] h-[2.575vh]" src={item.icon} />
                      <aside>
                        <h1
                          className={`  text-dark-gray mobile:text-[3.256vw] mobile:pl-[2.791vw] w-full`}
                        >
                          {item.title}
                        </h1>
                      </aside>
                    </picture>
                  </div>
                </AccordionTrigger>
                <AccordionContent page="explorecourses">
                  <article className="h-full sm:hidden">
                    <div className="flex  justify-between gap-4 h-full  mobile:overflow-x-scroll mobile:offlineScrollbar   pt-[2.575vh] ">
                      {courseCardData
                        .filter(card => !hoveredCategory || card.category === hoveredCategory)
                        .map((element, index) => {
                          return (
                            <div className="courseCard" key={index}>
                              {isloading ? (
                                <CourseCardSkeleton />
                              ) : (
                                <CourseCard cardData={element} />
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </article>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </aside>
      <aside className="flex h-[132.222vh] mobile:hidden">
        <article className="justify-start w-[20.70vw] h-full overflow-auto courseScroll">
          <div className="w-full">
            {category.map((item, itemIndex) => {
              return isloading ? (
                <div
                  className={`bg-orange hover:font-semibold hover:text-white w-full  flex  gradient-bg cursor-pointer `}
                >
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-7 w-7 rounded-full" />
                    <div className="space-y-1">
                      <Skeleton className="h-3 w-[12.5rem]" />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={itemIndex}
                  onClick={() => setHoveredCategory(item.title)}
                  className={`bg-orange hover:font-semibold hover:text-white w-full flex  gradient-bg cursor-pointer  ${hoveredCategory === item.title ? "bg-gradient" : ""
                    }`}
                >
                  <div className="flex  items-center py-[2.222vh] px-[1.25vw] w-full">
                    <picture className="flex justify-start w-[89%]">
                      <img src={hoveredCategory === item.title ? item.icon : item.icon} />
                      <aside
                        className={` pl-[1.25vw] text-[1.094vw] text-dark-gray   w-full ${hoveredCategory === item.title
                          ? "text-white"
                          : "text-black"
                          }`}
                      >
                        <h1>{item.title}</h1>
                      </aside>
                    </picture>
                    <picture className="flex w-[11%]">
                      <Svg
                        width={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[0]
                            : svgicons.arrowIcon[0]
                        }
                        height={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[1]
                            : svgicons.arrowIcon[1]
                        }
                        viewBox={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[2]
                            : svgicons.arrowIcon[2]
                        }
                        icon={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[3]
                            : svgicons.arrowIcon[3]
                        }
                        color={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[4]
                            : svgicons.arrowIcon[4]
                        }
                      />
                    </picture>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
        <article className="h-full overflow-hidden  w-[66.797vw]">
          <div className="flex flex-wrap  gap-y-[2.222vh] justify-between w-full h-full overflow-y-scroll courseScroll pt-[1.667vh] pl-[0.938vw] pr-[0.156vw]">
            {courseCardData
              .filter(card => !hoveredCategory || card.category === hoveredCategory)
              .map((element, index) => {
                return (
                  <div className="courseCard" key={index}>
                    {isloading ? (
                      <CourseCardSkeleton />
                    ) : (
                      <CourseCard cardData={element} />
                    )}
                  </div>
                );
              })}
          </div>
        </article>
      </aside>
      {page !== "explore" && (
        <Link href="./exploreCourses">
          <article on className="flex justify-end mt-8 mb-8">
            <Button
              className="border border-orange-500 rounded text-orange-500 p-2 hover:bg-gradient "
              title="View All Courses"
              icon={
                viewAllCoursesHover
                  ? "./arrowIcon.svg"
                  : "./arrowIconOrange.svg"
              }
              iconPosition="right"
            // onMouseEnter={() => { setviewAllCoursesHover(true) }}
            // onMouseLeave={() => { setviewAllCoursesHover(false) }}
            />
          </article>
        </Link>
      )}
    </MaxWebWidth>
  );
}

export default OurCourse;
