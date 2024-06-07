'use client'
import React, { useState, useContext, useEffect } from 'react';
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import ExpandableList from './ExpandableList';
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllCitiesQuery } from '@/redux/queries/getAllCities';

const CityFilter = ({ selectedState }) => {
    const [selectedCity, setSelectedCity] = useState([]);
    const { handleCommonFilter, ststeSelected } = useContext(GlobalContext);
    const { data: cityData, refetch } = useGetAllCitiesQuery(ststeSelected);
    const cityList = cityData?.response.filter(city => city !== "");
    useEffect(() => {
        refetch();
    }, [ststeSelected, refetch]);

    const renderCheckbox = (item, index) => (
        <Checkbox
            key={index}
            id={index}
            label={item}
            checked={selectedCity.includes(index)}
            onChange={() => handleCommonFilter(index, selectedCity, setSelectedCity, cityList, 'city')}
        />
    );

    return (
        <div className="px-[1.875vw] pt-[2.778vh]">
            <div className="flex justify-between pb-[1.111vh]">
                <p className="text-[0.938vw] text-[#002248] font-semibold">City</p>
                <img src="../../down.svg" />
            </div>
            <div className="search-container pb-[1.111vh]">
                <input type="text" placeholder="search..." className="text-[0.781vw]" />
                <div className="search-icon"></div>
            </div>
            <ExpandableList
                items={cityList}
                renderItem={(item, index) => renderCheckbox(item, index)}
            />
        </div>
    );
}

export default CityFilter;
