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
  index,
  setStoreIndex,
  setStoreTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (level == 1 && isOpen) {
    setStoreIndex(index);
    setStoreTitle(title);
  } else if (level == 2 && isOpen) {
    setStoreIndex(index);
    setStoreTitle(title);
  }
  if (!title) return null;

  const backgroundColor = level === 1 ? "#FFF5F0" : "#FFFFFF";
  const containerClass = `bg-[${backgroundColor}] rounded-lg ${
    isOpen ? "shadow-md" : ""
  }`;

  return (
    <Dialog>
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
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src="/icon_outline_edit.svg"
                  onClick={onEdit}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                />
              </DialogTrigger>
            </Dialog>
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
    </Dialog>
  );
};

const CreateEditSubject = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const subJectID = Number(segments[segments.length - 1]);
  const [addDetailDialog, setAddDetailDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
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
  const [storeChapterIndex, setStoreChapterIndex] = useState(null);
  const [storeTopicIndex, setStoreTopicIndex] = useState(null);
  const [storeSubTopicIndex, setStoreSubTopicIndex] = useState(null);
  const [storeChapterTitle, setStoreChapterTitle] = useState("");
  const [storeTopicTitle, setStoreTopicTitle] = useState("");
  const [formState, setFormState] = useState({
    selectedLabel: "",
    selectedChapter: "",
    selectedTopic: "",
    chapterName: "",
    topicName: "",
    subTopicName: "",
    chapterPreviewUrl: "",
    topicPreviewUrl: "",
    subTopicPreviewUrl: "",
    chapterPreviewDuration: "",
    topicPreviewDuration: "",
    subTopicPreviewDuration: "",
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
  const [deleteTopic] = useTopicdeleteMutation();
  const [deleteSubTopic] = useSubTopicdeleteMutation();

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

  const handleEdit = (type, id, title, getChapter, index) => {
    setEditDialog(true);
    setAddDetailDialog(true);
    setDeleteId(id);
    setDeleteType(type);
    setFormState((prevState) => ({
      ...prevState,
      [`${type.toLowerCase()}Name`]: title,
    }));
    if (type === "chapter") {
      setFormState((prevState) => ({
        ...prevState,
        selectedLabel: "Chapter",
        selectedChapter: title,
        chapterPreviewUrl: getChapter[index].chapterPreviewUrl,
        chapterPreviewDuration: getChapter[index].chapterPreviewDuration,
      }));
      setStoreChapterIndex(index);
    } else if (type === "topic") {
      setFormState((prevState) => ({
        ...prevState,
        selectedLabel: "Topic",
        selectedTopic: title,
        selectedChapter: storeChapterTitle,
        topicPreviewUrl: getChapter.topicPreviewUrl,
        topicPreviewDuration: getChapter.topicPreviewDuration,
      }));
      setStoreTopicIndex(index);
    } else if (type === "subtopic") {
      setFormState((prevState) => ({
        ...prevState,
        selectedLabel: "SubTopic",
        subTopicName: title,
        selectedTopic: storeTopicTitle,
        selectedChapter: storeChapterTitle,
        subTopicPreviewUrl: getChapter.subTopicPreviewUrl,
        subTopicPreviewDuration: getChapter.subTopicPreviewDuration,
      }));
      setStoreSubTopicIndex(index);
    }
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
      chapterPreviewUrl,
      topicPreviewUrl,
      subTopicPreviewUrl,
      chapterPreviewDuration,
      topicPreviewDuration,
      subTopicPreviewDuration,
    } = formState;

    const updatedChapters = structuredClone(chaptersData);
    if (selectedLabel === "Chapter" && chapterName) {
      const chapterIndex = updatedChapters.findIndex(
        (chapter) => chapter.chapterTitle === chapterName
      );
      if (chapterIndex === -1 && !editDialog) {
        updatedChapters.push({
          chapterTitle: chapterName,
          chapterPreviewUrl: chapterPreviewUrl,
          chapterPreviewDuration: chapterPreviewDuration,
          topics: [],
        });
      }
      if (editDialog) {
        updatedChapters[storeChapterIndex] = {
          ...updatedChapters[storeChapterIndex],
          chapterId: updatedChapters[storeChapterIndex].chapterId,
          chapterTitle: chapterName,
          chapterPreviewUrl: chapterPreviewUrl,
          chapterPreviewDuration: chapterPreviewDuration,
        };
      }
    }
    if (selectedLabel === "Topic" && selectedChapter && topicName) {
      const chapterIndex = updatedChapters.findIndex(
        (chapter) => chapter.chapterTitle === selectedChapter
      );
      if (chapterIndex !== -1) {
        const topicIndex = updatedChapters[chapterIndex].topics.findIndex(
          (topic) => topic.topicTitle === topicName
        );

        if (topicIndex === -1 && !editDialog) {
          updatedChapters[chapterIndex].topics.push({
            topicTitle: topicName,
            topicPreviewUrl: topicPreviewUrl,
            topicPreviewDuration: topicPreviewDuration,
            subTopics: [],
          });
        }
        if (editDialog) {
          updatedChapters[storeChapterIndex].topics[storeTopicIndex] = {
            ...updatedChapters[storeChapterIndex].topics[storeTopicIndex],
            topicId:
              updatedChapters[storeChapterIndex].topics[storeTopicIndex]
                .topicId,
            topicTitle: topicName,
            topicPreviewUrl: topicPreviewUrl,
            topicPreviewDuration: topicPreviewDuration,
          };
        }
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
          const subTopicIndex = updatedChapters[chapterIndex].topics[
            topicIndex
          ].subTopics.findIndex(
            (subTopic) => subTopic.subTopicTitle === subTopicName
          );

          if (subTopicIndex === -1 && !editDialog) {
            updatedChapters[chapterIndex].topics[topicIndex].subTopics.push({
              subTopicTitle: subTopicName,
              subTopicPreviewUrl: subTopicPreviewUrl,
              subTopicPreviewDuration: subTopicPreviewDuration,
            });
          }
          if (editDialog) {
            updatedChapters[storeChapterIndex].topics[
              storeTopicIndex
            ].subTopics[storeSubTopicIndex] = {
              ...updatedChapters[storeChapterIndex].topics[storeTopicIndex]
                .subTopics[storeSubTopicIndex],
              subTopicId:
                updatedChapters[storeChapterIndex].topics[storeTopicIndex]
                  .subTopics[storeSubTopicIndex].subTopicId,
              subTopicTitle: subTopicName,
              subTopicPreviewUrl: subTopicPreviewUrl,
              subTopicPreviewDuration: subTopicPreviewDuration,
            };
          }
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
        response?.data?.statusCode == 200 ||
        response?.data?.statusCode == 201
      ) {
        await refetchSubject();
        setAddDetailDialog(false);
        setFormState({
          selectedLabel: "",
          selectedChapter: "",
          selectedTopic: "",
          chapterName: "",
          topicName: "",
          subTopicName: "",
          chapterPreviewUrl: "",
          topicPreviewUrl: "",
          subTopicPreviewUrl: "",
          chapterPreviewDuration: "",
          topicPreviewDuration: "",
          subTopicPreviewDuration: "",
        });
      } else {
        console.error("Failed to add/update subject:", response?.data);
      }
    } catch (error) {
      console.error("Error submitting details:", error);
    }
  };
const handleAddDetails=()=>{
    setAddDetailDialog(true), 
    setEditDialog(false),
    setFormState({
      selectedLabel: "",
      selectedChapter: "",
      selectedTopic: "",
      chapterName: "",
      topicName: "",
      subTopicName: "",
      chapterPreviewUrl: "",
      topicPreviewUrl: "",
      subTopicPreviewUrl: "",
      chapterPreviewDuration: "",
      topicPreviewDuration: "",
      subTopicPreviewDuration: "",
    });
}
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
            <p className={`${pStyle} pt-2`}>Chapter Name</p>
            <Input
              name="chapterName"
              onChange={handleChange}
              value={formState.chapterName}
              placeholder="Enter Chapter Name"
            />
            <p className={`${pStyle} pt-2`}>Chapter URL</p>
            <Input
              name="chapterPreviewUrl"
              onChange={handleChange}
              value={formState.chapterPreviewUrl}
              placeholder="Enter Chapter URL"
            />
            <p className={`${pStyle} pt-2`}>Chapter Duration</p>
            <Input
              name="chapterPreviewDuration"
              onChange={handleChange}
              value={formState.chapterPreviewDuration}
              placeholder="Enter Chapter Duration"
            />
          </>
        )}

        {contentData?.chapterLength > 0 &&
          formState.selectedLabel !== "Chapter" &&
          formState.selectedLabel !== "" && (
            <>
              <p className={`${pStyle} pt-2`}>Chapter</p>
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
              <p className={`${pStyle} pt-2`}>Topic</p>
              <Input
                name="topicName"
                placeholder="Enter Topic Name"
                onChange={handleChange}
                value={formState.topicName}
              />
              <p className={`${pStyle} pt-2`}>Topic URL</p>
              <Input
                name="topicPreviewUrl"
                onChange={handleChange}
                value={formState.topicPreviewUrl}
                placeholder="Enter Topic URL"
              />
              <p className={`${pStyle} pt-2`}>Topic Duration</p>
              <Input
                name="topicPreviewDuration"
                onChange={handleChange}
                value={formState.topicPreviewDuration}
                placeholder="Enter Topic Duration"
              />
            </>
          )}
        {contentData?.chapterLength > 0 &&
          formState.selectedLabel === "SubTopic" && (
            <>
              <p className={`${pStyle} pt-2`}>Topic</p>
              <Dropdown
                sectionStyle="my-section-style"
                name="selectedTopic"
                placeholder="Select the Topic"
                value={formState.selectedTopic}
                onChange={handleChange}
                options={topicOptions}
              />
              <p className={`${pStyle} pt-2`}>Sub Topic</p>
              <Input
                name="subTopicName"
                placeholder="Enter Sub Topic Name"
                onChange={handleChange}
                value={formState.subTopicName}
              />
              <p className={`${pStyle} pt-2`}>SubTopic URL</p>
              <Input
                name="subTopicPreviewUrl"
                onChange={handleChange}
                value={formState.subTopicPreviewUrl}
                placeholder="Enter subTopic URL"
              />
              <p className={`${pStyle} pt-2`}>SubTopic Duration</p>
              <Input
                name="subTopicPreviewDuration"
                onChange={handleChange}
                value={formState.subTopicPreviewDuration}
                placeholder="Enter SubTopic Duration"
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
              onClick={handleAddDetails}
              className={
                "cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw]  text-[1.094vw] rounded-lg mr-[1.875vw]"
              }
            >
              Add Details
            </button>
          </DialogTrigger>
        </article>

        <div className="py-[3.333vh] px-[1.875vw]">
          <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
            <p className="pl-4 text-[#434343] font-bold text-[1.25vw] pb-2">
              Subject - {individualSubject?.data?.subjectTitle}
            </p>
            <section>
              {individualSubject?.data?.chapters?.map(
                (chapter, chapterIdx, originalArray) => (
                  <AccordionItem
                    key={chapter.chapterId}
                    title={chapter.chapterTitle}
                    onEdit={() =>
                      handleEdit(
                        "chapter",
                        chapter.chapterId,
                        chapter.chapterTitle,
                        originalArray,
                        chapterIdx
                      )
                    }
                    onDelete={() => handleDelete("chapter", chapter.chapterId)}
                    hasVideoUrl={!!chapter.chapterPreviewUrl}
                    hasChildren={chapter.topics.length > 0}
                    level={1}
                    index={chapterIdx}
                    setStoreIndex={setStoreChapterIndex}
                    setStoreTitle={setStoreChapterTitle}
                  >
                    {chapter.topics.length > 0 &&
                      chapter.topics.map((topic, topicIndex) => (
                        <AccordionItem
                          key={topic.topicId}
                          title={topic.topicTitle}
                          onEdit={() =>
                            handleEdit(
                              "topic",
                              topic.topicId,
                              topic.topicTitle,
                              topic,
                              topicIndex
                            )
                          }
                          onDelete={() => handleDelete("topic", topic.topicId)}
                          hasVideoUrl={!!topic.topicPreviewUrl}
                          hasChildren={topic.subTopics.length > 0}
                          level={2}
                          index={topicIndex}
                          setStoreIndex={setStoreTopicIndex}
                          setStoreTitle={setStoreTopicTitle}
                        >
                          {topic.subTopics.length > 0 &&
                            topic.subTopics.map((subTopic, subtopicIndex) => (
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
                                  <DialogTrigger asChild>
                                    <img
                                      src="/icon_outline_edit.svg"
                                      onClick={() =>
                                        handleEdit(
                                          "subtopic",
                                          subTopic.subTopicId,
                                          subTopic.subTopicTitle,
                                          subTopic,
                                          subtopicIndex
                                        )
                                      }
                                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                    />
                                  </DialogTrigger>
                                  <img
                                    src="/icon_outline_delete.svg"
                                    onClick={() =>
                                      handleDelete(
                                        "subtopic",
                                        subTopic.subTopicId,
                                        subTopic.subTopicTitle
                                      )
                                    }
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                  />
                                </div>
                              </div>
                            ))}
                        </AccordionItem>
                      ))}
                  </AccordionItem>
                )
              )}
            </section>
          </div>
          <Dialog open={addDetailDialog} onOpenChange={setAddDetailDialog}>
            <CommonDialog
              header={`${editDialog ? "Edit Details" : "Add Details"}`}
              footerBtnTitle={`${editDialog ? "Update" : "Create"}`}
              formfn={dialogForm}
              footerBtnClick={handleSubmitDetails}
            />
          </Dialog>
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
      </Dialog>
    </>
  );
};

export default CreateEditSubject;
