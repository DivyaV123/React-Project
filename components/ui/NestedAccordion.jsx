import React, { useState } from "react";
import styles from "./Accordion.module.css"; // Import CSS module
import Svg from "../commonComponents/Svg/Svg";
import { svgicons } from "../assets/icons/svgassets";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import VideoPreview from "@/app/courses/VideoPreview";
const NestedAccordion = ({
  data,
  page,
  parentAccordianStyle,
  typeOfLearning,
}) => {
  const [activeSections, setActiveSections] = useState({});
  const [accordianArrow, setAccordianArrow] = useState({});
  const [videoPreview, setVideoPreview] = useState(false);
  const handleClick = (index) => {
    setActiveSections((prevActiveSections) => ({
      ...prevActiveSections,
      [index]: !prevActiveSections[index],
    }));
    setAccordianArrow((prevAccordianArrow) => ({
      ...prevAccordianArrow,
      [index]: !prevAccordianArrow[index],
    }));
  };

  const handleSubsectionClick = (sectionIndex, subsectionIndex) => {
    const combinedIndex = `${sectionIndex}-${subsectionIndex}`;
    setActiveSections((prevActiveSections) => ({
      ...prevActiveSections,
      [combinedIndex]: !prevActiveSections[combinedIndex],
    }));
    setAccordianArrow((prevAccordianArrow) => ({
      ...prevAccordianArrow,
      [combinedIndex]: !prevAccordianArrow[combinedIndex],
    }));
  };

  const renderThirdLayerContent = (content, sectionIndex) => {
    return (
      <div className="my-[0.833vh] ml-[1.875vw] mobile:my-[1.717vh]">
        <article className="flex justify-between pl-[2.813vw] py-[1.667vh] items-center sm:pr-[1.875vw] mobile:pl-[3.721vw] mobile:py-[1.717vh]">
          {page === "course" ? (
            <>
              <h1 className="flex items-center gap-x-[0.625vw]">
                <span>
                  <Svg
                    width={svgicons.smallDoc[0]}
                    height={svgicons.smallDoc[1]}
                    viewBox={svgicons.smallDoc[2]}
                    icon={svgicons.smallDoc[3]}
                    color={svgicons.smallDoc[4]}
                  />
                </span>
                <span className="text-[#454545] font-medium text-[1.094vw] mobile:text-[2.791vw]">
                  {content}
                </span>
              </h1>
            </>
          ) : (
            <span className="text-[#454545] font-medium text-[1.094vw] mobile:text-[2.791vw]">
              {content}
            </span>
          )}
        </article>
      </div>
    );
  };
  const handleVideoPreview = () => {
    if (handleVideoPreview !== "SELF_PACED") {
      setVideoPreview(true);
    }
  };

  const renderContent = (content, sectionIndex) => {
    if (Array.isArray(content) && content.length > 0) {
      return content.map((item, index) => {
        const key =
          typeof item === "object" && item !== null
            ? Object.keys(item)[1]
            : index;
        const duration =
          typeof item === "object" && item !== null
            ? Object.keys(item)[2]
            : index;
        const videoUrl =
          typeof item === "object" && item !== null
            ? Object.keys(item)[3]
            : index;
        const subsectionContent =
          typeof item === "object" && item !== null ? item[key] : item;
        const subsectionIndex = `${sectionIndex}-${index}`;

        if (
          typeof item === "object" &&
          item !== null &&
          Array.isArray(subsectionContent) &&
          subsectionContent.length > 0
        ) {
          return (
            <div key={subsectionIndex} className="my-[0.833vh] ml-[1.875vw]">
              <button
                className={
                  page === "course"
                    ? `${styles.accordion} flex items-center gap-x-[0.938vw]`
                    : ""
                }
                onClick={() => handleSubsectionClick(sectionIndex, index)}
              >
                {accordianArrow[subsectionIndex] && page === "course" ? (
                  <Svg
                    className=""
                    width={svgicons.accordianArrowDown[0]}
                    height={svgicons.accordianArrowDown[1]}
                    viewBox={svgicons.accordianArrowDown[2]}
                    icon={svgicons.accordianArrowDown[3]}
                    color={svgicons.accordianArrowDown[4]}
                  />
                ) : (
                  <Svg
                    className=""
                    width={svgicons.accordianArrowSide[0]}
                    height={svgicons.accordianArrowSide[1]}
                    viewBox={svgicons.accordianArrowSide[2]}
                    icon={svgicons.accordianArrowSide[3]}
                    color={svgicons.accordianArrowSide[4]}
                  />
                )}
                <div>
                  <span className="font-medium">{key}</span>
                </div>
              </button>
              <div
                className={`${styles.panel} ${activeSections[subsectionIndex] ? styles.active : ""
                  }`}
              >
                {renderContent(subsectionContent, subsectionIndex)}
              </div>
            </div>
          );
        } else if (!Array.isArray(subsectionContent)) {
          return renderThirdLayerContent(subsectionContent, subsectionIndex);
        } else {
          return (
            <div key={subsectionIndex} className="sm:my-[0.833vh] ml-[1.875vw]">
              <AlertDialog popup="videopreview">
                <AlertDialogTrigger asChild>
                  <article
                    className="flex justify-between pl-[2.813vw] py-[1.667vh] items-center sm:pr-[1.875vw] mobile:py-[1.288vh] mobile:pl-[3.256vw] cursor-pointer"
                    onClick={handleVideoPreview}
                  >
                    {page === "course" ? (
                      <>
                        <h1 className="flex items-center gap-x-[0.625vw] gap-2">
                          <span>
                            {typeOfLearning !== "SELF_PACED" ? (
                              <Svg
                                className=""
                                width={svgicons.smallDoc[0]}
                                height={svgicons.smallDoc[1]}
                                viewBox={svgicons.smallDoc[2]}
                                icon={svgicons.smallDoc[3]}
                                color={svgicons.smallDoc[4]}
                              />
                            ) : (
                              <img src="/play_button.svg" />
                            )}
                          </span>
                          <span className="text-[#454545] font-medium text-[1.094vw] mobile:text-[2.791vw]">
                            {key}
                          </span>
                        </h1>
                        {typeOfLearning === "SELF_PACED" ? (
                          <h1 className="flex items-center gap-x-[0.625vw]">
                            <img src="/play_button.svg" />

                            <span className="text-[#454545] font-medium text-[1.094vw]">
                              Preview
                            </span>
                            <span className="text-[#454545] font-medium text-[1.094vw]">
                              {duration} min
                            </span>
                          </h1>
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      <span className="text-[#454545] font-medium text-[1.094vw] mobile:text-[2.791vw]">
                        {item}
                      </span>
                    )}
                  </article>
                </AlertDialogTrigger>
                {videoPreview && (
                  <VideoPreview
                    videoUrl={videoUrl}
                    setVideoPreview={setVideoPreview}
                  />
                )}
              </AlertDialog>
            </div>
          );
        }
      });
    } else {
      return null;
    }
  };

  const renderSections = () => {
    return data && data.map((section, index) => {
      const sectionKey = Object.keys(section)[0];
      const sectionContent = sectionKey && section[sectionKey];
      //made empty object because after edit it was showing error(null cany be converted to object). no impact.
      const moduleCount = {}
      // Object.keys(sectionContent[0])[0];
      const moduleDuration = {}
      //   parseFloat(
      //   Object.keys(sectionContent[0])[4]
      // ).toFixed(2);
      // Only render the section if the subTopics array length is greater than 0
      if (Array.isArray(sectionContent) && sectionContent.length > 0) {
        return (
          <div
            key={index}
            className={
              page === "course"
                ? "border border-[#EBEBEB] my-[0.833vh] rounded-md"
                : `${parentAccordianStyle}`
            }
          >
            <button
              className={
                page === "course"
                  ? `${styles.accordion} flex justify-between`
                  : "flex"
              }
              onClick={() => handleClick(index)}
            >
              <div className=" flex items-center gap-x-[0.938vw] mobile:gap-2">
                {accordianArrow[index] ? (
                  <Svg
                    className="mobile:h-[1.931vh] mobile:w-[4.186vw]"
                    width={svgicons.accordianArrowDown[0]}
                    height={svgicons.accordianArrowDown[1]}
                    viewBox={svgicons.accordianArrowDown[2]}
                    icon={svgicons.accordianArrowDown[3]}
                    color={svgicons.accordianArrowDown[4]}
                  />
                ) : (
                  <Svg
                    className="mobile:h-[1.931vh] mobile:w-[4.186vw]"
                    width={svgicons.accordianArrowSide[0]}
                    height={svgicons.accordianArrowSide[1]}
                    viewBox={svgicons.accordianArrowSide[2]}
                    icon={svgicons.accordianArrowSide[3]}
                    color={svgicons.accordianArrowSide[4]}
                  />
                )}
                <div className="text-[1.25vw] text-[#454545] font-semibold mobile:text-[2.791vw]">
                  {sectionKey}
                </div>
              </div>
              {typeOfLearning === "SELF_PACED" ? (
                <div className="flex gap-1 items-center">
                  <h1 className="text-[#454545] font-medium text-[1.094vw]">
                    {moduleCount} modules
                  </h1>
                  <div>|</div>
                  <p className="text-[#454545] font-medium text-[1.094vw]">
                    {moduleDuration} min
                  </p>
                </div>
              ) : (
                ""
              )}
            </button>
            <div
              className={`${styles.panel} ${activeSections[index] ? styles.active : ""
                }`}
            >
              {renderContent(sectionContent, index)}
            </div>
          </div>
        );
      } else {
        return (
          <div key={index} className="my-[0.833vh]">
            <article className="flex justify-between pl-[2.813vw] py-[1.667vh] items-center pr-[1.875vw]">
              {page === "course" ? (
                <>
                  <h1 className="flex items-center gap-x-[0.625vw]">
                    <span>
                      <Svg
                        width={svgicons.smallDoc[0]}
                        height={svgicons.smallDoc[1]}
                        viewBox={svgicons.smallDoc[2]}
                        icon={svgicons.smallDoc[3]}
                        color={svgicons.smallDoc[4]}
                      />
                    </span>
                    <span className="text-[#454545] font-medium text-[1.094vw]">
                      {sectionKey}
                    </span>
                  </h1>
                </>
              ) : (
                <span className="text-[#454545] font-medium text-[1.094vw]">
                  {sectionKey}
                </span>
              )}
            </article>
          </div>
        );
      }
    });
  };

  return <>{renderSections()}</>;
};

export default NestedAccordion;
