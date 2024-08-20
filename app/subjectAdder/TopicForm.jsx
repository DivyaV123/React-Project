"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SubTopicForm from "./SubTopicForm";
import Input from "@/components/commonComponents/input/Input";
import Button from "@/components/commonComponents/button/Button";
import { useTopicdeleteMutation } from "@/redux/queries/DeleteTopicApi";

const TopicForm = ({ initialValues, onUpdateTopic, allTopics, key }) => {
  const [deleteTopic] = useTopicdeleteMutation()
  const [subTopics, setSubTopics] = useState(initialValues.subTopics || []);
  const formik = useFormik({
    initialValues: {
      topicTitle: initialValues?.topicTitle || "",
      topicPreviewUrl: initialValues?.topicPreviewUrl || "",
      topicPreviewDuration: initialValues?.topicPreviewDuration || "",
      topicId: initialValues?.topicId || null,
    },
    validationSchema: Yup.object({
      topicTitle: Yup.string().required("Required"),
      // topicPreviewUrl: Yup.string().url('Invalid URL').required('Required'),
      // topicPreviewDuration: Yup.number().required('Required'),
    }),
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    onUpdateTopic({
      ...formik.values, // Pass current form values
      [name]: value, // Ensure the latest changed field is updated
    });
  };

  const handleAddSubTopic = () => {
    // formik.handleSubmit()
    formik.values.topicTitle &&
      setSubTopics([
        ...subTopics,
        {
          subTopicTitle: "",
          subTopicPreviewUrl: "",
          subTopicPreviewDuration: "",
        },
      ]);
  };

  const handleUpdateSubTopic = (updatedSubTopic, index) => {
    const updatedSubTopics = [...subTopics];
    updatedSubTopics[index] = updatedSubTopic;
    setSubTopics(updatedSubTopics);
    onUpdateTopic({
      ...formik.values,
      subTopics: updatedSubTopics,
    });
  };

  const handleTopicDelete = async (event) => {
    let topicId = initialValues.topicId;
    try {
      const response = await deleteTopic({ topicId: topicId }).unwrap();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="m-auto border border-gray-300 p-8 mt-4 mb-4 rounded-xl">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="flex w-full justify-between">
              <label>
                <span className="text-red-500 pr-1 ">*</span>Topic Name
              </label>
              <Button
                title='Delete this Topic'
                type="button"
                onClick={() => handleTopicDelete(key)}
                className="p-1 bg-gradient rounded text-white m-2"
              />
            </div>
            <Input
              type="text"
              name="topicTitle"
              onChange={handleFormChange}
              onBlur={formik.handleBlur}
              value={formik.values.topicTitle}
            />
            {formik.errors.topicTitle ? (
              <div className="text-red-500 text-[0.75vw]">
                {formik.errors.topicTitle}
              </div>
            ) : null}
          </div>
          <div>
            <label>URL</label>
            <Input
              type="text"
              name="topicPreviewUrl"
              onChange={handleFormChange}
              onBlur={formik.handleBlur}
              value={formik.values.topicPreviewUrl}
            />
            {formik.errors.topicPreviewUrl ? (
              <div>{formik.errors.topicPreviewUrl}</div>
            ) : null}
          </div>
          <div>
            <label>Video Duration</label>
            <Input
              type="text"
              name="topicPreviewDuration"
              onChange={handleFormChange}
              onBlur={formik.handleBlur}
              value={formik.values.topicPreviewDuration}
            />
            {formik.errors.topicPreviewDuration ? (
              <div>{formik.errors.topicPreviewDuration}</div>
            ) : null}
          </div>
          {subTopics.map((subTopic, index) => (
            <SubTopicForm
              key={index}
              initialValues={subTopic}
              onUpdateSubTopic={(updatedSubTopic) =>
                handleUpdateSubTopic(updatedSubTopic, index)
              }
            />
          ))}
          <button
            type="button"
            className="py-2 mt-3 px-4 bg-gradient rounded-md text-white"
            onClick={handleAddSubTopic}
          >
            Add SubTopic
          </button>
        </form>
      </div>
    </div>
  );
};

export default TopicForm;
