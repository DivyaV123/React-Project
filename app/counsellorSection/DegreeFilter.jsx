import React, { useState, useContext } from 'react';
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";

const DegreeFilter = ({ degreeList }) => {
    const { filteringData, setFilteringData, handleCommonFilter } = useContext(GlobalContext);
    const [selectedDegrees, setSelectedDegrees] = useState([]);



    return (
        <div className="px-[1.875vw] pt-[2.778vh]">
            <div className="flex justify-between pb-[1.111vh]">
                <p className="text-[0.938vw] text-[#002248] font-semibold">
                    Degree/Masters
                </p>
                <img src="../../down.svg" />
            </div>
            <div className="search-container pb-[1.111vh]">
                <input type="text" placeholder="search..." className="text-[0.781vw]" />
                <div class="search-icon"></div>
            </div>
            <>
                {degreeList?.map((item, index) => (
                    <Checkbox
                        key={index}
                        id={index}
                        label={item}
                        checked={selectedDegrees.includes(index)}
                        onChange={() => handleCommonFilter(index, selectedDegrees, setSelectedDegrees, degreeList,'digree')}
                    />
                ))} 
            </>
        </div>
    )
}

export default DegreeFilter;
