"use client";
import React, { useState, useCallback, useContext, useEffect } from "react";
import "./navitems.scss";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Courses from "./Courses";
import Branches from "./Branches";
import Tutions from "./Tutions";
import Link from "next/link";
import { InputIcon } from "@radix-ui/react-icons";
import {
  CONTACT_US_PATH,
  PLACEMENT_PATH,
  HIREFROMUS_PATH, CORPORATE_TRAINING
} from "@/lib/RouteConstants";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { usePathname, useRouter } from "next/navigation";
import UniversityProgram from "./UniversityProgram";
import OnlineCourses from "./OnlineCourses";
import { useGetAllOnlineCoursesQuery } from "@/redux/queries/getOnlineCoursesApi";
function NavItems() {
  const router = useRouter();
  const {
    setHomeBranchData,
    setDegreeButton,
    setBranchButton,
    setPassOutButton,
    setSideBarBtn,
    setThroughCheckedIcon,
    setLessCheckedIcon,
    setPlacedCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    setFilterPlacementData,
    hoverState, setHoverState, setCountryList
  } = useContext(GlobalContext);
  const {
    data: courseResponse,
    isLoading: CourseIsLoading,
    error: CourseError,
  } = useGetAllCategoriesQuery();
  const {
    data: BranchResponse,
    error: branchError,
    isLoading: branchIsLoading,
  } = useGetAllBranchesQuery();
  const {
    data: onlineCourseResponse,
    error: onlineCourseError,
    isLoading: onlineCourseIsLoading,
  } = useGetAllOnlineCoursesQuery();
  const navItems = [
    { id: 1, name: "All Courses", content: <Courses courseResponse={courseResponse} /> },
    { id: 2, name: "Offline Centres", content: <Branches BranchResponse={BranchResponse} /> },
    { id: 3, name: "Online Courses", content: <OnlineCourses courseResponse={onlineCourseResponse} /> },
    // { id: 3, name: "University Programs", content: <UniversityProgram /> },
    { id: 5, name: "Tuitions", content: <Tutions /> },
    { id: 4, name: "Corporate Training", content: "" },
    { id: 6, name: "Hire From Us", content: "" },
    { id: 7, name: "Placements", content: "" },
    { id: 8, name: "Contact Us", content: "" },
  ];
  const filterCountryObj = BranchResponse?.data?.filter(ele => ele?.countryName === 'India')
  const cityData = filterCountryObj?.[0]?.cities;
  setCountryList(BranchResponse?.data)
  setHomeBranchData(cityData);

  const [stateHovered, setStateHovered] = useState({
    item: "",
    state: false,
  });
  const handleItemHover = useCallback((itemName) => {
    if (
      [
        "All Courses",
        "Offline Centres",
        "Online Courses",
        "Tuitions",
        "University Programs",
      ]?.includes(itemName)
    ) {
      setHoverState({ item: itemName, content: true });
    } else {
      setHoverState({ item: null, content: false });
    }
  }, [setHoverState]);
  const handleItemLeave = useCallback(() => {
    setHoverState((prevState) => ({ ...prevState, item: null, content: false }));
  }, [setHoverState]);

  const handleContentHover = useCallback((isVisible, itemName) => {
    setHoverState((prevState) => ({ ...prevState, content: isVisible, item: isVisible ? itemName : null, }));
  }, [setHoverState]);


  useEffect(() => {
    if (!hoverState.content) {
      setHoverState((prevState) => ({
        ...prevState,
        item: null,
      }));
    }
  }, [hoverState.content, setHoverState]);
  const handleNavItems = (navItem) => {
    if (navItem === "Contact Us") {
      router.push(CONTACT_US_PATH);
    } else if (navItem === "Placements") {
      router.push(PLACEMENT_PATH);
      setFilterPlacementData({});
      setPlacedCheckedIcon(true);
      setLessCheckedIcon(false);
      setThroughCheckedIcon(false);
      setNonItCheckedIcon(false);
      setItCheckedIcon(false);
      setSideBarBtn("");
      setDegreeButton("");
      setBranchButton("");
      setPassOutButton("");
    } else if (navItem === "Corporate Training") {
      router.push(CORPORATE_TRAINING);
    } else if (navItem === "Hire From Us") {
      router.push(HIREFROMUS_PATH);
    }
  };


  const [activeItem, setActiveItem] = useState("");
  const pathname = usePathname();
  const params = pathname.split("/").pop();
  useEffect(() => {
    if (pathname) {
      const activeNavItem = navItems.find(
        (item) =>
          item.name.replace(/\s/g, "").toLowerCase().trim() ===
          params.toLowerCase()
      );

      if (activeNavItem) {
        setActiveItem(activeNavItem.name);
      } else {
        setActiveItem(null);
      }
    }
  }, [pathname, navItems]);

  return (
    <>
      <NavigationMenu
        hoverItem={hoverState.item}
        hoverContent={hoverState.content}
      >
        <NavigationMenuList>
          {navItems.map((navItem) => (
            <div
              key={navItem.id}
              onClick={() => handleNavItems(navItem.name)}
              onMouseLeave={handleItemLeave}
            >
              <NavigationMenuItem
                key={navItem.id}
                onMouseEnter={() => handleItemHover(navItem.name)}

              >
                <NavigationMenuTrigger
                  hoverItem={hoverState.item}
                  hoverContent={hoverState.content}
                >
                  <div className="flex flex-wrap  cursor-pointer font-medium ">
                    <span
                      // onMouseEnter={() =>
                      //   setStateHovered({
                      //     item: navItem.name,
                      //     state: true,
                      //   })
                      // }
                      className={
                        (hoverState.item === navItem.name ||
                          (hoverState.content &&
                            hoverState.item === navItem.name)) ||
                          activeItem === navItem.name
                          ? "text-orange-500 border-b-2 border-orange-500 h-[4vh] text-[1.094vw]  font-bold text-normal  text-slate "
                          : "menuHeader font-bold text-normal h-[4vh] text-slate hover-underline-animation  text-[1.094vw]"
                      }
                    >
                      {navItem.name}
                    </span>
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="nav-content"
                  onMouseEnter={() => handleContentHover(true, navItem.name)}
                  onMouseLeave={() => {
                    handleContentHover(false, navItem.name);
                    setStateHovered({
                      item: "",
                      state: false,
                    });
                  }}
                // onMouseEnter={() => handleContentHover(true, navItem.name)}
                // onMouseLeave={() => handleContentHover(false, navItem.name)}
                >
                  <div className=" mt-[0.83vw] border bg-popover shadow-lg rounded-xl overflow-hidden">

                    {navItem.content}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default NavItems;
