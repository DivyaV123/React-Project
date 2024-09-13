import React, { useState, useContext } from "react";
import "./CounserllorFilters.scss";
import ExpandableList from "@/components/commonComponents/ExpandableList/ExpandableList";
import { GlobalContext } from "@/components/Context/GlobalContext";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
const BranchFilter = ({ BranchList }) => {
  const {
    handleCounsellorCommonFilter,
    selectedBranchFilter,
    setSelectedBranchFilter,
    yearSearchQuery,
    setYearSearchQuery,
  } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const searchBranchList = BranchList?.filter((branch) => branch.name.toLowerCase().includes(yearSearchQuery.toLowerCase()))
  const renderBranchCheckbox = (item, index, selected, setSelected, items) => (
    <Checkbox
      key={item.id}
      id={item.id}
      label={item.name}
      checked={selected?.includes(item.id)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item.id,
          selected,
          setSelected,
          items,
          "stud_branch_id"
        )
      }
    />
  );
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] mobile:text-[3.938vw] font-semibold">
          Branch
        </p>
        <img
          src={isExpanded ? "../../icon_up.svg" : "../../icon_down.svg"}
          onClick={toggleExpand}
          className="cursor-pointer"
        />
      </div>
      {isExpanded && (
        <>
          <div className="search-container pb-[1.111vh]">
            <input
              type="text"
              placeholder="Search..."
              className="text-[0.781vw]"
              value={yearSearchQuery}
              onChange={(e) => setYearSearchQuery(e.target.value)}
            />
            <div className="search-icon"></div>
          </div>
          <ExpandableList
            items={searchBranchList}
            renderItem={(item, index) =>
              renderBranchCheckbox(
                item,
                index,
                selectedBranchFilter,
                setSelectedBranchFilter,
                BranchList
              )
            }
          />
        </>
      )}
    </>
  );
};

export default BranchFilter;
