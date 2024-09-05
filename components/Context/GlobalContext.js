"use client";
import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();
import dayjs from "dayjs";

const initalFilter = {};
const GlobalContextProvider = ({ children }) => {
  const [domainVariable, setDomainVariable] = useState('');
  useEffect(() => {
    const routerName = window.location.hostname;
    switch (true) {
      case routerName?.includes("qspiders"):
        setDomainVariable("Qspiders");
        break;
      case routerName?.includes("jspiders"):
        setDomainVariable("Jspiders");
        break;
      case routerName?.includes("pyspiders"):
        setDomainVariable("Pyspiders");
        break;
      case routerName?.includes("prospiders"):
        setDomainVariable("Prospiders");
        break;
      default:
        setDomainVariable("Qspiders");
    }
  }, []);

  //adminportal
  const [selectedSideBar, setSelectedSideBar] = useState('Category')
  const [selectedInstitute, setSelectedInstitute] = useState("Qspiders")

  const [hoverState, setHoverState] = useState({ item: null, content: false });
  const [selectedBranch, setSelectedBranch] = useState("Bengalore");
  const [selectedCourseId, setSelectedCourseId] = useState("1");
  const [countryList, setCountryList] = useState([])
  const [homeBranchData, setHomeBranchData] = useState([])
  const [selectedBatch, setSelectedBatch] = useState("Bengalore");
  const [selectedClassMode, setSelectedClassMode] = useState("offline");
  const todayDate = dayjs().format("YYYY-MM-DD");
  const [filteringData, setFilteringData] = useState(initalFilter);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [universitySelected, setUniversitySelected] = useState([]);
  const [stateSelected, setStateSelected] = useState([]);
  const [placeCheckedIcon, setPlacedCheckedIcon] = useState(true);
  const [lesscheckedIcon, setLessCheckedIcon] = useState(false);
  const [throughcheckedIcon, setThroughCheckedIcon] = useState(false);
  const [itCheckedIcon, setItCheckedIcon] = useState(false);
  const [nonItCheckedIcon, setNonItCheckedIcon] = useState(false);
  const [scrollConst, setScrollConst] = useState();
  const [allStaticsCount, setAllStaticsCount] = useState({});
  const [selectedCourseDetails, setSelectedCourseDetails] = useState({});
  const [citySearchQuery, setCitySearchQuery] = useState("");
  const [collegeSearchQuery, setCollegeSearchQuery] = useState("");
  const [degreeSearchQuery, setDegreeSearchQuery] = useState("");
  const [stateSearchQuery, setStateSearchQuery] = useState("");
  const [universitySearchQuery, setUniversitySearchQuery] = useState("");
  const [yearSearchQuery, setYearSearchQuery] = useState("");
  const [streamSearchQuery, setStreamSearchQuery] = useState("");
  // edit Subject
  const [individualSubjectData, setIndividualSubjectData] = useState();
  //course testimonialpopup
  const [imageDialog, setImageDialog] = useState(false);
  const [videoDialog, setVideoDialog] = useState(false);

  //daterange
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
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
  const [stateItems, setStateItems] = useState([]);

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

  //generate link
  const [generateLink, setGenerateLink] = useState(false);
  const [generatedPath, setGeneratedPath] = useState("");

  //placement general login
  const [filterPlacementData, setFilterPlacementData] = useState({});
  const [filteredDateRange, setFilteredRange] = useState({
    joining_date_after: "",
    joining_date_before: "",
    testimonial_id: "",
    degree_id:"",
    d_stream_id:"",
    masters_id:"",
    m_stream_id:"",
    highestyop:"",
    less_than60:"",
    above_60:"",
    non_it:"",
    it:""
  })
  const [placementParam, setPlacementParam] = useState("");
  const [sideBarBtn, setSideBarBtn] = useState("");
  const [degreeButton, setDegreeButton] = useState("");
  const [branchButton, setBranchButton] = useState("");
  const [passOutButton, setPassOutButton] = useState("");
  const [selectedCourseDetailsId, setSelectedCoursDetailseId] = useState(null);
  const [activeSidebarBtn, setActiveSidebarBtn] = useState(false)
  const [upComingBatches, setupComingBatches] = useState(null)
  const [onGoingBatches, setOnGoingBatches] = useState(null)
  const [homePlacements, setHomePlacements] = useState(false)
  const [scrollPage, setScrollPage] = useState(1)
  const emptySearch = citySearchQuery === "" && stateSearchQuery === "" && citySearchQuery === "" &&
    universitySearchQuery === "" && streamSearchQuery === "" && yearSearchQuery === ""

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  const handleScroll = debounce(
    (event, page, setPage, repData, setIsFetchData) => {
      const target = event.target;
      const scrolledToBottom =
        Math.ceil(target?.scrollTop + target?.clientHeight) >=
        target?.scrollHeight - 1;
      setScrollConst(scrolledToBottom);
      if (scrolledToBottom && repData?.next_page_url !==null) {
        setScrollPage(scrollPage + 1)
        setIsFetchData(true);
      }
    },
    300
  );
  const timePeriods = {
    "Last week": dayjs().subtract(1, "week").format("YYYY-MM-DD"),
    "Last month": dayjs().subtract(1, "month").format("YYYY-MM-DD"),
    "Last 3 months": dayjs().subtract(3, "month").format("YYYY-MM-DD"),
    "Last 6 months": dayjs().subtract(6, "month").format("YYYY-MM-DD"),
  };

  const handleCounsellorCommonFilter = (
    value,
    items,
    setItems,
    response,
    key
  ) => {
    setPage(0);
    let updatedSelectedItems = [...items];

    if (value === -1) {
      // Handle calendar or dropdown selection
      setItems([]);
      updatedSelectedItems = response; // response contains the date range for calendar or dropdown selection
    } else {
      // Handle checkbox selection
      if (updatedSelectedItems.includes(value)) {
        updatedSelectedItems = updatedSelectedItems.filter(
          (item) => item !== value
        );
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

    setFilteringData((prevFilteringData) => {
      const updatedFilteringData = { ...prevFilteringData };
      if (selectedFilterData.length === 0) {
        delete updatedFilteringData[key];
      } else {
        if (key === "timePeriod") {
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
    setPlacedCheckedIcon(false);
    setLessCheckedIcon(false);
    setThroughCheckedIcon(false);
    setNonItCheckedIcon(false);
    setItCheckedIcon(false);
    setDegreeButton("");
    setBranchButton("");
    setPassOutButton("");
    setScrollPage(1)
    setActiveSidebarBtn(true);
    switch (title) {
      case "Recent Placements":
        setFilterPlacementData({});
        setFilteredRange({
          joining_date_after: "",
          joining_date_before: ""
        })
        setPlacementParam("");
        break;
      // case "Top Salaries":
      //   setPlacementParam("topsalaried");
      //   break;
      case "Last week":
      case "Last month":
      case "Last 3 months":
      case "Last 6 months":
        const startDate = timePeriods[title];
        const endDate = dayjs().format("YYYY-MM-DD");
        setPlacementParam("");
        setFilterPlacementData({
          timePeriod: [startDate, endDate],
        });
        setFilteredRange({
          joining_date_after: startDate,
          joining_date_before: endDate
        })
        break;
      default:
        break;
    }
  };




  return (
    <GlobalContext.Provider
      value={{
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
        fromValue,
        setFromValue,
        toValue,
        setToValue,
        selectedDate,
        setSelectedDate,
        fromYear,
        setFromYear,
        toYear,
        setToYear,
        selectedYop,
        setSelectedYop,
        selectedBranchFilter,
        setSelectedBranchFilter,
        selectedBranchType,
        setSelectedBranchType,
        stateItems,
        setStateItems,
        selectedCity,
        setSelectedCity,
        selectedUniversity,
        setSelectedUniversity,
        selectedCollege,
        setSelectedCollege,
        selectedDegrees,
        setSelectedDegrees,
        selectedStream,
        setSelectedStream,
        fromPercentage,
        setFromPercentage,
        toPercentage,
        setToPercentage,
        selectedPercentage,
        setSelectedPercentage,
        filterPlacementData,
        setFilterPlacementData,
        setPlacementParam,
        placementParam,
        sideBarBtn,
        setSideBarBtn,
        handlePlacementCommonFilter,
        degreeButton,
        setDegreeButton,
        branchButton,
        setBranchButton,
        passOutButton,
        setPassOutButton,
        nonItCheckedIcon,
        setNonItCheckedIcon,
        itCheckedIcon,
        setItCheckedIcon,
        generateLink,
        setGenerateLink,
        generatedPath,
        setGeneratedPath,
        setSelectedCoursDetailseId,
        selectedCourseDetailsId,
        allStaticsCount,
        setAllStaticsCount,
        selectedCourseDetails,
        setSelectedCourseDetails,
        citySearchQuery, setCitySearchQuery,
        collegeSearchQuery, setCollegeSearchQuery,
        degreeSearchQuery, setDegreeSearchQuery,
        stateSearchQuery, setStateSearchQuery,
        universitySearchQuery, setUniversitySearchQuery,
        yearSearchQuery, setYearSearchQuery,
        streamSearchQuery, setStreamSearchQuery, emptySearch, activeSidebarBtn, setActiveSidebarBtn,
        onGoingBatches, setOnGoingBatches, upComingBatches, setupComingBatches,
        homeBranchData, setHomeBranchData,
        domainVariable, hoverState, setHoverState, imageDialog, setImageDialog, videoDialog, setVideoDialog,
        homePlacements, setHomePlacements, countryList, setCountryList, individualSubjectData, setIndividualSubjectData,
        selectedSideBar, setSelectedSideBar, selectedInstitute, setSelectedInstitute, scrollPage, setScrollPage, filteredDateRange, setFilteredRange
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
