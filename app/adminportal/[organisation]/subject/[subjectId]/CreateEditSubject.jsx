"use client";
import React, { useState, useEffect } from "react";
import Input from "@/components/commonComponents/input/Input";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";
import { useSubjectAsPerIDQuery } from "@/redux/queries/getSubjectAsPerIDApi";
import { usePathname } from "next/navigation";
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import { useAddSubjectMutation } from "@/redux/queries/addSubjectApi";
import Svg from "@/components/commonComponents/Svg/Svg";
import { AlertDialog } from "@/components/ui/alert-dialog";
import DeleteWarningPopup from "@/components/commonComponents/deleteWarningPopup/DeleteWarningPopup";
import { svgicons } from "@/components/assets/icons/svgassets";
import { useChapterdeleteMutation } from "@/redux/queries/DeleteChapterApi";
import { useTopicdeleteMutation } from "@/redux/queries/DeleteTopicApi";
import { useSubTopicdeleteMutation } from "@/redux/queries/DeleteSubTopicApi";
const renderIcon = (isOpen, hasChildren, hasVideoUrl) => {
  if (hasChildren) {
    return isOpen ? (
      <Svg
        width={svgicons.accordianArrowDown[0]}
        height={svgicons.accordianArrowDown[1]}
        viewBox={svgicons.accordianArrowDown[2]}
        icon={svgicons.accordianArrowDown[3]}
        color={svgicons.accordianArrowDown[4]}
      />
    ) : (
      <Svg
        width={svgicons.accordianArrowSide[0]}
        height={svgicons.accordianArrowSide[1]}
        viewBox={svgicons.accordianArrowSide[2]}
        icon={svgicons.accordianArrowSide[3]}
        color={svgicons.accordianArrowSide[4]}
      />
    );
  }

  if (hasVideoUrl && !hasChildren) {
    return <img src="/play_button.svg" alt="Play" />;
  }

  return (
    <Svg
      width={svgicons.smallDoc[0]}
      height={svgicons.smallDoc[1]}
      viewBox={svgicons.smallDoc[2]}
      icon={svgicons.smallDoc[3]}
      color={svgicons.smallDoc[4]}
    />
  );
};

const AccordionItem = ({
  title,
  onEdit,
  onDelete,
  children,
  hasVideoUrl,
  hasChildren,
  level = 1,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!title) return null;

  const backgroundColor = level === 1 ? "#FFF5F0" : "#FFFFFF";
  const containerClass = `bg-[${backgroundColor}] rounded-lg ${
    isOpen ? "shadow-md" : ""
  }`;

  return (
    <div className={`mb-4 ${containerClass}`}>
      <div
        className={`flex justify-between items-center  group rounded-lg ${containerClass}`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full text-left py-2.5 px-4 rounded-md font-semibold text-[#434343] flex gap-4 items-center`}
        >
          {renderIcon(isOpen, hasChildren, hasVideoUrl)}
          {title}
        </button>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-6">
          <img
            src="/icon_outline_edit.svg"
            onClick={onEdit}
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
          />

          <img
            src="/icon_outline_delete.svg"
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 cursor-pointer"
          />
        </div>
      </div>
      {isOpen && children && (
        <div className={`pl-4 pt-2 pb-2 ${containerClass}`}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { level: level + 1 })
          )}
        </div>
      )}
    </div>
  );
};

