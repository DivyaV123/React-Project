'use client'
import React, { createContext, useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
import { COUNSELLOR_SECTION } from "@/lib/RouteConstants";
export const GlobalContext = createContext();
import dayjs from "dayjs";

const initalFilter = {}
const GlobalContextProvider = ({ children }) => {
  const router=useRouter()
  const [selectedBranch, setSelectedBranch] = useState('Bengalore')
  const [selectedCourseId, setSelectedCourseId] = useState('1')

  const [selectedBatch, setSelectedBatch] = useState("Bengalore")
  const [selectedClassMode, setSelectedClassMode] = useState("offline")
  const todayDate = dayjs().format("YYYY-MM-DD")
  const [filteringData, setFilteringData] = useState(initalFilter)
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(5)
  const [universitySelected, setUniversitySelected] = useState([])
  const [ststeSelected, setStateSelected] = useState([])
  const [placeCheckedIcon,setPlacedCheckedIcon]=useState(true)
  const [lesscheckedIcon, setLessCheckedIcon] = useState(false)
  const [throughcheckedIcon, setThroughCheckedIcon] = useState(false)
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
    let updatedSelectedItems = [...items];
  
    if (index === -1) {
      // Handle calendar or dropdown selection
      setItems([]);
      updatedSelectedItems = response; // response contains the date range for calendar or dropdown selection
    } else {
      // Handle checkbox selection
      if (updatedSelectedItems.includes(index)) {
        updatedSelectedItems.splice(updatedSelectedItems.indexOf(index), 1);
      } else {
        updatedSelectedItems.push(index);
      }
      setItems(updatedSelectedItems);
    }
  
    let selectedFilterData;
    if (index === -1) {
      selectedFilterData = updatedSelectedItems; // Use the date range directly
    } else {
      selectedFilterData = updatedSelectedItems.map(idx => response[idx]);
    }
  
    if (key) {
      setFilteringData(prevFilteringData => {
        const updatedFilteringData = { ...prevFilteringData };
        if (selectedFilterData.length === 0) {
          delete updatedFilteringData[key];
        } else {
          updatedFilteringData[key] = selectedFilterData;
        }
        return updatedFilteringData;
      });
  
      if (key === "university") {
        setUniversitySelected(selectedFilterData);
      } else if (key === "state") {
        setStateSelected(selectedFilterData);
      }
    } else {
      setFilteringData(prevFilteringData => {
        const updatedFilteringData = { ...prevFilteringData };
        if (selectedFilterData.length === 0) {
          delete updatedFilteringData.parameter;
        } else {
          updatedFilteringData.parameter = selectedFilterData;
        }
        return updatedFilteringData;
      });
    }
  };
  

  useEffect(() => {
    const searchParams = constructSearchParams()
    const fullURL = `${COUNSELLOR_SECTION}/${searchParams ? `?${searchParams}` : ''}`;
    router.push(fullURL);
  }, [filteringData]);

  const constructSearchParams = () => {
    let searchParams = '';
    for (const key in filteringData) {
      if (filteringData.hasOwnProperty(key)) {
        if (searchParams !== '') {
          searchParams += '&';
        }
        searchParams += key + '=' + filteringData[key].join(',');
      }
    }
    return searchParams;
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
      handleScroll,
      placeCheckedIcon,
      setPlacedCheckedIcon,
      lesscheckedIcon,
      setLessCheckedIcon,
      throughcheckedIcon,
      setThroughCheckedIcon
    }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider; 