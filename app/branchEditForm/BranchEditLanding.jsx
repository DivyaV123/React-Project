"use client";
import React, { useState, useEffect } from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import WebLayout from "@/components/commonComponents/webLayout/WebLayout";
import BranchDropDowns from "./BranchDropDowns";

function BranchEditLanding() {
  const [branchDropDownDetails, setBranchDropDownDetails] = useState();
  const [isSelectedBranchEdit, setIsSelectedBranchEdit] = useState(false);
  return (
    <WebLayout>
      <MaxWebWidth articalStyling="p-8">
        <div className="rounded-xl border-gray-300">
          <BranchDropDowns
            setBranchDropDownDetails={setBranchDropDownDetails}
            setIsSelectedBranchEdit={setIsSelectedBranchEdit}
          />

          {isSelectedBranchEdit && (
            <h1
              onClick={() => {
                console.log({ branchDropDownDetails });
              }}
            >
              Your Form
            </h1>
          )}
        </div>
      </MaxWebWidth>
    </WebLayout>
  );
}

export default BranchEditLanding;
