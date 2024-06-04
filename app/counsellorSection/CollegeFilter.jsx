'use client'
import React, { useState, useContext, useEffect } from 'react'
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllCollegesQuery } from '@/redux/queries/getAllColleges';
import UniversityFilter from './UniversityFilter';
const CollegeFilter = () => {
    const { filteringData, setFilteringData, handleFilter, handleCommonFilter, universitySelected } = useContext(GlobalContext);
    const [selectedCity, setSelectedCity] = useState([]);
    const { data: collegeData, isLoading, error, refetch } = useGetAllCollegesQuery(universitySelected)
    console.log(collegeData, "collegeData", universitySelected, "universitySelected")

    useEffect(() => {
        refetch();
    }, [universitySelected])


    return (
        <div className="px-[1.875vw] pt-[2.778vh]">
            <div className="flex justify-between pb-[1.111vh]">
                <p className="text-[0.938vw] text-[#002248] font-semibold">
                    College
                </p>
                <img src="../../down.svg" />
            </div>
            <div className="search-container pb-[1.111vh]">
                <input type="text" placeholder="search..." className="text-[0.781vw]" />
                <div class="search-icon"></div>
            </div>
            <>
                {collegeData?.response.map((item, index) => (
                    <Checkbox
                        key={index}
                        id={index}
                        label={item}
                        checked={selectedCity.includes(index)}
                        onChange={() =>
                            handleCommonFilter(index, selectedCity, setSelectedCity, collegeData.response, "college")
                        }
                    />
                ))}
            </>
        </div>
    )
}

export default CollegeFilter