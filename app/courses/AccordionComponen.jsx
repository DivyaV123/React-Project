import React, { useState } from "react";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import VideoPreview from "@/app/courses/VideoPreview";

const AccordionItem = ({
  item,
  depth,
  isOpenInitially,
  isSubject,
  typeOfLearning,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);
  const [videoPreview, setVideoPreview] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const hasChildren =
    (item.chapters && item.chapters.length > 0) ||
    (item.topics && item.topics.length > 0) ||
    (item.subTopics && item.subTopics.length > 0);

  const isLeafNode = !hasChildren && (item.topicTitle || item.subTopicTitle);

  const handleVideoPreview = (e) => {
    e.stopPropagation();
    if (typeOfLearning === "SELF_PACED" && isLeafNode) {
      setVideoPreview(true);
    }
  };

  return (
    <div style={{ marginLeft: depth * 20 }}>
      {isSubject ? (
        <section className="border border-[#EBEBEB] my-[0.833vh] rounded-md">
          <div
            onClick={toggleAccordion}
            className="cursor-pointer text-[1.25vw] text-[#454545] font-semibold mobile:text-[2.791vw] py-3 pl-2 flex space-x-4 items-center"
          >
            {isOpen ? (
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
            <p>{item.subjectTitle}</p>
          </div>
          {isOpen && hasChildren && (
            <div>
              {item.chapters &&
                item.chapters.map((chapter, idx) => (
                  <AccordionItem
                    key={idx}
                    item={chapter}
                    depth={depth + 1}
                    isOpenInitially={false}
                    isSubject={false}
                    typeOfLearning={typeOfLearning}
                  />
                ))}
            </div>
          )}
        </section>
      ) : (
        <section
          className={`${
            depth === 2 ? "border-none" : "border border-[#EBEBEB]"
          } my-[0.833vh] rounded-md`}
        >
          <AlertDialog popup="videopreview">
            <AlertDialogTrigger asChild>
              <div
                className="flex justify-between sm:pr-[1.875vw]"
                onClick={
                  isLeafNode && typeOfLearning === "SELF_PACED"
                    ? handleVideoPreview
                    : toggleAccordion
                }
              >
                <div className="cursor-pointer text-[1.25vw] text-[#454545] font-semibold mobile:text-[2.791vw] py-3 pl-2 flex space-x-4 items-center">
                  {isLeafNode ? (
                    typeOfLearning === "SELF_PACED" ? (
                      <img src="/play_button.svg" alt="Play Button" />
                    ) : (
                      <Svg
                        className=""
                        width={svgicons.smallDoc[0]}
                        height={svgicons.smallDoc[1]}
                        viewBox={svgicons.smallDoc[2]}
                        icon={svgicons.smallDoc[3]}
                        color={svgicons.smallDoc[4]}
                      />
                    )
                  ) : (item.chapterTitle || item.topicTitle) && hasChildren ? (
                    isOpen ? (
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
                    )
                  ) : (
                    ""
                  )}
                  <p>
                    {item.chapterTitle || item.topicTitle || item.subTopicTitle}
                  </p>
                </div>
                {isLeafNode && typeOfLearning === "SELF_PACED" ? (
                  <h1 className="flex items-center gap-x-[0.625vw] cursor-pointer">
                    <img src="/play_button.svg" alt="Play Button" />
                    <span className="text-[#454545] font-medium text-[1.094vw]">
                      Preview
                    </span>
                    <span className="text-[#454545] font-medium text-[1.094vw]">
                      {item?.topicPreviewDuration}min
                    </span>
                  </h1>
                ) : item.chapterTitle && typeOfLearning === "SELF_PACED" ? (
                  <div className="flex gap-1 items-center ">
                    <h1 className="text-[#454545] font-medium text-[1.094vw]">
                      {item?.chapterModuleCount} Modules
                    </h1>
                    <div>|</div>
                    <p className="text-[#454545] font-medium text-[1.094vw]">
                      {parseFloat(item?.chapterModuleDuration).toFixed(2)} min
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </AlertDialogTrigger>
            {videoPreview && (
              <VideoPreview
                videoUrl={item?.topicPreviewUrl}
                setVideoPreview={setVideoPreview}
              />
            )}
          </AlertDialog>
          {isOpen && hasChildren && (
            <div>
              {item.chapters &&
                item.chapters.map((chapter, idx) => (
                  <AccordionItem
                    key={idx}
                    item={chapter}
                    depth={depth + 1}
                    isOpenInitially={false}
                    isSubject={false}
                    typeOfLearning={typeOfLearning}
                  />
                ))}
              {item.topics &&
                item.topics.map((topic, idx) => (
                  <AccordionItem
                    key={idx}
                    item={topic}
                    depth={depth + 1}
                    isOpenInitially={false}
                    isSubject={false}
                    typeOfLearning={typeOfLearning}
                  />
                ))}
              {item.subTopics &&
                item.subTopics.map((subTopic, idx) => (
                  <AccordionItem
                    key={idx}
                    item={subTopic}
                    depth={depth + 1}
                    isOpenInitially={false}
                    isSubject={false}
                    typeOfLearning={typeOfLearning}
                  />
                ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

const AccordionComponen = ({ data, typeOfLearning }) => {
  const hasMultipleSubjects = data?.subjects?.length > 1;
  return (
    <div className="w-[87.5vw] m-auto">
      <header className="text-[1.875vw] font-bold sm:pt-[2.778vh] pb-[2.778vh] mobile:pb-[1.717vh] mobile:text-[4.651vw]">
        Course Content
      </header>
      {data?.subjects?.map((subject, idx) => (
        <div key={idx} className="sm:my-[2.778vh]">
          {hasMultipleSubjects && (
            <AccordionItem
              item={subject}
              depth={0}
              isOpenInitially={idx === 0}
              isSubject={true}
              typeOfLearning={typeOfLearning}
            />
          )}
          {!hasMultipleSubjects && idx === 0 && (
            <div>
              {subject.chapters &&
                subject.chapters.map((chapter, idx) => (
                  <AccordionItem
                    key={idx}
                    item={chapter}
                    depth={0}
                    isOpenInitially={idx === 0}
                    isSubject={false}
                    typeOfLearning={typeOfLearning}
                  />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionComponen;
