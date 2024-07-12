import React, { useState } from 'react';
import Svg from '../Svg/Svg';
import { svgicons } from '@/components/assets/icons/svgassets';

function Dropdown({
    sectionStyle = '',
    name = '',
    value,
    onChange,
    placeholder = 'Select an option',
    iconPath = '',
    onBlur,
    inputStyle = '',
    iconStyle = '',
    options = [],
    disabled = false
}) {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(option => option.value === value);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelect = (option) => {
        onChange({ target: { name, value: option.value, option: option } });
        setIsOpen(false);
    };

    return (
        <section className={`${sectionStyle} relative h-[2.969vw]`}>
            {iconPath &&
                <img src={iconPath} alt="icon" className={`${iconStyle} absolute left-3 top-1/2 transform -translate-y-1/2 w-[2.778vh] h-[2.778vh]`} />
            }
            <div
                className={`relative ${inputStyle} w-full ${iconPath ? 'py-[1.25vh] px-[0.938vw] pl-[2.6vw]' : 'py-[1.25vh] px-[0.938vw] pl-[1.25vw]'} border border-gray-300 rounded cursor-pointer ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                onClick={handleToggle}
                onBlur={onBlur}
                tabIndex={0} // To make the div focusable
            >
                {selectedOption ? selectedOption.label : placeholder}
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <Svg
                        className=''
                        width={svgicons.accordianArrowDown[0]}
                        height={svgicons.accordianArrowDown[1]}
                        viewBox={svgicons.accordianArrowDown[2]}
                        icon={svgicons.accordianArrowDown[3]}
                        color={svgicons.accordianArrowDown[4]}
                    />
                </span>
            </div>
            {isOpen && !disabled && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="py-[1.25vh] px-[0.938vw] cursor-pointer hover:bg-gray-200"
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Dropdown;
