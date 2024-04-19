'use client'
import React, { useState, useCallback } from "react";
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

const navItems = [
  { id: 1, name: "Courses", content: <Courses /> },
  { id: 2, name: "Branches", content: <Branches /> },
  { id: 3, name: "Tutions", content: <Tutions /> },
  { id: 4, name: "Hire From Us", content: "" },
  { id: 5, name: "Placements", content: "" },
  { id: 6, name: "Contact us", content: "" },
];

function NavItems() {
  const [hoverState, setHoverState] = useState({ item: null, content: false });
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
          <NavigationMenuItem key={navItem.id}
            onMouseEnter={() => handleItemHover(navItem.name)}
            onMouseLeave={handleItemLeave}
          >
            <NavigationMenuTrigger hoverItem={hoverState.item} hoverContent={hoverState.content}>
              <div className="flex flex-wrap space-x-9 cursor-pointer font-medium">
                <span className="menuHeader text-normal text-slate hover-underline-animation">{navItem.name}</span>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent
              className="nav-content"
              onMouseEnter={() => handleContentHover(true)}
              onMouseLeave={() => handleContentHover(false)}
            >
                {navItem.content}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default NavItems;
