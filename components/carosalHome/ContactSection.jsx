import React, { useEffect, useState } from 'react'
import Button from '../commonComponents/button/Button'
import Svg from '../commonComponents/Svg/Svg'
import { svgicons } from '../assets/icons/svgassets'
import HiringModal from '@/app/hireFromUs/Modal/HiringModal';

function ContactSection() {
    const [showDiv, setShowDiv] = useState(false);
    const [active, setActive] = useState(false)
    const [activeTab, setActiveTab] = useState('General Enquiries')
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        // Adjust the value (in pixels) based on how far down you want to scroll before showing the div
        if (window.scrollY > 60) {
            setShowDiv(true);
        } else {
            setShowDiv(false);
        }
    };
    const handleCardClick = () => {
        setActive(true);
        setActiveTab('General Enquiries');
    };

    const handleCloseModal = () => {
        setActive(false);
    };
    return (
        <article id="hiddenDiv" style={{ visibility: showDiv ? 'visible' : 'hidden' }} className=' w-[100%] flex justify-center z-10 sticky p-2 bg-white fixed bottom-0'>
            <div className='flex gap-3'>
                <Button
                    onClick={handleCardClick}
                    title={<div className='flex gap-2'>
                        <Svg
                            width={svgicons.phone1Icon[0]}
                            height={svgicons.phone1Icon[1]}
                            viewBox={svgicons.phone1Icon[2]}
                            icon={svgicons.phone1Icon[3]}
                            color={svgicons.phone1Icon[4]}
                        />
                        <span>Request a call back</span>
                    </div>}
                    className='rounded-md border h-[2.656vw] w-[14.219vw] mobile:w-[42.326vw] mobile:h-[3.648vh] border-[#454545] text-[0.75rem] mobile:text-[2.791vw] text-dark-gray'
                />
                {/* <Button
                    title={<div className='flex gap-2'>
                        <Svg
                            width={svgicons.litewhatsappIcon[0]}
                            height={svgicons.litewhatsappIcon[1]}
                            viewBox={svgicons.litewhatsappIcon[2]}
                            icon={svgicons.litewhatsappIcon[3]}
                            color={svgicons.litewhatsappIcon[4]}
                        />
                        <span>Message on Whatsapp</span>
                    </div>}
                    className='w-[15.859vw] h-[2.656vw] rounded-md bg-[#25D366] text-[0.75rem] text-white'
                /> */}
            </div>
            {active && (
                <HiringModal
                    isModalOpen={active}
                    activeTab={activeTab}
                    handleCloseModal={handleCloseModal}
                    setActiveTab={setActiveTab}
                />
            )

            }
        </article>
    )
}

export default ContactSection