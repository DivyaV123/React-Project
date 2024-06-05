'use client'
import React, { useState, useContext, useEffect } from 'react'
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllCitiesQuery } from '@/redux/queries/getAllCities';
const CityFilter = ({ selectedState }) => {
    const [selectedCity, setSelectedCity] = useState([]);
    const { filteringData, setFilteringData, handleCommonFilter, ststeSelected } = useContext(GlobalContext);
    const { data: cityData, error, isLoading, refetch } = useGetAllCitiesQuery(ststeSelected);
    useEffect(() => {
        refetch()
    }, [ststeSelected])

    return (
        <div className="px-[1.875vw] pt-[2.778vh]">
            <div className="flex justify-between pb-[1.111vh]">
                <p className="text-[0.938vw] text-[#002248] font-semibold">
                    City
                </p>
                <img src="../../down.svg" />
            </div>
            <div className="search-container pb-[1.111vh]">
                <input type="text" placeholder="search..." className="text-[0.781vw]" />
                <div class="search-icon"></div>
            </div>
            <>
                {cityData?.response.map((item, index) => (
                    <Checkbox
                        key={index}
                        id={index}
                        label={item}
                        checked={item.checked}
                        onChange={() =>
                            handleCommonFilter(index, selectedCity, setSelectedCity, cityData.response, 'city')
                        }
                    />
                ))}
            </>
        </div>
    )
}

export default CityFilter