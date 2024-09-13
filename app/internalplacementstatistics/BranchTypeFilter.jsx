import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllOrganisationQuery } from "@/redux/queries/getAllOrganisation";

const BranchTypeFilter = () => {
  const { handleCounsellorCommonFilter, selectedBranchType, setSelectedBranchType } =
    useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const { data: orgData } = useGetAllOrganisationQuery();
  const branchType = orgData?.results
    ?.filter((org) => org.name !== "")
    ?.map((org) => ({
      name: org.name,
      id: org.id,
    }));
  const renderCheckbox = (item) => (
    <Checkbox
      key={item.id}
      id={item.id}
      label={item.name}
      checked={selectedBranchType.includes(item.id)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item.id,
          selectedBranchType,
          setSelectedBranchType,
          branchType,
          "stud_org_id"
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
