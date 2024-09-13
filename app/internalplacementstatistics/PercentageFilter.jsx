import React, { useState, useContext } from "react";
import RadioButton from "@/components/commonComponents/radioButton/RadioButton";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";

const PercentageFilter = () => {
  const {
    filteringData,
    setFilteredRange,
    handleCounsellorCommonFilter,
    fromPercentage,
    setFromPercentage,
    toPercentage,
    setToPercentage,
    selectedPercentage,
    setSelectedPercentage,
  } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const percentageType = ["Lessthansixty", "Throughoutsixty"];
  const percentageKeys = ["less_than60", "above_60"];

  const validateFrom = (value) => {
    if (isNaN(value) || value < 0 || value > 100) {
      return "From value should be between 0 and 100";
    }
    return "";
  };

  const validateTo = (value) => {
    if (isNaN(value) || value < 0 || value > 100) {
      return "To value should be between 0 and 100";
    } else if (
      fromPercentage !== "" &&
      parseFloat(fromPercentage) >= parseFloat(value)
    ) {
      return "To value should be greater than From value";
    }
    return "";
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFromPercentage(value);
    setErrorMessage(validateFrom(value));
    setSelectedPercentage(null);
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setToPercentage(value);
    setErrorMessage(validateTo(value));
    setSelectedPercentage(null);
  };

  const handleApplyFilter = () => {
    if (
      validateFrom(fromPercentage) === "" &&
      (validateTo(toPercentage) === "" || toPercentage === "")
    ) {
      const percentageRange =
        toPercentage !== "" ? [fromPercentage, toPercentage] : [fromPercentage];
      setFilteredRange((prevFilteringData) => ({
        ...prevFilteringData,
        less_than60: percentageRange[0] || null,
        above_60: percentageRange[1] || null,
      }));
    } else {
      setErrorMessage("Please enter valid percentage values");
    }
  };

  const handleRadioChange = (index) => {
    setSelectedPercentage(index);
    setFromPercentage("");
    setToPercentage("");
    const selectedValue = percentageType[index].toLowerCase();
   
    if(index===0){
      setFilteredRange((prevFilteringData) => ({
        ...prevFilteringData,
        less_than60: true,
        above_60: null,
      }));
    }else{
      setFilteredRange((prevFilteringData) => ({
        ...prevFilteringData,
        less_than60: null,
        above_60: true,
      }));
    }
    
    
  };
  const isApplyDisabled = !(
    fromPercentage !== "" &&
    toPercentage !== "" &&
    parseFloat(fromPercentage) < parseFloat(toPercentage) &&
    errorMessage === ""
  );

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="px-[1.875vw] py-[2.778vh] thinCloseBorder mobile:px-[5.875vw] mobile:pt-[1.778vh]">
      <div className="flex justify-between pb-[1.111vh] mobile:hidden">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Percentage
        </p>
        <img
          src={isExpanded ? "../../icon_up.svg" : "../../icon_down.svg"}
          onClick={toggleExpand}
          className="cursor-pointer "
        />
      </div>
      {isExpanded && (
        <>
          <div className="flex gap-2.5 items-center">
            <input
              type="number"
              placeholder="From"
              autoFocus
              className="filterInput w-[7.75vw] pl-[0.625vw]"
              value={fromPercentage}
              onChange={handleFromChange}
              onBlur={() => setErrorMessage(validateFrom(fromPercentage))}
            />
            <input
              type="number"
              placeholder="To"
              className="filterInput w-[7.75vw] pl-[0.625vw]"
              value={toPercentage}
              onChange={handleToChange}
              onBlur={() => setErrorMessage(validateTo(toPercentage))}
            />
            <img
              src="../../checked.svg"
              onClick={!isApplyDisabled ? handleApplyFilter : null}
              className={`applyFilterButton mobile:w-[5.875vw] cursor-pointer w-[1.875vw] h-[3.333vh] ${
                isApplyDisabled ? "disabled" : ""
              }`}
            />
          </div>
          {errorMessage && (
            <div className="">
              <p className="text-red-500 font-bold text-[0.625vw]">
                {errorMessage}
              </p>
            </div>
          )}
          <div className="py-[2.778vh]">
            {percentageType.map((item, index) => (
              <RadioButton
                key={index}
                id={index}
                label={item}
                checked={selectedPercentage === index}
                onChange={() => handleRadioChange(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PercentageFilter;
