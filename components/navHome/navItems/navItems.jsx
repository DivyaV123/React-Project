'use client'
import React, { useState, useCallback, useContext } from "react";
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
import { CONTACT_US_PATH, PLACEMENT_PATH, HIREFROMUS_PATH } from "@/lib/RouteConstants";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { GlobalContext } from "@/components/Context/GlobalContext";
import UniversityProgram from "./UniversityProgram";


function NavItems() {
  const { setHomeBranchData } = useContext(GlobalContext)
  const { data: courseResponse, isLoading: CourseIsLoading, error: CourseError } = useGetAllCategoriesQuery()
  const { data: BranchResponse, error: branchError, isLoading: branchIsLoading } = useGetAllBranchesQuery()
  const navItems = [
    { id: 1, name: "Courses", content: <Courses courseResponse={courseResponse} /> },
    { id: 2, name: "Branches", content: <Branches BranchResponse={BranchResponse} /> },
    { id: 3, name: "University Program", content:  <UniversityProgram /> },
    { id: 4, name: "Tuitions", content: <Tutions /> },
    { id: 5, name: "Hire From Us", content: "" },
    { id: 6, name: "Placements", content: "" },
    { id: 7, name: "Contact us", content: "" },
  ];
  setHomeBranchData(BranchResponse?.data[0]?.cities)
  const [hoverState, setHoverState] = useState({ item: null, content: false });
  const [stateHovered, setStateHovered] = useState({
    item: '',
    stste: false
  })
  const handleItemHover = useCallback((itemName) => {
    if (["Courses", "Branches", "Tutions"].includes(itemName)) {
      setHoverState({ item: itemName });
    } else {
      setHoverState({ item: null });
    }
  }, []);

  const handleItemLeave = useCallback(() => {
    setHoverState((prevState) => ({ ...prevState, item: null }));
  }, []);

  const handleContentHover = useCallback((isVisible) => {
    setHoverState((prevState) => ({ ...prevState, content: isVisible }));
  }, []);

  return (
    <>
      <NavigationMenu hoverItem={hoverState.item} hoverContent={hoverState.content}>
        <NavigationMenuList>
          {navItems.map((navItem) => (
            <Link href={navItem.name === 'Contact us' ? CONTACT_US_PATH : navItem.name === 'Placements' ? PLACEMENT_PATH : navItem.name === 'Hire From Us' ? HIREFROMUS_PATH : ""}>
              <NavigationMenuItem key={navItem.id}
                onMouseEnter={() => handleItemHover(navItem.name)}
                onMouseLeave={handleItemLeave}
              >
                <NavigationMenuTrigger hoverItem={hoverState.item} hoverContent={hoverState.content}>
                  <div className="flex flex-wrap space-x-9 cursor-pointer font-medium">
                    {console.log(hoverState.item, hoverState.content, "hoverState.item ")}
                    <span
                      onMouseEnter={() => setStateHovered({
                        item: navItem.name,
                        stste: true
                      })}
                      className={(stateHovered.item === navItem.name && stateHovered.stste) ? "text-orange-500 border-b-2 border-orange-500" : "menuHeader font-bold text-normal text-slate hover-underline-animation  text-base 2xl:text-lg 3xl:text-xl"}>
                      {navItem.name}
                    </span>
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="nav-content"
                  onMouseEnter={() => handleContentHover(true)}
                  onMouseLeave={() => {
                    handleContentHover(false);
                    setStateHovered({
                      item: '',
                      stste: false
                    })
                  }}
                >
                  {navItem.content}
                </NavigationMenuContent>
              </NavigationMenuItem></Link>
          ))}
        </NavigationMenuList>
      </NavigationMenu >
    </>
  );
}

export default NavItems;
