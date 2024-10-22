"use client";
import React, { useEffect, useState, useContext ,useRef} from "react";
import "./Degree_Branch_passout.scss";
import { useGetAllDegreeAndStreamQuery } from "@/redux/queries/getDegreeAndStream";
import { useGetAllStreamQuery } from "@/redux/queries/getAllStream";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { branchAbbreviations } from "@/lib/utils";
import BarSkeleton from "@/components/skeletons/BarSkeleton";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { truncateText, toProperCase } from "@/lib/utils";
import { Suspense } from "react";
import dayjs from "dayjs";

import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCarousel, CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,CarouselPreviousPlacement,CarouselNextPlacement } from "../hireFromUs/TestimonialCarousel";

const Degree_Branch_Passout = ({ isLoading, isFetching, scrollToTop,scrollToBottom ,clearDropdownPlaceholder}) => {
  const [isDegreeMoreOpen, setIsDegreeMoreOpen] = useState(false);
  const [isBranchMoreOpen, setIsBranchMoreOpen] = useState(false);
  const [isPassOutMoreOpen, setIsPassOutMoreOpen] = useState(false);
  const [degreeSearchInput, setDegreeSearchInput] = useState("");
  const [branchSearchInput, setBranchSearchInput] = useState("");
  const [yopSearchInput, setYopSearchInput] = useState("");
  const {
    setFilterPlacementData,
    setPlacementParam,
    degreeButton,
    branchButton,
    passOutButton,
    setDegreeButton,
    setBranchButton,
    setPassOutButton,
    setSideBarBtn,
    setThroughCheckedIcon,
    setLessCheckedIcon,
    setPlacedCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    lesscheckedIcon,
    throughcheckedIcon,
    itCheckedIcon,
    nonItCheckedIcon,
    placeCheckedIcon,
    setPage,
    sideBarBtn,
    filteredDateRange,
    setFilteredRange,
    setScrollPage,
    scrollPage,
   setSelectedPlacementBtn,isRedirectFrmHomePage 
  } = useContext(GlobalContext);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];
  const carouselRef = useRef(null);
  const searchParams = useSearchParams();

  const { data: degreeAndStreamdata, error } = useGetAllDegreeAndStreamQuery();
  const { data: streamData, error: streamError } = useGetAllStreamQuery();

  const currentYear = dayjs().year();
  const yopData = Array.from({ length: 15 }, (_, i) => currentYear - i);

  const [degreeList, setDegreeList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [yopList, setYopList] = useState([]);

  useEffect(() => {
    if (degreeAndStreamdata) {
      const getDegree = degreeAndStreamdata?.results?.map((degree) => ({
        id: degree.id,
        name: degree.short_form || degree.name,
        qualification_type_name: degree.qualification_type_name,
        fullName:degree.name
      }));
      setDegreeList(getDegree);
    }

    if (streamData) {
      const getStream = streamData?.results?.map((stream) => ({
        id: stream.id,
        name: stream.short_form || stream.name,
        qualification_type_name: stream.qualification_type_name,
        fullName:stream.name
      }));
      setBranchList(getStream);
    }

    if (yopData) {
      setYopList(
        [...(yopData || [])]
          .sort((a, b) => b - a)
          .map((yop) => ({ id: yop, name: yop.toString() }))
      );
    }
  }, [degreeAndStreamdata, streamData]);

  useEffect(() => {
    const degree = searchParams.get("degree");
    const stream = searchParams.get("stream");
    const yop = searchParams.get("yop");
    if (degree) {
      setDegreeButton(degree);
      setFilterPlacementData((prevData) => ({
        ...prevData,
        degree: [degree],
      }));
    }
    if (stream) {
      setBranchButton(stream);
      setFilterPlacementData((prevData) => ({
        ...prevData,
        stream: [stream],
      }));
    }
    if (yop) {
      setPassOutButton(yop);
      setFilterPlacementData((prevData) => ({
        ...prevData,
        yop: [yop],
      }));
    }
    return () => {
      setDegreeButton("");
      setBranchButton("");
      setPassOutButton("");
    };
  }, []);

  const handleToggleMore = (setMoreOpen, otherSetMoreStates) => {
    setMoreOpen((prevState) => !prevState);
    otherSetMoreStates.forEach((setState) => setState(false));
    setDegreeSearchInput("")
    setBranchSearchInput("")
    setYopSearchInput("")
  };

  const resetButtonStates = (exceptKey) => {
    if (exceptKey !== "degree") setDegreeButton("");
    if (exceptKey !== "stream") setBranchButton("");
    if (exceptKey !== "yop") setPassOutButton("");
  };
  const handleItemClick = (item, items, setItems, setButtonState, key) => {
    setScrollPage(1);
    const index = items.findIndex(({ name }) => name === item.name);

    if (index >= 6) {
      const newItems = [...items];
      newItems.splice(index, 1);
      const sixthItem = newItems[5];
      newItems[5] = item;

      const unsortedPart = newItems.slice(6);
      unsortedPart.push(sixthItem);
      const isNumeric = unsortedPart.every((el) => !isNaN(el.name));

      unsortedPart.sort((a, b) => {
        if (isNumeric) {
          return b.name - a.name;
        } else {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }
      });
      const sortedItems = [...newItems.slice(0, 6), ...unsortedPart];

      setItems(sortedItems);
      setButtonState(item.name);
    } else {
      setButtonState(item.name);
    }

    setPlacementParam("");
    setPlacedCheckedIcon(false);
    setLessCheckedIcon(false);
    setThroughCheckedIcon(false);
    setNonItCheckedIcon(false);
    setSideBarBtn("");
    setItCheckedIcon(false);
    setFilterPlacementData({
      [key]: [item.name],
    });
    const qualificationKeyMap = {
      Degree: {
        degree: "degree_id",
        stream: "d_stream_id",
      },
      Masters: {
        degree: "masters_id",
        stream: "m_stream_id",
      },
    };

    const keyToUpdate =
      qualificationKeyMap[item?.qualification_type_name]?.[key];

    if (keyToUpdate) {
      setFilteredRange({
        [keyToUpdate]: item.id,
      });
    }
    if (key === "yop") {
      setFilteredRange({
        highestyop: item.name,
      });
    }
    resetButtonStates(key);
  };
 
  
  const handleButtonClick = (item, setButtonState, key) => {
    setScrollPage(1);
  
    resetButtonStates(key);
    setButtonState(item.name);
    setPlacementParam("");
    setSideBarBtn("");
    setSelectedPlacementBtn(item.name)
    setPlacedCheckedIcon(false);
    setLessCheckedIcon(false);
    setThroughCheckedIcon(false);
    setNonItCheckedIcon(false);
    setItCheckedIcon(false);
    setFilterPlacementData({
      [key]: [item.name],
    });
    
    const qualificationKeyMap = {
      Degree: {
        degree: "degree_id",
        stream: "d_stream_id",
      },
      Masters: {
        degree: "masters_id",
        stream: "m_stream_id",
      },
    };

    const keyToUpdate =
      qualificationKeyMap[item?.qualification_type_name]?.[key];

    if (keyToUpdate) {
      setFilteredRange({
        [keyToUpdate]: item.id,
      });
    }
    if (key === "yop") {
      setFilteredRange({
        highestyop: item.name,
      });
    }
    setTimeout(() => {
      scrollToBottom();
    }, 1000);
  };

  const renderSearchBar = (searchInput, setSearchInput,hasResults) => (
    <>
    <input
      type="text"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder="Search..."
      className="w-full p-2 border-b border-gray-300 mb-2 outline-none"
    />
    {!hasResults && <p className="text-gray-500 flex justify-center items-center py-4">No content available</p>}
    </>
  );

  const renderButtonSection = (
    items,
    buttonState,
    setButtonState,
    moreState,
    setMoreState,
    setItems,
    abbreviations,
    key,
    otherSetMoreStates,
    searchInput,
    setSearchInput
  ) => {
    const remainingItems = items.slice(6);
    const filteredItems = remainingItems.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  const hasResults=filteredItems.length > 0;
  
    return (
      <div className=" relative mobile:hidden">
        {/* {items.slice(0, 6).map((item, index) => (
          <button
            key={index}
            className={`flex justify-center items-center w-[7.5vw] py-2 text-[0.938vw] ${
              item.name === buttonState &&
              !lesscheckedIcon &&
              !throughcheckedIcon &&
              !itCheckedIcon &&
              !nonItCheckedIcon &&
              !placeCheckedIcon
                ? "activeButton font-medium"
                : ""
            }`}
            onClick={() => {
              handleButtonClick(item, setButtonState, key);
            }}
            title={toProperCase(item.fullName)}
          >
            {(truncateText(item.name, 6)).toUpperCase()}
          </button>
        ))}
        {items.length > 6 && (
          <button
            className="flex justify-center items-center w-[7.5vw] py-2 text-[0.938vw] text-[#4987CE] font-extrabold"
            onClick={() => handleToggleMore(setMoreState, otherSetMoreStates)}
          >
            {moreState ? "Less..." : "More..."}
          </button>
        )}
        {moreState && (
          <ul className="additional-years-list max-h-60 overflow-y-scroll myscrollbar">
            {renderSearchBar(searchInput, setSearchInput,hasResults)}
            {filteredItems.map((item, index) => (
              <li
                key={index}
                className="flex  items-center w-[4.219vw] py-2 text-[0.938vw] text-[#707070] font-medium"
                onClick={() => {
                  handleItemClick(item, items, setItems, setButtonState, key);
                  setMoreState(false);
                }}
                title={toProperCase(item.fullName)}
              >
                {item.name.toUpperCase()}
              </li>
            ))}
          </ul>
        )} */}
        <TestimonialCarousel
          className="carousel-body mx-2 w-[49vw]"
          ref={carouselRef}
          breakPoints={breakPoints}
          showArrows={false}
          pagination={false}
        >
        
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="basis-[19.666667%]">
            <button
              className={`flex justify-center items-center  py-2 text-[0.938vw] carouselBtn w-[7.813vw] h-[7.778vh] rounded-[12px] ${
                item.name.toLowerCase() === buttonState.toLowerCase() && 
                !lesscheckedIcon && 
                !throughcheckedIcon && 
                !itCheckedIcon && 
                !nonItCheckedIcon && 
                !placeCheckedIcon
                  ? "activeButton font-medium"
                  : ""
              }`}
              onClick={() =>{ handleButtonClick(item, setButtonState, key);}}
              title={toProperCase(item.fullName)}
            >
              {truncateText(item.name, 6).toUpperCase()}
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPreviousPlacement />
      <CarouselNextPlacement />

    </TestimonialCarousel>
      </div>
    );
  };
  const degree = searchParams.get("degree");
    const stream = searchParams.get("stream");
  const renderDropdownSection = (
    items,
    buttonState,
    setButtonState,
    moreState,
    setMoreState,
    setItems,
    abbreviations,
    key,
    otherSetMoreStates,
    searchInput,
    setSearchInput
  ) => {
    const dropdownOptions = items.map((item) => ({
      value: item.name,
      label: truncateText(item.name, 6).toUpperCase(),
    }));
    return (
      <div className="dropdown-section">
        
        <Dropdown
        name={key} 
        value={buttonState || " "} 
        inputStyle=" border-none text-[1.094vw] font-medium "
         iconStyle="w-[10%]"
         arrowIcon="w-[15px] h-[15px]"
         iconPath={`/images/${key}_dropdown.png`}
        onChange={(e) => {
            const selectedItem = items.find(
              (item) => item.name === e.target.value
            );
          
            if (selectedItem) {
              handleButtonClick(selectedItem, setButtonState, key);
              setTimeout(()=>{
              scrollToBottom()
            },1000)
            }
          }}
        placeholder={degree && key ==="degree" && !clearDropdownPlaceholder? degree : stream &&  key ==="stream" && !clearDropdownPlaceholder? stream :`${key}`} // dynamic placeholder based on key
        options={dropdownOptions}
        />
      </div>
    );
  };
  

  //NOTE : this below useEffect for auto selecting the degree and stream values by taking values from URL(it helps when we are comming from Homepage for auto selecting)
  // useEffect(() => {
  //   const streamFromURL = searchParams.get("stream");
  //   const degreeFromURL = searchParams.get("degree");

  //   if (
  //     streamFromURL &&
  //     branchList.length > 6 &&
  //     !branchList.slice(0, 6).some((item) => item.name === streamFromURL)
  //   ) {
  //     if (branchList.some((item) => item.name === streamFromURL)) {
  //       const newBranchItems = [...branchList];
  //       const branchLastIndex = 5;
  //       const branchUrlItemIndex = newBranchItems.findIndex(
  //         (item) => item.name === streamFromURL
  //       );
  //       [newBranchItems[branchLastIndex], newBranchItems[branchUrlItemIndex]] =
  //         [newBranchItems[branchUrlItemIndex], newBranchItems[branchLastIndex]];
  //       setBranchList(newBranchItems);
  //       setBranchButton(streamFromURL);
  //     }
  //   }

  //   if (
  //     degreeFromURL &&
  //     degreeList?.length > 6 &&
  //     !degreeList.slice(0, 6).some((item) => item.name === degreeFromURL)
  //   ) {
  //     if (degreeList.some((item) => item.name === degreeFromURL)) {
  //       const newDegreeItems = [...degreeList];
  //       const degreeLastIndex = 5;
  //       const degreeUrlItemIndex = newDegreeItems.findIndex(
  //         (item) => item.name === degreeFromURL
  //       );
  //       [newDegreeItems[degreeLastIndex], newDegreeItems[degreeUrlItemIndex]] =
  //         [newDegreeItems[degreeUrlItemIndex], newDegreeItems[degreeLastIndex]];
  //       setDegreeList(newDegreeItems);
  //       setDegreeButton(degreeFromURL);
  //     }
  //   }
  // }, [
  //   searchParams,
  //   branchList,
  //   setBranchList,
  //   setBranchButton,
  //   degreeList,
  //   setDegreeList,
  //   setDegreeButton,
  // ]);
 
  
  return (
    <Suspense>
      <section className="mt-2 flex mb-4 ml-[6.5rem] mr-[2.25rem] gap-2 mobile:hidden flex-col">
        {isLoading ? (
          <BarSkeleton />
        ) : (
          <>
          <div className="dropdownContainer sticky z-[9] top-[18vh] mb-[3vh] flex gap-[2vw] w-[54.688vw] h-[8.333vh] bg-[#FFFFFF] rounded-[30px] items-center justify-center flex">
          
            <div className="w-[15.859vw] border-r border-r-solid border-r-[#D9D9D9]">
              {renderDropdownSection(
                degreeList,
                degreeButton,
                setDegreeButton,
                isDegreeMoreOpen,
                setIsDegreeMoreOpen,
                setDegreeList,
                {},
                "degree",
                [setIsBranchMoreOpen, setIsPassOutMoreOpen],
                degreeSearchInput,
                setDegreeSearchInput
              )}
            </div>
            
          
          
            <div className="w-[15.859vw] border-r border-r-solid border-r-[#D9D9D9]">
              {renderDropdownSection(
                branchList,
                branchButton,
                setBranchButton,
                isBranchMoreOpen,
                setIsBranchMoreOpen,
                setBranchList,
                branchAbbreviations,
                "stream",
                [setIsDegreeMoreOpen, setIsPassOutMoreOpen],
                branchSearchInput,
                setBranchSearchInput
              )}
          
            </div>
           
            <div className="w-[15.859vw]">
              {renderDropdownSection(
                yopList,
                passOutButton,
                setPassOutButton,
                isPassOutMoreOpen,
                setIsPassOutMoreOpen,
                setYopList,
                {},
                "yop",
                [setIsDegreeMoreOpen, setIsBranchMoreOpen],
                yopSearchInput,
                setYopSearchInput
              )}
            </div>
           

          </div>



          <div className="flex justify-between items-center gap-[10vw] ml-[1vw]">
          <p className=" text-[14px] font-bold">Degree/Masters</p>
            <div className="w-[40.328vw]">
              {renderButtonSection(
                degreeList,
                degreeButton,
                setDegreeButton,
                isDegreeMoreOpen,
                setIsDegreeMoreOpen,
                setDegreeList,
                {},
                "degree",
                [setIsBranchMoreOpen, setIsPassOutMoreOpen],
                degreeSearchInput,
                setDegreeSearchInput
              )}
            </div>
          </div>
          <div className="flex justify-between items-center gap-[10vw] ml-[1vw]">
          <p className=" text-[14px] font-bold">Stream</p>
            <div className="w-[40.328vw]">
              {renderButtonSection(
                branchList,
                branchButton,
                setBranchButton,
                isBranchMoreOpen,
                setIsBranchMoreOpen,
                setBranchList,
                branchAbbreviations,
                "stream",
                [setIsDegreeMoreOpen, setIsPassOutMoreOpen],
                branchSearchInput,
                setBranchSearchInput
              )}
            </div>
            </div>
            <div className="flex justify-between items-center gap-[10vw] ml-[1vw]">
          <p className=" text-[14px] font-bold">Year of Passing</p>
            <div className="w-[40.328vw]">
              {renderButtonSection(
                yopList,
                passOutButton,
                setPassOutButton,
                isPassOutMoreOpen,
                setIsPassOutMoreOpen,
                setYopList,
                {},
                "yop",
                [setIsDegreeMoreOpen, setIsBranchMoreOpen],
                yopSearchInput,
                setYopSearchInput
              )}
            </div>
            </div>
          </>
        )}
      </section>
    </Suspense>
  );
};

export default Degree_Branch_Passout;
