import React, { useState, useContext } from "react";
import RadioButton from "@/components/commonComponents/radioButton/RadioButton";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";

const PercentageFilter = () => {
  const { filteringData, setFilteringData, handleCommonFilter } =
    useContext(GlobalContext);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedPercentage, setSelectedPercentage] = useState(null);
  const percentageType = ["lessthansixty", "throughoutsixty"];

  const validateFrom = (value) => {
    if (isNaN(value) || value < 0 || value > 100) {
      return "From value should be between 0 and 100";
    }
    return "";
  };

  const validateTo = (value) => {
    if (isNaN(value) || value < 0 || value > 100) {
      return "To value should be between 0 and 100";
    } else if (fromValue >= value) {
      if (value !== "") {
        return "To value should be greater than From value";
      }
    }
    return "";
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFromValue(value);
    setErrorMessage(validateFrom(value));
    setSelectedPercentage(null);
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setToValue(value);
    setErrorMessage(validateTo(value));
    setSelectedPercentage(null);
  };

  const handleApplyFilter = () => {
    if (validateFrom(fromValue) === '' && (validateTo(toValue) === '' || toValue === '')) {
      const percentageRange = toValue !== '' ? [fromValue, toValue] : [fromValue];
      handleCommonFilter(-1, [], setFilteringData, percentageRange, 'percentage');
    } else {
      setErrorMessage('Please enter valid percentage values');
    }
  };

  const handleRadioChange = (index) => {
    setSelectedPercentage(index);
    setFromValue("");
    setToValue("");
    const selectedValue = percentageType[index];
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
          value={fromValue}
          onChange={handleFromChange}
          onBlur={() => setErrorMessage(validateFrom(fromValue))}
        />
        <input
          type="number"
          placeholder="To"
          className="filterInput w-[7.75vw] pl-[0.625vw]"
          value={toValue}
          onChange={handleToChange}
          onBlur={() => setErrorMessage(validateTo(toValue))}
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
