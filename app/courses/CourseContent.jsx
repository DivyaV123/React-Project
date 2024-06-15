'use client'
import React, { useContext, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import CoursePageContainer from './CoursePageContainer';
import Svg from '@/components/commonComponents/Svg/Svg';
import { svgicons } from '@/components/assets/icons/svgassets';
import NestedAccordion from '@/components/ui/NestedAccordion';

function CourseContent({ courseDetails }) {
    const courseContentdatas = [
        {
            "Manual Testing": [
                {
                    Softwaredevelopmentlifecycle: [
                        'WaterFallmodel', 'Spiral model', 'Prototype Model', 'Hybrid Model', 'Performance test',
                    ]
                },
                { Softwaredevelopmentlifecycle1: [''] }, { Softwaredevelopmentlifecycle2: [''] }
            ]
        },
        { "Manual Testing": [''] },
        { "Manual Testing": [''] },
        { "Manual Testing": [''] },
        { "Manual Testing": [''] }
    ];

    const transformData = (subjects) => {
        return subjects?.flatMap(subject => {
            return subject?.chapters?.map(chapter => {
                return {
                    [chapter.chapterTitle]: chapter?.topics.map(topic => {
                        return {
                            [topic.topicTitle]: topic?.subTopics?.map(subTopic => subTopic?.subTopicTitle)
                        };
                    })
                };
            });
        });
    };

    const courseContentdata = transformData(courseDetails?.data?.subjects)

    const [openIndex, setOpenIndex] = useState(-1);

    const handleAccordionToggle = (index) => {
        setOpenIndex(index === openIndex ? '-1' : index);
    };

    const renderAccordions = (data, parentKey = '', isParent = true) => {
        if (!Array.isArray(data)) {
            return null; // Return null if data is not an array
        }
        return data?.map((item, index) => {
            const key = parentKey ? `${parentKey}-accordion-${index}` : `accordion-${index}`;
            if (typeof item === 'object' && !Array.isArray(item)) {
                const [keyName] = Object.keys(item);
                if (isParent) {
                    return (
                        <AccordionItem className='border-none' key={key} value={key}>
                            <AccordionTrigger onClick={() => handleAccordionToggle(index)} className='bg-[#FFFCF9] m-1 font-medium'>
                                <article className='flex justify-between w-full'>
                                    <h1>
                                        {keyName}
                                    </h1>
                                    <h1 className='pr-2'>4 Modules | 32 Min</h1>
                                </article>
                            </AccordionTrigger>
                            <AccordionContent>
                                {renderAccordions(Object.values(item)[0], key, false)}
                            </AccordionContent>
                        </AccordionItem>
                    );
                } else {
                    return renderAccordions(Object.values(item)[0], key, false);
                }
            } else if (Array.isArray(item)) {
                return item.map((subItem, subIndex) => {
                    const subKey = `${key}-sub-${subIndex}`;
                    return (
                        <AccordionItem key={subKey} value={subKey}>
                            <AccordionTrigger>{subItem}</AccordionTrigger>
                        </AccordionItem>
                    );
                });
            } else if (typeof item === 'string') {
                return (
                    <AccordionContent>
                        {item !== "" && (
                            <article className='flex justify-between'>
                                <h1 className='flex'>
                                    <span>
                                        <Svg
                                            width={svgicons.courseVideoIcon[0]}
                                            height={svgicons.courseVideoIcon[1]}
                                            viewBox={svgicons.courseVideoIcon[2]}
                                            icon={svgicons.courseVideoIcon[3]}
                                            color={svgicons.courseVideoIcon[4]}
                                        />
                                    </span><span className='p-1'>{item}</span>
                                </h1>
                                <h1 className='flex'>
                                    <span>
                                        <Svg
                                            width={svgicons.courseVideoIcon[0]}
                                            height={svgicons.courseVideoIcon[1]}
                                            viewBox={svgicons.courseVideoIcon[2]}
                                            icon={svgicons.courseVideoIcon[3]}
                                            color={svgicons.courseVideoIcon[4]}
                                        />
                                    </span><span className='p-1'>Preview</span><span className='p-1'>4 min</span>
                                </h1>
                            </article>
                        )}
                    </AccordionContent>
                );
            } else {
                return null; // Handle other types of data if necessary
            }
        });
    };

    return (
        <CoursePageContainer className=''>
            <header className='text-[1.875vw] font-bold pt-[2.778vh] pr-[1.563vw] pb-[2.778vh]'>
                Course Content
            </header>
            <article className='my-[2.778vh] mr-[1.563vw]'>
                <NestedAccordion data={courseContentdata}
                    page='course' />
            </article>
        </CoursePageContainer>
    )
}
export default CourseContent