const CreateEditSubject = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const subJectID = segments[segments.length - 1];
  const [addDetailDialog, setAddDetailDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteType, setDeleteType] = useState("");
  const [contentData, setContentData] = useState({
    chapterLength: 0,
    topicLength: 0,
    subTopicLength: 0,
    chapterTitles: [],
    topicTitles: [],
    subTopicTitles: [],
  });
  const [formState, setFormState] = useState({
    selectedLabel: "",
    selectedChapter: "",
    selectedTopic: "",
    chapterName: "",
    topicName: "",
    subTopicName: "",
  });
  const [chaptersData, setChaptersData] = useState([]);
  const {
    data: individualSubject,
    error,
    isLoading,
    refetch: refetchSubject,
  } = useSubjectAsPerIDQuery({ id: subJectID }, { skip: !subJectID });

  const [addSubject] = useAddSubjectMutation();
  const [deleteChapter] = useChapterdeleteMutation();
  const [deleteTopic] = useTopicdeleteMutation()
  const [deleteSubTopic] = useSubTopicdeleteMutation()
  useEffect(() => {
    if (individualSubject?.data) {
      const chapters = individualSubject.data.chapters || [];

      const chapterLength = chapters.length;

      const topicLength = chapters.reduce(
        (acc, chapter) => acc + (chapter.topics?.length || 0),
        0
      );

      const subTopicLength = chapters.reduce((acc, chapter) => {
        return (
          acc +
          (chapter.topics || []).reduce(
            (subAcc, topic) => subAcc + (topic.subTopics?.length || 0),
            0
          )
        );
      }, 0);

      const chapterTitles = chapters
        .map((chapter) => chapter.chapterTitle)
        .filter((title) => title);

      const topicTitles = chapters.reduce((acc, chapter) => {
        return [
          ...acc,
          ...chapter.topics
            .map((topic) => topic.topicTitle)
            .filter((title) => title),
        ];
      }, []);

      const subTopicTitles = chapters.reduce((acc, chapter) => {
        return [
          ...acc,
          ...chapter.topics.reduce((subAcc, topic) => {
            return [
              ...subAcc,
              ...topic.subTopics
                .map((subTopic) => subTopic.subTopicTitle)
                .filter((title) => title),
            ];
          }, []),
        ];
      }, []);

      setContentData({
        chapterLength,
        topicLength,
        subTopicLength,
        chapterTitles,
        topicTitles,
        subTopicTitles,
      });
      setChaptersData(chapters);
    }
  }, [individualSubject]);

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      selectedLabel: contentData.chapterLength > 0 ? "" : "Chapter",
    }));
  }, [contentData.chapterLength]);

  const handleEdit = (type, id) => {
    console.log(`Edit ${type} with id:`, id);
  };

  const handleDelete = (type, id) => {
    setDeleteDialog(true);
    setDeleteId(id);
    setDeleteType(type);
  };
  const handleDeleteDialog = async () => {
    const deleteActions = {
      chapter: deleteChapter,
      topic: deleteTopic,
      subtopic: deleteSubTopic,
    };
  
    const deleteAction = deleteActions[deleteType];
  
    if (deleteAction) {
      try {
        await deleteAction({ [`${deleteType}Id`]: deleteId }).unwrap();
        refetchSubject();
      } catch {
        console.log("error");
      }
    }
  
    setDeleteDialog(false);
    setDeleteId(null);
    setDeleteType("");
  };
  
  const deleteICon = "/illustrate_delete.svg";
  const pStyle = " text-[1.094vw] font-medium pb-[1.389vh]";
  const chooseLevels = [
    {
      label: "Chapter",
      value: "Chapter",
    },
    {
      label: "Topic",
      value: "Topic",
    },
    {
      label: "Sub Topic",
      value: "SubTopic",
    },
  ];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const chapterOptions = contentData.chapterTitles.map((chapterTitle) => ({
    label: chapterTitle,
    value: chapterTitle,
  }));
  const topicOptions = contentData.topicTitles.map((topicTitle) => ({
    label: topicTitle,
    value: topicTitle,
  }));

  const handleSubmitDetails = async () => {
    const {
      selectedLabel,
      chapterName,
      topicName,
      subTopicName,
      selectedChapter,
      selectedTopic,
    } = formState;

    const updatedChapters = structuredClone(chaptersData);

    if (selectedLabel === "Chapter" && chapterName) {
      updatedChapters.push({
        chapterTitle: chapterName,
        chapterPreviewUrl: "",
        chapterPreviewDuration: "",
        topics: [],
      });
    } else if (selectedLabel === "Topic" && selectedChapter && topicName) {
      const chapterIndex = updatedChapters.findIndex(
        (chapter) => chapter.chapterTitle === selectedChapter
      );
      if (chapterIndex !== -1) {
        updatedChapters[chapterIndex].topics.push({
          topicTitle: topicName,
          subTopics: [],
        });
      }
    } else if (
      selectedLabel === "SubTopic" &&
      selectedChapter &&
      selectedTopic &&
      subTopicName
    ) {
      const chapterIndex = updatedChapters.findIndex(
        (chapter) => chapter.chapterTitle === selectedChapter
      );
      if (chapterIndex !== -1) {
        const topicIndex = updatedChapters[chapterIndex].topics.findIndex(
          (topic) => topic.topicTitle === selectedTopic
        );
        if (topicIndex !== -1) {
          updatedChapters[chapterIndex].topics[topicIndex].subTopics.push({
            subTopicTitle: subTopicName,
          });
        }
      }
    }

    setChaptersData(updatedChapters);

    const payload = {
      subjectId: subJectID,
      subjectTitle: individualSubject?.data?.subjectTitle,
      chapters: updatedChapters,
    };

    try {
      const response = await addSubject(payload);
      if (
        response?.data?.statusCode === 200 ||
        response?.data?.statusCode === 201
      ) {
        await refetchSubject();
        setAddDetailDialog(false);
      } else {
        console.error("Failed to add subject:", response?.data);
      }
    } catch (error) {
      console.error("Error submitting details:", error);
    }
  };
  const dialogForm = () => {
    return (
      <section>
        <p className={pStyle}>Select Level</p>
        <Dropdown
          sectionStyle="my-section-style"
          name="selectedLabel"
          placeholder="Select the Level"
          value={formState.selectedLabel}
          onChange={handleChange}
          options={chooseLevels}
          disabled={contentData.chapterLength > 0 ? false : true}
        />
        {(contentData?.chapterLength == 0 ||
          formState.selectedLabel === "Chapter") && (
          <>
            <p className={`${pStyle} pt-4`}>Chapter Name</p>
            <Input
              name="chapterName"
              onChange={handleChange}
              value={formState.chapterName}
              placeholder="Enter Chapter Name"
            />
          </>
        )}

        {contentData?.chapterLength > 0 &&
          formState.selectedLabel !== "Chapter" && (
            <>
              <p className={`${pStyle} pt-4`}>Chapter</p>
              <Dropdown
                sectionStyle="my-section-style"
                name="selectedChapter"
                placeholder="Select the Chapter"
                value={formState.selectedChapter}
                onChange={handleChange}
                options={chapterOptions}
              />
            </>
          )}
        {contentData?.chapterLength > 0 &&
          formState.selectedLabel === "Topic" && (
            <>
              <p className={`${pStyle} pt-4`}>Topic</p>
              <Input
                name="topicName"
                placeholder="Enter Topic Name"
                onChange={handleChange}
                value={formState.topicName}
              />
            </>
          )}
        {contentData?.chapterLength > 0 &&
          formState.selectedLabel === "SubTopic" && (
            <>
              <p className={`${pStyle} pt-4`}>Topic</p>
              <Dropdown
                sectionStyle="my-section-style"
                name="selectedTopic"
                placeholder="Select the Topic"
                value={formState.selectedTopic}
                onChange={handleChange}
                options={topicOptions}
              />
              <p className={`${pStyle} pt-4`}>Sub Topic</p>
              <Input
                name="subTopicName"
                placeholder="Enter Sub Topic Name"
                onChange={handleChange}
                value={formState.subTopicName}
              />
            </>
          )}
      </section>
    );
  };
  return (
    <>
      <Dialog>
        <article className="flex justify-between items-center">
          <div className="flex gap-3 pt-[2.222vh] items-center">
            <div className="pl-[1.875vw] w-[29.688vw]">
              <Input
                inputStyle="rounded-md"
                placeholder="search"
                iconPath="/images/icon_outline_search.png"
              />
            </div>
          </div>
          <DialogTrigger>
            <button
              onClick={() => setAddDetailDialog(true)}
              className={
                "cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw]  text-[1.094vw] rounded-lg mr-[1.875vw]"
              }
            >
              Add Details
            </button>
          </DialogTrigger>
        </article>
        {addDetailDialog && (
          <CommonDialog
            header="Add Details"
            footerBtnTitle="Add New Subject"
            formfn={dialogForm}
            footerBtnClick={handleSubmitDetails}
          />
        )}
      </Dialog>

      <div className="py-[3.333vh] px-[1.875vw]">
        <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
          <p className="pl-4 text-[#434343] font-bold text-[1.25vw] pb-2">
            Subject - {individualSubject?.data?.subjectTitle}
          </p>
          <section>
            {individualSubject?.data?.chapters?.map((chapter) => (
              <AccordionItem
                key={chapter.chapterId}
                title={chapter.chapterTitle}
                onEdit={() => handleEdit("chapter", chapter.chapterId)}
                onDelete={() => handleDelete("chapter", chapter.chapterId)}
                hasVideoUrl={!!chapter.chapterPreviewUrl}
                hasChildren={chapter.topics.length > 0}
                level={1}
              >
                {chapter.topics.length > 0 &&
                  chapter.topics.map((topic) => (
                    <AccordionItem
                      key={topic.topicId}
                      title={topic.topicTitle}
                      onEdit={() => handleEdit("topic", topic.topicId)}
                      onDelete={() => handleDelete("topic", topic.topicId)}
                      hasVideoUrl={!!topic.topicPreviewUrl}
                      hasChildren={topic.subTopics.length > 0}
                      level={2}
                    >
                      {topic.subTopics.length > 0 &&
                        topic.subTopics.map((subTopic) => (
                          <div
                            key={subTopic.subTopicId}
                            className="flex justify-between items-center pl-4 group py-2.5 rounded-md font-semibold text-[#434343]"
                          >
                            <div className="flex gap-4 items-center">
                              {subTopic?.subTopicPreviewUrl ? (
                                <img src="/play_button.svg" alt="Play" />
                              ) : (
                                <Svg
                                  width={svgicons.smallDoc[0]}
                                  height={svgicons.smallDoc[1]}
                                  viewBox={svgicons.smallDoc[2]}
                                  icon={svgicons.smallDoc[3]}
                                  color={svgicons.smallDoc[4]}
                                />
                              )}
                              <p>{subTopic.subTopicTitle}</p>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-6">
                              <img
                                src="/icon_outline_edit.svg"
                                onClick={() =>
                                  handleEdit("subtopic", subTopic.subTopicId)
                                }
                                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                              />
                              <img
                                src="/icon_outline_delete.svg"
                                onClick={() =>
                                  handleDelete("subtopic", subTopic.subTopicId)
                                }
                                className="text-red-500 hover:text-red-700 cursor-pointer"
                              />
                            </div>
                          </div>
                        ))}
                    </AccordionItem>
                  ))}
              </AccordionItem>
            ))}
          </section>
        </div>
        <AlertDialog
          open={deleteDialog}
          onOpenChange={(open) => setDeleteDialog(open)}
        >
          <DeleteWarningPopup
            header="Delete"
            icon={deleteICon}
            setDeleteCategory={setDeleteDialog}
            btnText="Delete"
            contentText={`Are you sure you want to delete ${deleteType}`}
            deleteFunction={handleDeleteDialog}
          />
        </AlertDialog>
      </div>
    </>
  );
};

export default CreateEditSubject;
