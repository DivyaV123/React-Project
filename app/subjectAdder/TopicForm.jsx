'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SubTopicForm from './SubTopicForm';
import Input from '@/components/commonComponents/input/Input';

const TopicForm = ({ initialValues, onUpdateTopic }) => {
  

  return (
    <div className='m-auto border border-gray-300 p-8 mt-4 mb-4 rounded-xl'>
     
      Topic form 
    
    </div>
  );
};

export default TopicForm;
