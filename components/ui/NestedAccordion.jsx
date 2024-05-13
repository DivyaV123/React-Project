import React, { useState } from 'react';
import styles from './Accordion.module.css'; // Import CSS module
import Svg from '../commonComponents/Svg/Svg';
import { svgicons } from '../assets/icons/svgassets';

function NestedAccordion({ data, page, parentAccordianStyle }) {
    const [activeSections, setActiveSections] = useState([]);
    const [accordianArrow, setAccordianArrow] = useState([]);

    const handleClick = (index) => {
        setActiveSections((prevActiveSections) => {
            if (prevActiveSections.includes(index)) {
                // If section is already active, close it
                return prevActiveSections.filter((activeIndex) => activeIndex !== index);
            } else {
                // If section is not active, open it
                return [...prevActiveSections, index];
            }
        });
        setAccordianArrow((prevActiveSections) => {
            if (prevActiveSections.includes(index)) {
                // If section is already active, close it
                return prevActiveSections.filter((activeIndex) => activeIndex !== index);
            } else {
                // If section is not active, open it
                return [...prevActiveSections, index];
            }
        });
    };

    const handleSubsectionClick = (e) => {
        e.stopPropagation();
        const subsectionIndex = e.target.dataset.subsection;
        setActiveSections((prevActiveSections) => {
            if (!prevActiveSections.includes(subsectionIndex)) {
                // If the subsection is not active, open it
                return [...prevActiveSections, subsectionIndex];
            } else {
                // If the subsection is active, toggle its state
                return prevActiveSections.filter((activeIndex) => activeIndex !== subsectionIndex);
            }
        });
        setAccordianArrow((prevActiveSections) => {
            if (!prevActiveSections.includes(subsectionIndex)) {
                // If the subsection is not active, open it
                return [...prevActiveSections, subsectionIndex];
            } else {
                // If the subsection is active, toggle its state
                return prevActiveSections.filter((activeIndex) => activeIndex !== subsectionIndex);
            }
        });
    };

    const renderContent = (content, sectionIndex) => {
        if (Array.isArray(content)) {
            return content.map((item, index) => {
                if (typeof item === 'object') {
                    // Render subsection
                    const subsectionKey = Object.keys(item)[0];
                    const subsectionContent = item[subsectionKey];
                    const subsectionIndex = `${sectionIndex}-${index}`;
                    return (
                        <div key={subsectionIndex} onClick={handleSubsectionClick}>
                            <button
                                className={page === 'course' ? `${styles.accordion} flex` : ''}
                                data-subsection={subsectionIndex}
                            >
                                {(accordianArrow.includes(subsectionIndex) && page === 'course') ? (
                                    <Svg
                                        className='mr-2 p-[1px] mt-[4px]'
                                        width={svgicons.accordianArrowDown[0]}
                                        height={svgicons.accordianArrowDown[1]}
                                        viewBox={svgicons.accordianArrowDown[2]}
                                        icon={svgicons.accordianArrowDown[3]}
                                        color={svgicons.accordianArrowDown[4]}
                                    />
                                ) : (
                                    <Svg
                                        className='mr-2 p-[1px] mt-[4px]'
                                        width={svgicons.accordianArrowSide[0]}
                                        height={svgicons.accordianArrowSide[1]}
                                        viewBox={svgicons.accordianArrowSide[2]}
                                        icon={svgicons.accordianArrowSide[3]}
                                        color={svgicons.accordianArrowSide[4]}
                                    />
                                )}
                                {subsectionKey}

                            </button>
                            <div className={`${styles.panel} ${activeSections.includes(subsectionIndex) ? styles.active : ''}`}>
                                {renderContent(subsectionContent, subsectionIndex)}
                            </div>
                        </div >
                    );
                } else {
                    // Render string content
                    return (
                        <>
                            {item !== "" && (
                                <article className='flex justify-between p-3'>
                                    {page === 'course' ?
                                        <>
                                            <h1 className='flex'>
                                                <span>
                                                    <Svg
                                                        width={svgicons.courseVideoIcon[0]}
                                                        height={svgicons.courseVideoIcon[1]}
                                                        viewBox={svgicons.courseVideoIcon[2]}
                                                        icon={svgicons.courseVideoIcon[3]}
                                                        color={svgicons.courseVideoIcon[4]}
                                                    />
                                                </span>
                                                <span className='p-1 text-dark-gray font medium text-[0.875rem]'>{item}</span>
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
                                                </span><span className='p-1 text-dark-gray font medium text-[0.875rem]'>Preview</span><span className='p-1 text-dark-gray font medium text-[0.875rem]'>4 min</span>
                                            </h1>
                                        </> :
                                        <span className='p-1 text-dark-gray font medium text-[0.875rem]'>{item}</span>
                                    }
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
            {data.map((section, index) => (
                <div key={index} className={page === 'course' ? 'border border-[#EBEBEB] my-1.5 rounded-md' : `${parentAccordianStyle}`}>
                    <button className={page === 'course'? `${styles.accordion} flex` : 'flex'} onClick={() => handleClick(index)}>
                        {accordianArrow.includes(index) ? (
                            <Svg
                                className='mr-2 p-[1px] mt-[2px]'
                                width={svgicons.accordianArrowDown[0]}
                                height={svgicons.accordianArrowDown[1]}
                                viewBox={svgicons.accordianArrowDown[2]}
                                icon={svgicons.accordianArrowDown[3]}
                                color={svgicons.accordianArrowDown[4]}
                            />
                        ) : (
                            <Svg
                                className='mr-2 p-[1px] mt-[2px]'
                                width={svgicons.accordianArrowSide[0]}
                                height={svgicons.accordianArrowSide[1]}
                                viewBox={svgicons.accordianArrowSide[2]}
                                icon={svgicons.accordianArrowSide[3]}
                                color={svgicons.accordianArrowSide[4]}
                            />
                        )}
                        {Object.keys(section)[0]}
                    </button>
                    <div className={`${styles.panel} ${activeSections.includes(index) ? styles.active : ''}`}>
                        {renderContent(Object.values(section)[0], index)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NestedAccordion;
