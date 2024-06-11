import React, { useState,useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import { GlobalContext } from "@/components/Context/GlobalContext";
const BranchTypeFilter = () => {
  const {handleCommonFilter ,selectedBranchType,setSelectedBranchType} =
    useContext(GlobalContext);
  const branchType = ["Jspiders", "Qspiders","Pyspiders","Prospiders"];
  return (
    <>  
      <div className="flex justify-between pb-[1.111vh] mt-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          BranchType
        </p>
        <img src="../../down.svg" />
      </div>
      <>
        {branchType?.map((item, index) => (
          <Checkbox
            key={index}
            id={index}
            label={item}
            checked={selectedBranchType.includes(index)}
            onChange={() =>
              handleCommonFilter(
                index,
                selectedBranchType,
                setSelectedBranchType,
                branchType,
                "branchType"
              )
            }
          />
        ))}
      </>
    </>
  );
};

export default BranchTypeFilter;
