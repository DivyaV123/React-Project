import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import { GlobalContext } from "@/components/Context/GlobalContext";

const BranchTypeFilter = () => {
  const { handleCounsellorCommonFilter, selectedBranchType, setSelectedBranchType } =
    useContext(GlobalContext);
  const branchType = ["Jspiders", "Qspiders", "Pyspiders", "Prospiders"];

  const renderCheckbox = (item) => (
    <Checkbox
      key={item}
      id={item}  // Use branch type value as the id
      label={item}
      checked={selectedBranchType.includes(item)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item,  // Pass the branch type value instead of index
          selectedBranchType,
          setSelectedBranchType,
          branchType,  // Use the full branchType array for response
          "branchType"
        )
      }
    />
  );

  return (
    <>  
      <div className="flex justify-between pb-[1.111vh] mt-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          BranchType
        </p>
        <img src="../../down.svg" />
      </div>
      <>
        {branchType?.map((item) => renderCheckbox(item))}
      </>
    </>
  );
};

export default BranchTypeFilter;
