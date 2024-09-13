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
    selectedMstream, 
        setSelectedMstream,
  } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);

  const searchStreamList = streamList?.filter((stream) =>
    stream.name.toLowerCase().includes(streamSearchQuery.toLowerCase())
  );
  const renderCheckbox = (item) => (
    <Checkbox
      key={item.id}
      id={item.id}
      label={item.name || item.short_form}
      checked={selectedStream.includes(item.id) || selectedMstream.includes(item.id)}
      onChange={() =>
        {
          if(item?.qualification_type_name=== "Degree"){
            handleCounsellorCommonFilter(
          item.id,
          selectedStream,
          setSelectedStream,
          streamList,
          "d_stream_id"
        )

          }else{
            handleCounsellorCommonFilter(
              item.id,
              selectedMstream,
              setSelectedMstream,
              streamList,
              "m_stream_id"
            )
          }
          
         }
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
        renderItem={(item) => renderCheckbox(item)}
      />
      </>
      )}
    </div>
  );
};

export default StreamFilter;
