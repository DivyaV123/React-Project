'use client'
import React, { useState ,useEffect,useImperativeHandle,forwardRef} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TopicForm from './TopicForm';
import Input from '@/components/commonComponents/input/Input';

const ChapterForm = forwardRef(({ initialValues, onUpdateChapter }, ref) => {
    const [topics, setTopics] = useState(initialValues.topics || []);

  const formik = useFormik({
    initialValues: {
        chapterTitle: initialValues?.chapterTitle || '',
        chapterPreviewUrl: initialValues?.chapterPreviewUrl || '',
        chapterPreviewDuration: initialValues?.chapterPreviewDuration || '',
      },
    validationSchema: Yup.object({
      chapterTitle: Yup.string().required('Required'),
      // chapterPreviewUrl: Yup.string().url('Invalid URL').required('Required'),
      // chapterPreviewDuration: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
        onUpdateChapter(values); // Pass updated form values to parent component (SubjectForm)
      },
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    
    formik.handleChange(e);
    onUpdateChapter({
        ...formik.values, // Pass current form values
        [name]: value,    // Ensure the latest changed field is updated
      });
   // Pass updated form values to parent component (SubjectForm)
  };
  const handleAddTopic = () => {
    formik.handleSubmit()
    formik.values.chapterTitle && setTopics([
      ...topics,
      { topicTitle: '', topicPreviewUrl: '', topicPreviewDuration: '', subTopics: [] },
    ]);
  };
  useImperativeHandle(ref, () => ({
    submitForm: () => {
      formik.handleSubmit();
    },
  }));
const handleUpdateTopic = (updatedTopic, index) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = updatedTopic;
    setTopics(updatedTopics);
    onUpdateChapter({
      ...formik.values,
      topics: updatedTopics,
    });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='mb-2'>
        <label> <span className="text-red-500 pr-1 ">*</span>Chapter Name</label>
        <Input
          type="text"
          name="chapterTitle"
          onChange={handleFormChange}
          onBlur={formik.handleBlur}
          value={formik.values.chapterTitle}
        />
        {formik.errors.chapterTitle ? <div className='text-red-500 text-[0.75vw]'>{formik.errors.chapterTitle}</div> : null}
      </div>
      <div className='mb-2'>
        <label>URL</label>
        <Input
          type="text"
          name="chapterPreviewUrl"
          onChange={handleFormChange}
          onBlur={formik.handleBlur}
          value={formik.values.chapterPreviewUrl}
        />
        {formik.errors.chapterPreviewUrl ? <div>{formik.errors.chapterPreviewUrl}</div> : null}
      </div>
      <div className='mb-2'>
        <label>Video Duration</label>
        <Input
          type="text"
          name="chapterPreviewDuration"
          onChange={handleFormChange}
          onBlur={formik.handleBlur}
          value={formik.values.chapterPreviewDuration}
        />
        {formik.errors.chapterPreviewDuration ? <div>{formik.errors.chapterPreviewDuration}</div> : null}
      </div>
       {topics.map((topic, index) => (
        <TopicForm
          key={index}
          initialValues={topic}
          onUpdateTopic={(updatedTopic) => handleUpdateTopic(updatedTopic, index)}
        />
      ))}
      <button className="py-2 mt-3 px-4 bg-gradient rounded-md text-white" type="button"  onClick={handleAddTopic}>
        Add Topic
      </button>
      {/* <TopicForm topics={topics} setTopics={setTopics} /> */}
     
    </form>
  );
});

export default ChapterForm;
