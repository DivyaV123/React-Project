'use client'
import Button from '@/components/commonComponents/button/Button';
import Input from '@/components/commonComponents/input/Input'
import TextArea from '@/components/commonComponents/textArea/TextArea';
import React from 'react'


const editorConfiguration = {
    toolbar: ['heading',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        '|',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'alignment',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'link',
        'imageUpload',
        '|',
        'undo',
        'redo']
};


function CourseFormLanding() {
    const commonLabelStyles = 'pb-[1.111vh] ';
    return (
        <section className='w-[87.5vw] m-auto'>
            <article className='border py-[2.5vw] px-[2.5vw] border-2 rounded-xl my-[2.5vw]'>
                <div className='flex justify-between mb-[4.444vh] '>
                    <div className='w-[33vw]'>
                        <p className={`${commonLabelStyles}`}>course</p>
                        <Input

                        />
                    </div>
                    <div className='w-[33vw] ' >
                        <p className={`${commonLabelStyles}`}>Sub Course</p>
                        <Input />
                    </div>
                </div>
                <div className='w-[33vw] mb-[4.444vh]'>
                    <p className={`${commonLabelStyles}`}>
                        Course Name
                    </p>
                    <Input

                    />
                </div>
                <div className='flex justify-between mb-[4.444vh] '>
                    <div className='w-[33vw]'>
                        <p className={`${commonLabelStyles}`}>Course Description</p>
                        <TextArea />
                    </div>
                    <div className='w-[33vw]'>
                        <p>Course Summary</p>
                        <TextArea />
                    </div>
                </div>
                <div className='flex justify-between mb-[4.444vh] '>
                    <div className='w-[33vw]'>
                        <p className={`${commonLabelStyles}`}>About the Course</p>
                        <TextArea />
                    </div>
                    <div className='w-[33vw]'>
                        <p className={`${commonLabelStyles}`}>Course Highlights</p>
                        <TextArea />
                    </div>
                </div>
                <p className={`${commonLabelStyles}`}>FAQ</p>
                <div className='mb-[4.444vh] border border-2 rounded-md p-[4.444vh] flex flex-col justify-center'>
                    <div className='mb-[2.222vh]'>
                        <p className={`${commonLabelStyles}`}>Question :</p>
                        <Input />
                    </div>
                    <div>
                        <p className={`${commonLabelStyles}`}>Answer :</p>
                        <Input />
                    </div>
                    <div className='flex justify-end gap-2  px-[1.5vw] pt-[1.5vw] '>
                        <div>
                            <Button title="Add" className='py-[0.5vw] px-[1vw] bg-gradient rounded-md text-white' />
                        </div>
                        <div>
                            <Button title="Edit" className='py-[0.5vw] px-[1vw] bg-slate-500 rounded-md text-white' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='px-[1.5vw] pt-[1.5vw] '>
                        <p>Organisation</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default CourseFormLanding
