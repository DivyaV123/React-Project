'use client'
import React, { createContext, useState } from "react";
export const GlobalContext = createContext();
const initalFilter = {}
const GlobalContextProvider = ({ children }) => {
  const [selectedBranch, setSelectedBranch] = useState('Bengalore')
  const [selectedCourseId, setSelectedCourseId] = useState('1')

  const [selectedBatch, setSelectedBatch] = useState("Bengalore")
  const [selectedClassMode, setSelectedClassMode] = useState("offline")

  const [filteringData, setFilteringData] = useState(initalFilter)
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(5)
  const [universitySelected, setUniversitySelected] = useState([])
  const [ststeSelected, setStateSelected] = useState([])
  const [scrollConst, setScrollConst] = useState()

  const handleScroll = (event, page, setPage, repData) => {
    const target = event.target;
    const scrolledToBottom =
      Math.ceil(target?.scrollTop + target?.clientHeight) > target?.scrollHeight - 1;
    setScrollConst(scrolledToBottom)
    if (scrolledToBottom) {
      console.log("handleScroll is calaing", scrolledToBottom)
      if (!repData.response.last) {
        setPage(page + 1)
      }
    };
  }

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
  const handleCommonFilter = (index, items, setItems, response, key) => {
    setPage(0);
    const updatedSelectedItems = [...items];
    if (updatedSelectedItems.includes(index)) {
      updatedSelectedItems.splice(updatedSelectedItems.indexOf(index), 1);
    } else {
      updatedSelectedItems.push(index);
    }
    setItems(updatedSelectedItems);

    let selectedDegreeNames = updatedSelectedItems.map(index => response[index]);

    // Flatten the array if the key is "timePeriods"
    if (key === "timePeriod" && selectedDegreeNames.length > 0 && Array.isArray(selectedDegreeNames[0])) {
      selectedDegreeNames = selectedDegreeNames.flat();
    }

    if (key) {
      setFilteringData(prevFilteringData => {
        const updatedFilteringData = { ...prevFilteringData };
        if (selectedDegreeNames.length === 0) {
          delete updatedFilteringData[key];
        } else {
          updatedFilteringData[key] = selectedDegreeNames;
        }
        return updatedFilteringData;
      });

      if (key === "university") {
        setUniversitySelected(selectedDegreeNames);
      } else if (key === "state") {
        setStateSelected(selectedDegreeNames);
      }
    } else {
      setFilteringData(prevFilteringData => {
        const updatedFilteringData = { ...prevFilteringData };
        if (selectedDegreeNames.length === 0) {
          delete updatedFilteringData.parameter;
        } else {
          updatedFilteringData.parameter = selectedDegreeNames;
        }
        return updatedFilteringData;
      });
    }
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
      universitySelected,
      ststeSelected,
      size,
      setSize,
      scrollConst,
      handleCommonFilter,
      handleScroll
    }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider; 