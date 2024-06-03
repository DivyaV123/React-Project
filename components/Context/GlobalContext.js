'use client'
import React, { createContext, useState } from "react";
export const GlobalContext = createContext();
const initalFilter = {
  timePeriod: [],
  yop: [],
  branchLocation: [],
  state: [],
  city: [],
  university: [],
  college: [],
  percentage: [],
  degree: [],
  stream: []
}
const GlobalContextProvider = ({ children }) => {
  const [selectedBranch, setSelectedBranch] = useState('Bengalore')
  const [selectedCourseId, setSelectedCourseId] = useState('1')

  const [selectedBatch, setSelectedBatch] = useState("Bengalore")
  const [selectedClassMode, setSelectedClassMode] = useState("offline")

  const [filteringData, setFilteringData] = useState(initalFilter)
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(5)


  const handleFilter = (index, items, setItems, field) => {
    const newItems = items.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          checked: !item.checked,
        };
      } else {
        return item;
      }
    });
    setItems(newItems);
    const selectedValues = newItems
      .filter(item => item.checked)
      .map(item => item.label);
    setFilteringData(prevFilteringData => ({
      ...prevFilteringData,
      [field]: selectedValues,
    }));
  };
  const handleCommonFilter = (index,items,setItems,response) => {
    const updatedSelectedItems = [...items];
    if (updatedSelectedItems.includes(index)) {
        updatedSelectedItems.splice(updatedSelectedItems.indexOf(index), 1);
    } else {
        updatedSelectedItems.push(index);
    }
    setItems(updatedSelectedItems);

    const selectedDegreeNames = updatedSelectedItems.map(index => response[index]);
    setFilteringData(prevFilteringData => ({
        ...prevFilteringData,
        degree: selectedDegreeNames,
    }));
};
  return (
    <GlobalContext.Provider value={{
      selectedBranch,
      setSelectedBranch,
      selectedCourseId,
      setSelectedCourseId,
      selectedBatch,
      setSelectedBatch,
      selectedClassMode,
      setSelectedClassMode,
      filteringData,
      setFilteringData,
      handleFilter,
      page,
      setPage,
      size,
      setSize
    }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider; 