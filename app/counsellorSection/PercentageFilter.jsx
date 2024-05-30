'use client'
import React, { useState } from 'react'
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import "./CounserllorFilters.scss";

const PercentageFilter = () => {
    const [yearItems, setYearItems] = useState([
        {
            id: "2023",
            label: "2023",
            checked: false,
        },
        {
            id: "2022",
            label: "2022",
            checked: false,
        },
        {
            id: "2021",
            label: "2021",
            checked: false,
        },
    ]);

    const [branchItems, setBranchItems] = useState([
        {
            id: "basavangudi",
            label: "Basavangudi",
            checked: false,
        },
        {
            id: "btm layout",
            label: "BTM Layout",
            checked: false,
        },
    ]);

    const handleFilterYear = (index) => {
        const newYearItems = yearItems.map((item, idx) => {
            if (idx === index) {
                return {
                    ...item,
                    checked: !item.checked,
                };
            } else {
                return {
                    ...item,
                    checked: false,
                };
            }
        });
        setYearItems(newYearItems);
    };
    const handleFilterBranch = (index) => {
        const newBranchItems = branchItems.map((item, idx) => {
            if (idx === index) {
                return {
                    ...item,
                    checked: !item.checked,
                };
            } else {
                return {
                    ...item,
                    checked: false,
                };
            }
        });
        setBranchItems(newBranchItems);
    };
    return (
        <div className="px-[1.875vw] pt-[2.778vh] timePeriod">
            <div className="flex justify-between pb-[1.111vh]">
                <p className="text-[0.938vw] text-[#002248] font-semibold">
                    Percentage
                </p>
                <img src="../../down.svg" />
            </div>
            <div className="flex  gap-2.5 pb-[3.111vh]">
                <button className="filterButton">From</button>
                <button className="filterButton">To</button>
            </div>
        </div>
    )
}

export default PercentageFilter