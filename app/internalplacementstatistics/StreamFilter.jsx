"use client";
import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import ExpandableList from "../../components/commonComponents/ExpandableList/ExpandableList";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";

const StreamFilter = ({ streamList }) => {
  const {
    handleCounsellorCommonFilter,
    selectedStream,
    setSelectedStream,
    streamSearchQuery,
    setStreamSearchQuery,
  } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const searchStreamList = streamList?.filter((degree) =>
    degree.toLowerCase().includes(streamSearchQuery.toLowerCase())
  );
  const renderCheckbox = (item, index) => (
    <Checkbox
      key={index}
      id={item}
      label={item}
      checked={selectedStream.includes(item)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item,
          selectedStream,
          setSelectedStream,
          streamList,
          "stream"
        )
      }
    />
  );
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="px-[1.875vw] pt-[2.778vh] mobile:px-[5.875vw] mobile:pt-[1.778vh] thinCloseBorder">
      <div className="flex justify-between pb-[1.111vh] mobile:hidden">
        <p className="text-[0.938vw] text-[#002248] font-semibold">Stream</p>
        <img
          src={isExpanded ? "../../icon_up.svg" : "../../icon_down.svg"}
          onClick={toggleExpand}
          className="cursor-pointer "
        />
      </div>
      {isExpanded && (
      <>
      <div className="search-container pb-[1.111vh]">
        <input
          type="text"
          placeholder="Search..."
          className="text-[0.781vw]"
          value={streamSearchQuery}
          onChange={(e) => setStreamSearchQuery(e.target.value)}
        />
        <div className="search-icon"></div>
      </div>
      <ExpandableList
        items={searchStreamList}
        renderItem={(item, index) => renderCheckbox(item, index)}
      />
      </>
      )}
    </div>
  );
};

export default StreamFilter;
