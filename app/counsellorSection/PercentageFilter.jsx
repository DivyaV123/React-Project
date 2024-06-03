'use client'
import React, { useState,useContext } from 'react'
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
const PercentageFilter = () => {
    const { filteringData, setFilteringData ,handleFilter} = useContext(GlobalContext);
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