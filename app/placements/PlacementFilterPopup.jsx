import React, { useEffect, useState, useContext } from "react";
import {
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import "./PlacementCards.scss";
import "./Degree_Branch_passout.scss";
import { useGetAllDegreeAndStreamQuery } from "@/redux/queries/getDegreeAndStream";
import { useGetAllYearOfPassoutQuery } from "@/redux/queries/getYearOfPassout";
import { GlobalContext } from "@/components/Context/GlobalContext";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";

const PlacementFilterPopup = ({ setFIlterPopup }) => {
  const [degreeList, setDegreeList] = useState(true);
  const [branchList, setBranchList] = useState(false);
  const [yopList, setYopList] = useState(false);
  const [popupButton, setPopupButton] = useState("Degree");
  const [searchInput, setSearchInput] = useState("");
  const {
    setFilterPlacementData,
    setPlacementParam,
  } = useContext(GlobalContext);
  const {
    data: degreeAndStreamdata,
    error,
  } = useGetAllDegreeAndStreamQuery();
  const {
    data: yopData,
    error: yopError,
  } = useGetAllYearOfPassoutQuery();

  const handleDegreeList = (key) => {
    setDegreeList(true);
    setBranchList(false);
    setYopList(false);
    setPopupButton(key);
    setSearchInput("");
  };
  const handleBranchList = (key) => {
    setBranchList(true);
    setDegreeList(false);
    setYopList(false);
    setPopupButton(key);
    setSearchInput(""); 
  };
  const handleYopList = (key) => {
    setYopList(true);
    setBranchList(false);
    setDegreeList(false);
    setPopupButton(key);
    setSearchInput(""); 
  };

  const handleItemClick = (key, value) => {
    setFilterPlacementData({
      [key]: [value],
    });
    setPlacementParam("");
    setFIlterPopup(false);
  };

  const filteredDegrees = degreeAndStreamdata?.response?.degreeList?.filter((degree) =>
    degree.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredBranches = degreeAndStreamdata?.response?.streamList?.filter((stream) =>
    stream.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredYops = yopData?.response?.filter((yop) =>
    yop.toString().toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <AlertDialogContent className="w-full h-full block">
      <section className="flex justify-between my-[2.575vh] mx-[5.581vw] items-center">
        <div className="font-bold text-[4.651vw]">Filter</div>
        <AlertDialogCancel className="border-none hover:bg-white p-0 ">
          <Svg
            className="w-[6.512vw] h-[3.004vh] outline-none"
            width={svgicons.cancelButtonIcon[0]}
            height={svgicons.cancelButtonIcon[1]}
            viewBox={svgicons.cancelButtonIcon[2]}
            icon={svgicons.cancelButtonIcon[3]}
            color={svgicons.cancelButtonIcon[4]}
          />
        </AlertDialogCancel>
      </section>
      <section className="flex justify-between my-[2.575vh] mx-[5.581vw] items-center">
        <div
          className={`mobileRadius mobile:py-[0.429vh] mobile:px-[3.256vw] text-[3.256vw] ${popupButton === "Degree" ? "sideBarButton" : ""}`}
          onClick={() => handleDegreeList("Degree")}
        >
          Degree
        </div>
        <div
          className={`mobileRadius mobile:py-[0.429vh] mobile:px-[3.256vw] text-[3.256vw] ${popupButton === "Branch" ? "sideBarButton" : ""}`}
          onClick={() => handleBranchList("Branch")}
        >
          Branch
        </div>
        <div
          className={`mobileRadius mobile:py-[0.429vh] mobile:px-[3.256vw] text-[3.256vw] ${popupButton === "Year of Passout" ? "sideBarButton" : ""}`}
          onClick={() => handleYopList("Year of Passout")}
        >
          Year of Passout
        </div>
      </section>

      <section className="flex justify-between my-[2.575vh] mx-[5.581vw] items-center relative">
        <input
          type="text"
          className="w-full py-[1.073vh] pl-[3.721vw] text-[3.256vw] outline-none bg-[#FFF8F1] rounded-md"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div class="searchIcon"></div>
      </section>

      {degreeList && (
        <ul className="pl-[7.442vw]">
          {filteredDegrees?.map((degree, index) => (
            <li
              key={index}
              className="py-[0.858vh] text-[3.256vw]"
              onClick={() => {
                handleItemClick("degree", degree);
                setDegreeList(false);
              }}
            >
              {degree}
            </li>
          ))}
        </ul>
      )}
      {branchList && (
        <ul className="pl-[7.442vw]">
          {filteredBranches?.map((stream, index) => (
            <li
              key={index}
              className="py-[0.858vh] text-[3.256vw]"
              onClick={() => {
                handleItemClick("stream", stream);
                setBranchList(false);
              }}
            >
              {stream}
            </li>
          ))}
        </ul>
      )}
      {yopList && (
        <ul className="pl-[7.442vw]">
          {filteredYops?.map((yop, index) => (
            <li
              key={index}
              className="py-[0.858vh] text-[3.256vw]"
              onClick={() => {
                handleItemClick("yop", yop);
                setYopList(false);
              }}
            >
              {yop}
            </li>
          ))}
        </ul>
      )}
    </AlertDialogContent>
  );
};

export default PlacementFilterPopup;
