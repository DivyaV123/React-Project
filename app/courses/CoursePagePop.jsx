import Button from '@/components/commonComponents/button/Button';
import React, { useEffect, useState } from 'react'
import "./CourseLanding.scss";

function CoursePagePop({courseDetails}) {
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        // Adjust the value (in pixels) based on how far down you want to scroll before showing the div
        if (window.scrollY > 90) {
            setShowDiv(true);
        } else {
            setShowDiv(false);
        }
    };

    return (
        <article id="hiddenDiv" style={{ visibility: showDiv ? 'visible' : 'hidden' }} className='bg-[#FEF2E7] w-[100%] flex justify-between align-item-center   px-[4.1667vw] fixed top-[7.5vw]'>
            <p className='text-[1.875vw] font-bold leading-[36px] py-[1.15vw]'>
                {courseDetails?.courseName}
            </p>
            <div className='flex justify-cnter py-[1.15vw]'>
                <div className='flex gap-3'>
                    <Button
                        title='Enroll For Demo Class'
                        className='EnrollButton text-[1.25vw] font-semibold py-[1.389vh] px-[1.875vw]'
                    />
                    {/* <Button
                        title="Demo class"
                        className='border border-orange-500 text-orange-500 pt-[0.52vw] pr-[1.25vw] pb-[0.52vw] pl-[1.25vw] rounded '
                    /> */}
                </div>
            </div>
        </article>
    )
}

export default CoursePagePop