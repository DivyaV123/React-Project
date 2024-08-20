"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/commonComponents/input/Input";
import Button from "@/components/commonComponents/button/Button";
import { useSubTopicdeleteMutation } from "@/redux/queries/DeleteSubTopicApi";

const SubTopicForm = ({ initialValues, onUpdateSubTopic }) => {
  const [deleteSubTpic] = useSubTopicdeleteMutation()
  const handleSubTopicDelete = async () => {
    let subTopicId = initialValues.subTopicId;
    try {
      const response = await deleteSubTpic({ subtopicId: subTopicId }).unwrap();
    } catch (err) {
      console.log(err);
    }
  }


  const formik = useFormik({
    initialValues: {
      subTopicTitle: initialValues?.subTopicTitle || "",
      subTopicPreviewUrl: initialValues?.subTopicPreviewUrl || "",
      subTopicPreviewDuration: initialValues?.subTopicPreviewDuration || "",
      subTopicId: initialValues?.subTopicId || null,
    },

    validationSchema: Yup.object({
      subTopicTitle: Yup.string().required("Required"),
      // subTopicPreviewUrl: Yup.string().url('Invalid URL').required('Required'),
      // subTopicPreviewDuration: Yup.number().required('Required'),
    }),
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    formik.handleChange(e);
    onUpdateSubTopic({
      ...formik.values,
      [name]: value,
    });
  };
  return (
    <div className="m-auto border mt-4 mb-4 border-gray-300 p-8 rounded-xl">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="flex justify-between w-full">
            <label>
              <span className="text-red-500 pr-1 ">*</span> SubTopic Name
            </label>
            <Button
              onClick={handleSubTopicDelete}
              title='delete this SubTitle'
              type="button"
              className="p-1 bg-gradient text-white m-2 rounded"
            />
          </div>
          <Input
            type="text"
            name="subTopicTitle"
            onChange={handleFormChange}
            onBlur={formik.handleBlur}
            value={formik.values.subTopicTitle}
          />
          {formik.errors.subTopicTitle ? (
            <div>{formik.errors.subTopicTitle}</div>
          ) : null}
        </div>
        <div>
          <label>URL</label>
          <Input
            type="text"
            name="subTopicPreviewUrl"
            onChange={handleFormChange}
            onBlur={formik.handleBlur}
            value={formik.values.subTopicPreviewUrl}
          />
          {formik.errors.subTopicPreviewUrl ? (
            <div>{formik.errors.subTopicPreviewUrl}</div>
          ) : null}
        </div>
        <div>
          <label>Video Duration</label>
          <Input
            type="text"
            name="subTopicPreviewDuration"
            onChange={handleFormChange}
            onBlur={formik.handleBlur}
            value={formik.values.subTopicPreviewDuration}
          />
          {formik.errors.subTopicPreviewDuration ? (
            <div>{formik.errors.subTopicPreviewDuration}</div>
          ) : null}
        </div>
        {/* <button className="py-2 px-4 bg-gradient rounded-md text-white" type="submit">Submit SubTopic</button> */}
      </form>
    </div>
  );
};

export default SubTopicForm;
