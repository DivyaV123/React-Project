'use client'
import React, { createContext, useState, useEffect } from "react";


export const GlobalContext = createContext();
import dayjs from "dayjs";

const initalFilter = {}
const GlobalContextProvider = ({ children }) => {

  const [selectedBranch, setSelectedBranch] = useState('Bengalore')
  const [selectedCourseId, setSelectedCourseId] = useState('1')

  const [selectedBatch, setSelectedBatch] = useState("Bengalore")
  const [selectedClassMode, setSelectedClassMode] = useState("offline")
  const todayDate = dayjs().format("YYYY-MM-DD")
  const [filteringData, setFilteringData] = useState(initalFilter)
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(5)
  const [universitySelected, setUniversitySelected] = useState([])
  const [stateSelected, setStateSelected] = useState([])
  const [placeCheckedIcon, setPlacedCheckedIcon] = useState(true)
  const [lesscheckedIcon, setLessCheckedIcon] = useState(false)
  const [throughcheckedIcon, setThroughCheckedIcon] = useState(false)
  const [scrollConst, setScrollConst] = useState()

  //daterange
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [selectedDate, setSelectedDate] = useState([]);

  //yearRange
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const [selectedYop, setSelectedYop] = useState([]);

  //branch
  const [selectedBranchFilter, setSelectedBranchFilter] = useState([]);

  //branchType
  const [selectedBranchType, setSelectedBranchType] = useState([]);

  //stateType
  const [stateItems, setStateItems] = useState([])

  //cityType
  const [selectedCity, setSelectedCity] = useState([]);

  //universityType
  const [selectedUniversity, setSelectedUniversity] = useState([]);

  //collegeType
  const [selectedCollege, setSelectedCollege] = useState([]);

  //degreeType
  const [selectedDegrees, setSelectedDegrees] = useState([]);

  //streamType
  const [selectedStream, setSelectedStream] = useState([]);

  //percentage
  const [fromPercentage, setFromPercentage] = useState("");
  const [toPercentage, setToPercentage] = useState("");
  const [selectedPercentage, setSelectedPercentage] = useState(null);


  //placement general login
  const [filterPlacementData,setFilterPlacementData] = useState({})
  const [salariedParam,setSalariedParam]=useState('')
  const [sideBarBtn, setSideBarBtn] = useState("Recent Placements");

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  const handleScroll = debounce((event, page, setPage, repData) => {
    const target = event.target;
    const scrolledToBottom =
      Math.ceil(target?.scrollTop + target?.clientHeight) > target?.scrollHeight - 1;
    setScrollConst(scrolledToBottom);
    if (scrolledToBottom) {
      console.log("handleScroll is calling", scrolledToBottom);
      if (!repData.response.last) {
        setPage(page + 1);
      }
    }
  }, 300);

  // const handleScroll = (event, page, setPage, repData) => {
  //   const target = event.target;
  //   const scrolledToBottom =
  //     Math.ceil(target?.scrollTop + target?.clientHeight) > target?.scrollHeight - 1;
  //   setScrollConst(scrolledToBottom)
  //   if (scrolledToBottom) {
  //     console.log("handleScroll is calaing", scrolledToBottom)
  //     if (!repData.response.last) {
  //       setPage(page + 1)
  //     }
  //   };
  // }

  const timePeriods = {
    "Last week": dayjs().subtract(1, "week").format("YYYY-MM-DD"),
    "Last month": dayjs().subtract(1, "month").format("YYYY-MM-DD"),
    "Last 3 months": dayjs().subtract(3, "month").format("YYYY-MM-DD"),
    "Last 6 months": dayjs().subtract(6, "month").format("YYYY-MM-DD"),
  };


  const handleCounsellorCommonFilter = (value, items, setItems, response, key) => {
    setPage(0);
    let updatedSelectedItems = [...items];

    if (value === -1) {
      // Handle calendar or dropdown selection
      setItems([]);
      updatedSelectedItems = response; // response contains the date range for calendar or dropdown selection
    } else {
      // Handle checkbox selection
      if (updatedSelectedItems.includes(value)) {
        updatedSelectedItems = updatedSelectedItems.filter(item => item !== value);
      } else {
        updatedSelectedItems.push(value);
      }
      setItems(updatedSelectedItems);
    }

    let selectedFilterData;
    if (value === -1) {
      selectedFilterData = updatedSelectedItems; // Use the date range directly
    } else {
      selectedFilterData = updatedSelectedItems;
    }

    setFilteringData(prevFilteringData => {
      const updatedFilteringData = { ...prevFilteringData };
      if (selectedFilterData.length === 0) {
        delete updatedFilteringData[key];
      } else {
        if (key === 'timePeriod') {
          if (value === -1) {
            // Calendar selection
            updatedFilteringData[key] = selectedFilterData;
          } else {
            // Checkbox selection, get the largest period
            const sortedPeriods = updatedSelectedItems.sort((a, b) => b - a);
            const largestPeriod = response[sortedPeriods[0]];
            const today = dayjs().format("YYYY-MM-DD");
            updatedFilteringData[key] = [timePeriods[largestPeriod], today];
          }
        } else {
          updatedFilteringData[key] = selectedFilterData;
        }
      }
      return updatedFilteringData;
    });

    if (key === "university") {
      setUniversitySelected(selectedFilterData);
    } else if (key === "state") {
      setStateSelected(selectedFilterData);
    }
  };

  const handlePlacementCommonFilter = (title) => {
    setSideBarBtn(title);
    switch (title) {
      case "Recent Placements":
        setFilterPlacementData({});
        break;
      case "Top Salaries":
        setSalariedParam("topsalaried");
      case "Last week":
      case "Last month":
      case "Last 3 months":
      case "Last 6 months":
        const startDate = timePeriods[title];
        const endDate = dayjs().format("YYYY-MM-DD");
        setFilterPlacementData((prevData) => ({
          ...prevData,
          timePeriod: [startDate, endDate] 
        }))
        break;
      default:
        break;
    }
  };

console.log(filterPlacementData,"filterPlacementData");
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
      page,
      setPage,
      universitySelected,
      stateSelected,
      size,
      setSize,
      scrollConst,
      handleCounsellorCommonFilter,
      handleScroll,
      placeCheckedIcon,
      setPlacedCheckedIcon,
      lesscheckedIcon,
      setLessCheckedIcon,
      throughcheckedIcon,
      setThroughCheckedIcon,
       fromValue, setFromValue, toValue, setToValue, selectedDate, setSelectedDate,
       fromYear,setFromYear,toYear,setToYear,selectedYop,setSelectedYop,
       selectedBranchFilter,setSelectedBranchFilter,
       selectedBranchType,setSelectedBranchType,
       stateItems,setStateItems,
       selectedCity,setSelectedCity,
       selectedUniversity, setSelectedUniversity,
       selectedCollege, setSelectedCollege,
       selectedDegrees, setSelectedDegrees,
       selectedStream, setSelectedStream,
       fromPercentage, setFromPercentage,toPercentage, setToPercentage,
       selectedPercentage, setSelectedPercentage,
       filterPlacementData,setFilterPlacementData,setSalariedParam,
       salariedParam,sideBarBtn, setSideBarBtn,handlePlacementCommonFilter

    }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider; 