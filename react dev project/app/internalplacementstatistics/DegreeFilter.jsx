import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import ExpandableList from "../../components/commonComponents/ExpandableList/ExpandableList";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";

const DegreeFilter = ({ degreeList }) => {
  const {
    handleCounsellorCommonFilter,
    selectedDegrees,
    setSelectedDegrees,
    degreeSearchQuery,
    setDegreeSearchQuery,
    selectedMasters,
    setSelectedMasters,
  } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);

  // Filter the degree list based on the search query
  const searchDegreeList = degreeList?.filter((degree) =>
    degree.name.toLowerCase().includes(degreeSearchQuery.toLowerCase())
  );

  const renderCheckbox = (item) => (
    <Checkbox
      key={item.id}
      id={item.id} // Use degree ID as the id
      label={item.name || item.short_form} // Use degree name as the label
      checked={
        selectedDegrees.includes(item.id) || selectedMasters.includes(item.id)
      }
      onChange={() => {
        if (item?.qualification_type_name === "Degree") {
          handleCounsellorCommonFilter(
            item.id, // Pass the degree ID instead of name
            selectedDegrees,
            setSelectedDegrees,
            degreeList, // Use the full degreeList for response

            "degree_id"
          );
        } else {
          handleCounsellorCommonFilter(
            item.id,
            selectedMasters,
            setSelectedMasters,
            degreeList, 

            "masters_id"
          );
        }
      }}
    />
  );

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-[1.875vw] pt-[2.778vh] mobile:px-[5.875vw] mobile:pt-[1.778vh] thinCloseBorder">
      <div className="flex justify-between pb-[1.111vh] mobile:hidden">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Degree/Masters
        </p>
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
              value={degreeSearchQuery}
              onChange={(e) => setDegreeSearchQuery(e.target.value)}
            />
            <div className="search-icon"></div>
          </div>
          <ExpandableList
            items={searchDegreeList}
            renderItem={(item) => renderCheckbox(item)}
          />
        </>
      )}
    </div>
  );
};

export default DegreeFilter;
