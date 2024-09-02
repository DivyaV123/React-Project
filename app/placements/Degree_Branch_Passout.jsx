"use client";
import React, { useEffect, useState, useContext } from "react";
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

const Degree_Branch_Passout = ({ isLoading, scrollToTop }) => {
  const [isDegreeMoreOpen, setIsDegreeMoreOpen] = useState(false);
  const [isBranchMoreOpen, setIsBranchMoreOpen] = useState(false);
  const [isPassOutMoreOpen, setIsPassOutMoreOpen] = useState(false);
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
  } = useContext(GlobalContext);

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
        }));
        setDegreeList(getDegree);
    }

    if (streamData) {
        const getStream = streamData?.results?.map((stream) => ({
            id: stream.id,
            name: stream.short_form || stream.name,
            qualification_type_name: stream.qualification_type_name,
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
  };

  const resetButtonStates = (exceptKey) => {
    if (exceptKey !== "degree") setDegreeButton("");
    if (exceptKey !== "stream") setBranchButton("");
    if (exceptKey !== "yop") setPassOutButton("");
  };
  const handleItemClick = (item, items, setItems, setButtonState, key) => {
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
    setItCheckedIcon(false);
    setFilterPlacementData({
      [key]: [item.id],
    });
    resetButtonStates(key);
  };

  const handleButtonClick = (item, setButtonState, key) => {
    scrollToTop();
    resetButtonStates(key);
    setButtonState(item.name);
    setPlacementParam("");
    setSideBarBtn("");
    setPlacedCheckedIcon(false);
    setLessCheckedIcon(false);
    setThroughCheckedIcon(false);
    setNonItCheckedIcon(false);
    setItCheckedIcon(false);
    setFilterPlacementData({
      [key]: [item.id],
    });
  
    const qualificationKeyMap = {
      Degree: {
        degree: "degree_id",
        stream: "d_stream_id",
      },
      Masters: {
        degree: "masters_id",
        stream: "m_stream_id",
      }
    };
  
    const keyToUpdate = qualificationKeyMap[item?.qualification_type_name]?.[key];
  
    if (keyToUpdate) {
      setFilteredRange({
        [keyToUpdate]: item.id,
      });
    }
    if(key==="yop"){
      setFilteredRange({
        highestyop: item.name,
      });
    }
  };
  

  const renderButtonSection = (
    items,
    buttonState,
    setButtonState,
    moreState,
    setMoreState,
    setItems,
    abbreviations,
    key,
    otherSetMoreStates
  ) => (
    <div className="bg-white h-[2.65vw] flex w-full buttonSection relative mobile:hidden">
      {items?.slice(0, 6).map((item, index) => (
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
            setPage(0);
          }}
          title={item.name}
        >
          {toProperCase(truncateText(item.name, 6))}
        </button>
      ))}
      {items?.length > 6 && (
        <button
          className="flex justify-center items-center w-[7.5vw] py-2 text-[0.938vw] text-[#4987CE] font-extrabold"
          onClick={() => handleToggleMore(setMoreState, otherSetMoreStates)}
        >
          {moreState ? "Less..." : "More..."}
        </button>
      )}
      {moreState && (
        <ul className="additional-years-list max-h-60 overflow-y-scroll myscrollbar">
          {items?.slice(6).map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center w-[4.219vw] py-2 text-[0.938vw] text-[#707070] font-medium"
              onClick={() => {
                handleItemClick(item, items, setItems, setButtonState, key);
                setMoreState(false);
              }}
              title={item.name}
            >
              {toProperCase(truncateText(item.name, 6))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  //NOTE : this below useEffect for auto selecting the degree and stream values by taking values from URL(it helps when we are comming from Homepage for auto selecting)
  useEffect(() => {
    const streamFromURL = searchParams.get("stream");
    const degreeFromURL = searchParams.get("degree");

    if (
      streamFromURL &&
      branchList.length > 6 &&
      !branchList.slice(0, 6).some((item) => item.name === streamFromURL)
    ) {
      if (branchList.some((item) => item.name === streamFromURL)) {
        const newBranchItems = [...branchList];
        const branchLastIndex = 5;
        const branchUrlItemIndex = newBranchItems.findIndex(
          (item) => item.name === streamFromURL
        );
        [newBranchItems[branchLastIndex], newBranchItems[branchUrlItemIndex]] =
          [newBranchItems[branchUrlItemIndex], newBranchItems[branchLastIndex]];
        setBranchList(newBranchItems);
        setBranchButton(streamFromURL);
      }
    }

    if (
      degreeFromURL &&
      degreeList?.length > 6 &&
      !degreeList.slice(0, 6).some((item) => item.name === degreeFromURL)
    ) {
      if (degreeList.some((item) => item.name === degreeFromURL)) {
        const newDegreeItems = [...degreeList];
        const degreeLastIndex = 5;
        const degreeUrlItemIndex = newDegreeItems.findIndex(
          (item) => item.name === degreeFromURL
        );
        [newDegreeItems[degreeLastIndex], newDegreeItems[degreeUrlItemIndex]] =
          [newDegreeItems[degreeUrlItemIndex], newDegreeItems[degreeLastIndex]];
        setDegreeList(newDegreeItems);
        setDegreeButton(degreeFromURL);
      }
    }
  }, [
    searchParams,
    branchList,
    setBranchList,
    setBranchButton,
    degreeList,
    setDegreeList,
    setDegreeButton,
  ]);

  return (
    <Suspense>
      <section className="mt-2 flex mb-4 ml-[1.5rem] mr-[2.25rem] gap-2 mobile:hidden">
        {isLoading ? (
          <BarSkeleton />
        ) : (
          <>
            <div className="w-[31.328vw]">
              {renderButtonSection(
                degreeList,
                degreeButton,
                setDegreeButton,
                isDegreeMoreOpen,
                setIsDegreeMoreOpen,
                setDegreeList,
                {},
                "degree",
                [setIsBranchMoreOpen, setIsPassOutMoreOpen]
              )}
            </div>
            <div className="w-[31.328vw]">
              {renderButtonSection(
                branchList,
                branchButton,
                setBranchButton,
                isBranchMoreOpen,
                setIsBranchMoreOpen,
                setBranchList,
                branchAbbreviations,
                "stream",
                [setIsDegreeMoreOpen, setIsPassOutMoreOpen]
              )}
            </div>
            <div className="w-[31.328vw]">
              {renderButtonSection(
                yopList,
                passOutButton,
                setPassOutButton,
                isPassOutMoreOpen,
                setIsPassOutMoreOpen,
                setYopList,
                {},
                "yop",
                [setIsDegreeMoreOpen, setIsBranchMoreOpen]
              )}
            </div>
          </>
        )}
      </section>
    </Suspense>
  );
};

export default Degree_Branch_Passout;
