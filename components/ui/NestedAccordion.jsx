import React, { useState } from 'react';
import styles from './Accordion.module.css'; // Import CSS module
import Svg from '../commonComponents/Svg/Svg';
import { svgicons } from '../assets/icons/svgassets';

const NestedAccordion = ({ data, page, parentAccordianStyle }) => {
    const [activeSections, setActiveSections] = useState({});
    const [accordianArrow, setAccordianArrow] = useState({});

    const handleClick = (index) => {
        setActiveSections((prevActiveSections) => ({
            ...prevActiveSections,
            [index]: !prevActiveSections[index],
        }));
        setAccordianArrow((prevAccordianArrow) => ({
            ...prevAccordianArrow,
            [index]: !prevAccordianArrow[index],
        }));
    };

    const handleSubsectionClick = (sectionIndex, subsectionIndex) => {
        const combinedIndex = `${sectionIndex}-${subsectionIndex}`;
        setActiveSections((prevActiveSections) => ({
            ...prevActiveSections,
            [combinedIndex]: !prevActiveSections[combinedIndex],
        }));
        setAccordianArrow((prevAccordianArrow) => ({
            ...prevAccordianArrow,
            [combinedIndex]: !prevAccordianArrow[combinedIndex],
        }));
    };

    const renderContent = (content, sectionIndex) => {
        if (Array.isArray(content)) {
            return content.map((item, index) => {
                if (typeof item === 'object' && item !== null) {
                    const subsectionKey = Object.keys(item)[0];
                    const subsectionContent = item[subsectionKey];
                    const subsectionIndex = `${sectionIndex}-${index}`;
                    return (
                        <div key={subsectionIndex} className='my-[0.833vh] ml-[1.875vw]'>
                            <button
                                className={page === 'course' ? `${styles.accordion} flex items-center gap-x-[0.938vw]` : ''}
                                onClick={() => handleSubsectionClick(sectionIndex, index)}
                            >
                                {(accordianArrow[subsectionIndex] && page === 'course') ? (
                                    <Svg
                                        className=''
                                        width={svgicons.accordianArrowDown[0]}
                                        height={svgicons.accordianArrowDown[1]}
                                        viewBox={svgicons.accordianArrowDown[2]}
                                        icon={svgicons.accordianArrowDown[3]}
                                        color={svgicons.accordianArrowDown[4]}
                                    />
                                ) : (
                                    <Svg
                                        className=''
                                        width={svgicons.accordianArrowSide[0]}
                                        height={svgicons.accordianArrowSide[1]}
                                        viewBox={svgicons.accordianArrowSide[2]}
                                        icon={svgicons.accordianArrowSide[3]}
                                        color={svgicons.accordianArrowSide[4]}
                                    />
                                )}
                                <div>
                                    {subsectionKey}
                                </div>
                            </button>
                            <div className={`${styles.panel} ${activeSections[subsectionIndex] ? styles.active : ''}`}>
                                {renderContent(subsectionContent, subsectionIndex)}
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <>
                            {item !== "" && (
                                <article className='flex justify-between pl-[2.813vw] py-[1.667vh] items-center pr-[1.875vw]'>
                                    {page === 'course' ? (
                                        <>
                                            <h1 className='flex items-center gap-x-[0.625vw]'>
                                                <span>
                                                    <Svg
                                                        width={svgicons.courseVideoIcon[0]}
                                                        height={svgicons.courseVideoIcon[1]}
                                                        viewBox={svgicons.courseVideoIcon[2]}
                                                        icon={svgicons.courseVideoIcon[3]}
                                                        color={svgicons.courseVideoIcon[4]}
                                                    />
                                                </span>
                                                <span className='text-dark-gray font-medium text-[1.094vw]'>{item}</span>
                                            </h1>
                                            <h1 className='flex items-center gap-x-[0.625vw]'>
                                                <span>
                                                    <Svg
                                                        width={svgicons.courseVideoIcon[0]}
                                                        height={svgicons.courseVideoIcon[1]}
                                                        viewBox={svgicons.courseVideoIcon[2]}
                                                        icon={svgicons.courseVideoIcon[3]}
                                                        color={svgicons.courseVideoIcon[4]}
                                                    />
                                                </span>
                                                <span className='text-dark-gray font-medium text-[1.094vw]'>Preview</span>
                                                <span className='text-dark-gray font-medium text-[1.094vw]'>4 min</span>
                                            </h1>
                                        </>
                                    ) : (
                                        <span className='text-dark-gray font-medium text-[1.094vw]'>{item}</span>
                                    )}
                                </article>
                            )}
                        </>
                    );
                }
            });
        } else {
            return null;
        }
    };

    return (
        <div>
            {data?.map((section, index) => (
                <div key={index} className={page === 'course' ? 'border border-[#EBEBEB] my-[0.833vh] rounded-md' : `${parentAccordianStyle}`}>
                    <button className={page === 'course' ? `${styles.accordion} flex items-center gap-x-[0.938vw]` : 'flex'} onClick={() => handleClick(index)}>
                        {accordianArrow[index] ? (
                            <Svg
                                className=''
                                width={svgicons.accordianArrowDown[0]}
                                height={svgicons.accordianArrowDown[1]}
                                viewBox={svgicons.accordianArrowDown[2]}
                                icon={svgicons.accordianArrowDown[3]}
                                color={svgicons.accordianArrowDown[4]}
                            />
                        ) : (
                            <Svg
                                className=''
                                width={svgicons.accordianArrowSide[0]}
                                height={svgicons.accordianArrowSide[1]}
                                viewBox={svgicons.accordianArrowSide[2]}
                                icon={svgicons.accordianArrowSide[3]}
                                color={svgicons.accordianArrowSide[4]}
                            />
                        )}
                        <div className='text-[1.25vw]'>
                            {Object.keys(section)[0]}
                        </div>
                    </button>
                    <div className={`${styles.panel} ${activeSections[index] ? styles.active : ''}`}>
                        {renderContent(Object.values(section)[0], index)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NestedAccordion;
