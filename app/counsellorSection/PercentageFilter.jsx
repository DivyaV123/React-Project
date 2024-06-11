import React, { useState, useContext } from "react";
import RadioButton from "@/components/commonComponents/radioButton/RadioButton";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";

const PercentageFilter = () => {
  const { filteringData, setFilteringData, handleCommonFilter,fromPercentage, setFromPercentage,
    toPercentage, setToPercentage,selectedPercentage, setSelectedPercentage
   } =
    useContext(GlobalContext);

  const [errorMessage, setErrorMessage] = useState("");
  const percentageType = ["Lessthansixty", "Throughoutsixty"];

  const validateFrom = (value) => {
    if (isNaN(value) || value < 0 || value > 100) {
      return "From value should be between 0 and 100";
    }
    return "";
  };

  const validateTo = (value) => {
    if (isNaN(value) || value < 0 || value > 100) {
      return "To value should be between 0 and 100";
    } else if (fromPercentage >= value) {
      if (value !== "") {
        return "To value should be greater than From value";
      }
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
    if (validateFrom(fromPercentage) === '' && (validateTo(toPercentage) === '' || toPercentage === '')) {
      const percentageRange = toPercentage !== '' ? [fromPercentage, toPercentage] : [fromPercentage];
      handleCommonFilter(-1, [], setFilteringData, percentageRange, 'percentage');
    } else {
      setErrorMessage('Please enter valid percentage values');
    }
  };

  const handleRadioChange = (index) => {
    setSelectedPercentage(index);
    setFromPercentage("");
    setToPercentage("");
    const selectedValue = percentageType[index].toLowerCase();
    setFilteringData(prevFilteringData => ({
      ...prevFilteringData,
      percentage: [selectedValue]
    }));
  };

  return (
    <div className="px-[1.875vw] py-[2.778vh] timePeriod">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Percentage
        </p>
        <img src="../../down.svg" />
      </div>
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
        <img src="../../checked.svg" onClick={handleApplyFilter} className="applyFilterButton cursor-pointer w-[1.875vw] h-[3.333vh]"/>
      </div>
      {errorMessage && (
        <div className="pb-[3.111vh]">
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
    </div>
  );
};

export default PercentageFilter;
