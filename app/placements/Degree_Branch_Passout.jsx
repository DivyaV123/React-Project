"use client";
import React, { useEffect, useState, useContext } from "react";
import "./Degree_Branch_passout.scss";
import { useGetAllDegreeAndStreamQuery } from "@/redux/queries/getDegreeAndStream";
import { useGetAllYearOfPassoutQuery } from "@/redux/queries/getYearOfPassout";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { branchAbbreviations } from "@/lib/utils";
import BarSkeleton from "@/components/skeletons/BarSkeleton";

const Degree_Branch_Passout = ({isLoading}) => {
  const [isDegreeMoreOpen, setIsDegreeMoreOpen] = useState(false);
  const [isBranchMoreOpen, setIsBranchMoreOpen] = useState(false);
  const [isPassOutMoreOpen, setIsPassOutMoreOpen] = useState(false);
  const {
    setFilterPlacementData,
    setPlacementParam,
    degreeButton,
    setDegreeButton,
    branchButton,
    setBranchButton,
    passOutButton,
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
    placeCheckedIcon
  } = useContext(GlobalContext);

  const {
    data: degreeAndStreamdata,
    error,
  } = useGetAllDegreeAndStreamQuery();
  const {
    data: yopData,
    error: yopError,
  } = useGetAllYearOfPassoutQuery();

  const [degreeList, setDegreeList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [yopList, setYopList] = useState([]);

  useEffect(() => {
    if (degreeAndStreamdata) {
      setDegreeList(degreeAndStreamdata.response.degreeList);
      setBranchList(degreeAndStreamdata.response.streamList);
    }
    if (yopData) {
      setYopList([...(yopData?.response || [])].sort((a, b) => b - a));
    }
  }, [degreeAndStreamdata, yopData]);

  const handleToggleMore = (setMoreOpen, otherSetMoreStates) => {
    setMoreOpen((prevState) => !prevState);
    otherSetMoreStates.forEach(setState => setState(false));
  };

  const resetButtonStates = (exceptKey) => {
    if (exceptKey !== 'degree') setDegreeButton('');
    if (exceptKey !== 'stream') setBranchButton('');
    if (exceptKey !== 'yop') setPassOutButton('');
  };

  const handleItemClick = (item, items, setItems, setButtonState, key) => {
    const index = items.indexOf(item);
    if (index >= 6) {
      const newItems = [...items];
      const temp = newItems[5];
      newItems[5] = newItems[index];
      newItems[index] = temp;
      setItems(newItems);
      setButtonState(newItems[5]);
    } else {
      setButtonState(item);
    }
    setPlacementParam('');
    setFilterPlacementData({
      [key]: [item],
    });
    resetButtonStates(key);
  };

  const handleButtonClick = (item, setButtonState, key) => {
    resetButtonStates(key);
    setButtonState(item);
    setPlacementParam('');
    setSideBarBtn('');
    setPlacedCheckedIcon(false);
    setLessCheckedIcon(false);
    setThroughCheckedIcon(false);
    setNonItCheckedIcon(false);
    setItCheckedIcon(false);
    setFilterPlacementData({
      [key]: [item],
    });
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
    <div className="bg-white h-[2.65vw] flex w-full buttonSection relative">
      {items.slice(0, 6).map((item, index) => (
        <button
          key={index}
          className={`flex justify-center items-center w-[7.5vw] py-2 text-[0.63rem] ${
            item === buttonState && !lesscheckedIcon && !throughcheckedIcon && !itCheckedIcon && !nonItCheckedIcon && !placeCheckedIcon ? "activeButton font-medium" : ""
          }`}
          onClick={() => handleButtonClick(item, setButtonState, key)}
        >
          {abbreviations[item] || item}
        </button>
      ))}
      {items.length > 6 && (
        <button
          className="flex justify-center items-center w-[7.5vw] py-2 text-[0.63rem] text-[#4987CE] font-extrabold"
          onClick={() => handleToggleMore(setMoreState, otherSetMoreStates)}
        >
          {moreState ? "Less..." : "More..."}
        </button>
      )}
      {moreState && (
        <ul className="additional-years-list max-h-60 overflow-y-scroll myscrollbar">
          {items.slice(6).map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center w-[4.219vw] py-2 text-[0.63rem] text-[#707070] font-medium"
              onClick={() => {
                handleItemClick(item, items, setItems, setButtonState, key);
                setMoreState(false);
              }}
            >
              {abbreviations[item] || item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="mt-2 flex mb-4 ml-[1.5rem] mr-[2.25rem] gap-2">
      {isLoading ? (
        <BarSkeleton />
      ) : (
        <>
          <div className="w-[31.328vw]">
            <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">
              Degree
            </p>
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
            <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">
              Stream
            </p>
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
            <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">
              Year of passout
            </p>
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
  );
};

export default Degree_Branch_Passout;
