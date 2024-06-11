'use client'
import React, { useState, useContext } from 'react';
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import ExpandableList from '../../components/commonComponents/ExpandableList/ExpandableList';
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";

const StreamFilter = ({ streamList }) => {
    const { handleCommonFilter,selectedStream, setSelectedStream } = useContext(GlobalContext);
    const [searchQuery, setSearchQuery] = useState("");
const searchStreamList=streamList?.filter((degree) =>
    degree.toLowerCase().includes(searchQuery.toLowerCase())
  );
    const renderCheckbox = (item, index) => (
        <Checkbox
            key={index}
            id={index}
            label={item}
            checked={selectedStream.includes(index)}
            onChange={() => handleCommonFilter(index, selectedStream, setSelectedStream, searchStreamList, 'stream')}
        />
    );

    return (
        <div className="px-[1.875vw] pt-[2.778vh]">
            <div className="flex justify-between pb-[1.111vh]">
                <p className="text-[0.938vw] text-[#002248] font-semibold">Stream</p>
                <img src="../../down.svg" />
            </div>
            <div className="search-container pb-[1.111vh]">
            <input
          type="text"
          placeholder="Search..."
          className="text-[0.781vw]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
                <div className="search-icon"></div>
            </div>
            <ExpandableList
                items={searchStreamList}
                renderItem={(item, index) => renderCheckbox(item, index)}
            />
        </div>
    );
}

export default StreamFilter;
