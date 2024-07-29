import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import { GlobalContext } from "@/components/Context/GlobalContext";

const BranchTypeFilter = () => {
  const { handleCounsellorCommonFilter, selectedBranchType, setSelectedBranchType } =
    useContext(GlobalContext);
    const [isExpanded, setIsExpanded] = useState(true);
  const branchType = ["Jspiders", "Qspiders", "Pyspiders", "Prospiders"];

  const renderCheckbox = (item) => (
    <Checkbox
      key={item}
      id={item}  
      label={item}
      checked={selectedBranchType.includes(item)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item,  
          selectedBranchType,
          setSelectedBranchType,
          branchType, 
          "branchType"
        )
      }
    />
  );
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>  
      <div className="flex justify-between pb-[1.111vh] mt-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold mobile:text-[3.938vw]">
          BranchType
        </p>
        <img
          src={isExpanded ? "../../icon_up.svg" : "../../icon_down.svg"}
          onClick={toggleExpand}
          className="cursor-pointer"
        />
      </div>
      {isExpanded && (
      <>
        {branchType?.map((item) => renderCheckbox(item))}
      </>
      )}
    </>
  );
};

export default BranchTypeFilter;
