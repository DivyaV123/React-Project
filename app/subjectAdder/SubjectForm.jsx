"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import ChapterForm from "./ChapterForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/commonComponents/input/Input";
import { useAddSubjectMutation } from "@/redux/queries/addSubjectApi";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useRouter } from "next/navigation";
import Button from "@/components/commonComponents/button/Button";
import { useChapterdeleteMutation } from "@/redux/queries/DeleteChapterApi";

const SubjectForm = () => {
  const { individualSubjectData } = useContext(GlobalContext);
  const [subjectId, setSubjectId] = useState(null)
  const [chapters, setChapters] = useState(
    individualSubjectData ? individualSubjectData?.chapters : []
  );
  const [deleteChapter] = useChapterdeleteMutation()
  const [activeIndex, setActiveIndex] = useState(null); // Initially null to avoid hydration mismatch
  const [addSubject] = useAddSubjectMutation();

  const router = useRouter();
  useEffect(() => {
    // Ensure this state is set only on the client side to avoid hydration issues
    !individualSubjectData &&
      setChapters([
        {
          chapterTitle: "",
          chapterPreviewUrl: "",
          chapterPreviewDuration: "",
          topics: [],
        },
      ]);
    setActiveIndex(0);
  }, []);

  const handleAddChapter = () => {
    if (chapters[0]?.chapterTitle === "") {
      toast({
        variant: "destructive",
        description: "Atleast add one Chapter",
      });
      return;
    }
    setChapters((prevChapters) => [
      ...prevChapters,
      {
        chapterTitle: "",
        chapterPreviewUrl: "",
        chapterPreviewDuration: "",
        topics: [],
      },
    ]);
    setActiveIndex(chapters.length); // Set the newly added chapter as the active one
  };

  const handleUpdateChapter = (updatedChapter, index) => {
    const updatedChapters = [...chapters];
    updatedChapters[index] = updatedChapter;
    setChapters(updatedChapters);
  };

  const handleAccordionChange = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active index
  };
  const haveSameData = function (obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;
    if (obj1Length === obj2Length) {
      return Object.keys(obj1).every(
        (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
      );
    }
    return false;
  };
  const formik = useFormik({
    initialValues: {
      subjectTitle: individualSubjectData
        ? individualSubjectData?.subjectTitle
        : "",
    },
    validationSchema: Yup.object({
      subjectTitle: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        chapterRefs.current.forEach((ref) => ref && ref.submitForm());
        const hasErrors = chapterRefs.current.some(
          (ref) => ref && ref.hasErrors()
        );
        if (chapters[0]?.chapterTitle === "") {
          toast({
            variant: "destructive",
            description: (
              <span className=" font-bold ">At least add one Chapter</span>
            ),
          });
          return;
        }
        if (hasErrors) {
          return;
        }

        formik.errors.subjectTitle &&
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        const payload = {
          subjectId: 0,
          subjectTitle: values.subjectTitle,
          subjectDescrption: "string",
          chapters,
          createdDateAndTime: new Date().toISOString(),
          updatedDateAndTime: new Date().toISOString(),
        };
        const editPayload = {
          subjectId: individualSubjectData?.subjectId,
          subjectTitle: values.subjectTitle,
          subjectDescrption: "string",
          chapters,
          createdDateAndTime: new Date().toISOString(),
          updatedDateAndTime: new Date().toISOString(),
        };
        const initialData = individualSubjectData
          ? {
            subjectTitle: individualSubjectData.subjectTitle,
            chapters: individualSubjectData.chapters,
          }
          : {
            subjectTitle: "",
            chapters: [
              {
                chapterTitle: "",
                chapterPreviewUrl: "",
                chapterPreviewDuration: "",
                topics: [],
              },
            ],
          };
        const hasNoChanges =
          JSON.stringify(values.subjectTitle) ===
          JSON.stringify(initialData.subjectTitle) &&
          JSON.stringify(chapters) === JSON.stringify(initialData.chapters);
        // if (hasNoChanges) {
        //   toast({
        //     variant: "info",
        //     description: "No changes have been made",
        //   });
        //   return;
        // }
        const response = await addSubject(
          individualSubjectData !== undefined ? editPayload : payload
        );

        if (response.data.statusCode === 201) {
          toast({
            variant: "success",
            title: (
              <span className=" font-bold  ">
                {" "}
                {individualSubjectData
                  ? `${values.subjectTitle} edited Successfully`
                  : "Subject Added Successfully"}
              </span>
            ),
          });

          individualSubjectData
            ? setTimeout(() => {
              router.push("/editSubject");
            }, 5000)
            : setTimeout(() => {
              window.location.reload();
            }, 5000);
        }
      } catch (err) {
        console.error(err, "Error from SubjectAdder api");
      }
    },
  });
  const chapterRefs = useRef([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    formik.submitForm();

    formik.errors.subjectTitle &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  const handleSubjectDelete = async (event, index) => {
    const sibId = chapters[index].chapterId;
    try {
      const response = await deleteChapter({ chapterId: sibId }).unwrap();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <MaxWebWidth
      sectionStyling="p-8"
      articalStyling="w-[87.5vw] mobile:w-auto m-auto border border-gray-300 p-8 mobile:p-4 rounded-xl"
    >
      <form onSubmit={handleSubmit}>
        <section className="flex justify-between">
          <div>
            <label>
              <span className="text-red-500 pr-1 ">*</span>Subject Title
            </label>
            <Input
              type="text"
              name="subjectTitle"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subjectTitle}
              autoFocus
            />
            {formik.errors.subjectTitle ? (
              <div className="absolute text-red-500 text-[1vw]">
                {formik.errors.subjectTitle}
              </div>
            ) : null}
          </div>
          <button
            type="button"
            className="py-2 h-[7vh] mt-5 px-4 bg-gradient rounded-md text-white"
            onClick={handleAddChapter}
          >
            Add Chapter
          </button>
        </section>
        <section className="">
          {chapters.length > 0 && (
            <Accordion
              type="single"
              collapsible
              defaultValue={`chapter-0`}
              onValueChange={handleAccordionChange}
            >
              {chapters.map((chapter, index) => (
                <AccordionItem
                  className={`border border-gray-300 mt-6 mb-6 rounded-xl ${activeIndex === index ? "p-8" : "p-2"
                    }`}
                  key={index}
                  value={`chapter-${index}`}
                >
                  <AccordionTrigger>
                    <div className="flex w-full justify-between">
                      Chapter {index + 1}
                      <Button
                        onClick={(event) => handleSubjectDelete(event, index)}
                        type="button"
                        title='Delete this Chapter'
                        className='p-1 mr-2 text-white bg-gradient rounded'
                      />
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <ChapterForm
                      key={index} // Ensure each ChapterForm instance has a unique key
                      initialValues={chapter}
                      onUpdateChapter={(updatedChapter) =>
                        handleUpdateChapter(updatedChapter, index)
                      }
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </section>
        <div className=" flex justify-between">
          <button
            className="py-2 px-4 bg-gradient rounded-md text-white"
            type="submit"
          >
            {individualSubjectData ? "Edit Subject" : "Submit Subject"}
          </button>
        </div>
      </form>
      <button
        className="py-2 px-4 bg-gradient rounded-md text-white relative float-right bottom-[6vh]"
        onClick={() => {
          router.push("/DashBoard");
        }}
      >
        Cancel
      </button>
      <Toaster />
    </MaxWebWidth>
  );
};

export default SubjectForm;
