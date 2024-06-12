"use client";
import React, { useEffect, useState, useContext } from "react";
import "./Degree_Branch_passout.scss";
import { useGetAllDegreeAndStreamQuery } from "@/redux/queries/getDegreeAndStream";
import { useGetAllYearOfPassoutQuery } from "@/redux/queries/getYearOfPassout";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { branchAbbreviations } from "@/lib/utils";
import BarSkeleton from "@/components/skeletons/BarSkeleton";

const Degree_Branch_Passout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDegreeMoreOpen, setIsDegreeMoreOpen] = useState(false);
  const [isBranchMoreOpen, setIsBranchMoreOpen] = useState(false);
  const [isPassOutMoreOpen, setIsPassOutMoreOpen] = useState(false);
  const {
    setFilterPlacementData,
    setSalariedParam,
    degreeButton,
    setDegreeButton,
    branchButton,
    setBranchButton,
    passOutButton,
    setPassOutButton,
    setSideBarBtn,
  } = useContext(GlobalContext);

  const {
    data: degreeAndStreamdata,
    error,
    isLoading: isLoadingDegreeAndStream,
  } = useGetAllDegreeAndStreamQuery();
  const {
    data: yopData,
    error: yopError,
    isLoading: isLoadingYOP,
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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [degreeAndStreamdata, yopData]);

  const handleToggleMore = (setMoreOpen) => {
    setMoreOpen((prevState) => !prevState);
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
    setSalariedParam('');
    setFilterPlacementData({
      [key]: [item],
    });
  };

  const handleButtonClick = (item, setButtonState, setOtherButtonStates, key) => {
    setButtonState(item);
    setOtherButtonStates.forEach(setState => setState(''));
    setSalariedParam('');
    setSideBarBtn('');
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
    setOtherButtonStates
  ) => (
    <div className="bg-white h-[2.65vw] flex w-full buttonSection relative">
      {items.slice(0, 6).map((item, index) => (
        <button
          key={index}
          className={`flex justify-center items-center w-[7.5vw] py-2 text-[0.63rem] ${
            item == buttonState ? "activeButton font-medium" : ""
          }`}
          onClick={() => handleButtonClick(item, setButtonState, setOtherButtonStates, key)}
        >
          {abbreviations[item] || item}
        </button>
      ))}
      {items.length > 6 && (
        <button
          className="flex justify-center items-center w-[7.5vw] py-2 text-[0.63rem] text-[#4987CE]"
          onClick={() => handleToggleMore(setMoreState)}
        >
          {moreState ? "Less" : "More"}
        </button>
      )}
      {moreState && (
        <ul className="additional-years-list">
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
              [setBranchButton, setPassOutButton]
            )}
          </div>
          <div className="w-[31.328vw]">
            <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">
              Branch
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
              [setDegreeButton, setPassOutButton]
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
              [setDegreeButton, setBranchButton]
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Degree_Branch_Passout;
