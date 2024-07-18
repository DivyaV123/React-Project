"use client";
import React, { useState, useEffect, useRef } from "react";
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
const SubjectForm = () => {
  const [chapters, setChapters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // Initially null to avoid hydration mismatch
  const [addSubject] = useAddSubjectMutation();
  useEffect(() => {
    // Ensure this state is set only on the client side to avoid hydration issues
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
  const formik = useFormik({
    initialValues: {
      subjectTitle: "",
    },
    validationSchema: Yup.object({
      subjectTitle: Yup.string().required("Required"),
    }),
    onSubmit:async (values) => {
      try{
        chapterRefs.current.forEach((ref) => ref && ref.submitForm());
        const hasErrors = chapterRefs.current.some(
          (ref) => ref && ref.hasErrors()
        );
        if (chapters[0]?.chapterTitle === "") {
          toast({
            variant: "destructive",
            description: <span className=" font-bold ">At least add one Chapter</span>,
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
        const response = await addSubject(payload);
        console.log(payload, response);
        if (response.data.statusCode === 201) {
          toast({
            variant: "success",
            title:<span className=" font-bold  "> Subject Added Successfully</span>,
           
          });
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
      }catch (err) {
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
                  className={`border border-gray-300 mt-6 mb-6 rounded-xl ${
                    activeIndex === index ? "p-8" : "p-2"
                  }`}
                  key={index}
                  value={`chapter-${index}`}
                >
                  <AccordionTrigger>Chapter {index + 1}</AccordionTrigger>
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

        <button
          className="py-2 px-4 bg-gradient rounded-md text-white"
          type="submit"
        >
          Submit Subject
        </button>
      </form>
      <Toaster />
    </MaxWebWidth>
  );
};

export default SubjectForm;
