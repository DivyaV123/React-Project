'use client'
import React, { useState, useEffect, useRef } from 'react';
import Svg from '../Svg/Svg';
import { svgicons } from '@/components/assets/icons/svgassets';

function Dropdown({
    sectionStyle = '',
    name = '',
    value = [],
    onChange,
    placeholder = 'Select an option',
    iconPath = '',
    onBlur,
    inputStyle = '',
    iconStyle = '',
    options = [],
    disabled = false,
    multi = false
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        let initialSelectedOptions = [];
        if (multi) {
            initialSelectedOptions = options.filter(option => value.includes(option.value));
        } else {
            const initialSelectedOption = options.find(option => option.value === value);
            initialSelectedOptions = initialSelectedOption ? [initialSelectedOption] : [];
        }

        const initialSelectedValues = initialSelectedOptions.map(option => option.value);
        const currentSelectedValues = selectedOptions.map(option => option.value);

        const hasChanged = 
            initialSelectedValues.length !== currentSelectedValues.length ||
            initialSelectedValues.some((val, index) => val !== currentSelectedValues[index]);

        if (hasChanged) {
            setSelectedOptions(initialSelectedOptions);
        }
    }, [value, options, multi]);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelect = (option) => {
        if (multi) {
            const newSelectedOptions = selectedOptions.some(selected => selected.value === option.value)
                ? selectedOptions.filter(selected => selected.value !== option.value)
                : [...selectedOptions, option];
            setSelectedOptions(newSelectedOptions);
            onChange({ target: { name, value: newSelectedOptions.map(opt => opt.value), options: newSelectedOptions } });
        } else {
            setSelectedOptions([option]);
            onChange({ target: { name, value: option.value, option: option } });
            setIsOpen(false);
        }
    };

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    const renderSelectedOptions = () => {
        if (selectedOptions.length > 0) {
            if (multi) {
                const firstOptionLabel = selectedOptions[0].label;
                const selectedCount = selectedOptions.length - 1;
                if (selectedCount > 0) {
                    return `${firstOptionLabel} +${selectedCount} more`;
                } else {
                    return firstOptionLabel;
                }
            } else {
                return selectedOptions[0].label;
            }
        } else {
            return placeholder;
        }
    };

    return (
        <section className={`${sectionStyle} relative h-auto`} ref={dropdownRef}>
            {iconPath &&
                <img src={iconPath} alt="icon" className={`${iconStyle} absolute left-3 top-1/2 transform -translate-y-1/2 w-[2.778vh] h-[2.778vh]`} />
            }
            <div
                className={`relative ${inputStyle} w-full ${iconPath ? 'py-[1.25vh] px-[0.938vw] pl-[2.6vw]' : 'py-[1.25vh] px-[0.938vw] pl-[1.25vw]'} border border-[#D9D9D9] rounded cursor-pointer ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                onClick={handleToggle}
                onBlur={onBlur}
                tabIndex={0} // To make the div focusable
            >
                {renderSelectedOptions()}
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
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-[35vh] overflow-y-scroll myscrollbar ">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`py-[1.25vh] px-[0.938vw] cursor-pointer hover:bg-gray-200 ${selectedOptions.some(selected => selected.value === option.value) ? 'bg-gray-300' : ''}`}
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
