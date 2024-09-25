import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import { List } from "lucide-react";
import React, { useContext } from "react";
import "./CourseHighlites.scss";
import CoursePageContainer from "./CoursePageContainer";
import { GlobalContext } from "@/components/Context/GlobalContext";

function CourseHighlites({ courseDetails }) {
  
  const inputText = courseDetails?.data?.courseHighlight;

  const sections = inputText?.split(";"); // Splits sections at semicolons
  const courseContents = sections?.map((section) => {
    const [question, ...bulletParts] = section.split(":");
    const bulletPoints = bulletParts
      .join(":")
      .split(".")
      .filter(Boolean)
      .map((point) => point.trim());
    return {
      question: question.trim(),
      bulletPoints: bulletPoints,
    };
  });
  return (
    <MaxWebWidth sectionStyling="bg-[#FFFCF9]">
      <header>
        <h1 className="font-bold text-black text-[1.5rem] py-5">
          Highlights about the Course
        </h1>
      </header>
      {inputText?.includes("<") ? (
        <div
          className="pointsList"
          dangerouslySetInnerHTML={{ __html: inputText }}
        />
      ) : (
        courseContents?.map((element) => (
          <article className=" px-5 pointsList mb-3 rounded-xl">
            <header className="py-5 font-bold text-xl text-[#454545]">
              {element.question}
            </header>
            {element.bulletPoints.map((points) => (
              <ul className={"list-disc list-inside w-[91%] pb-[1.333vh]"}>
                <li>
                  <span className="text-ash text-base">{points}</span>
                </li>
              </ul>
            ))}
          </article>
        ))
      )}
    </MaxWebWidth>
  );
}

export default CourseHighlites;
