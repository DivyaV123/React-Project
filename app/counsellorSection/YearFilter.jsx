'use client'
import React, { useState,useContext } from 'react'
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import "./CounserllorFilters.scss";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GlobalContext } from "@/components/Context/GlobalContext";
const YearFilter = () => {
  const { filteringData, setFilteringData ,handleFilter} = useContext(GlobalContext);
  const [yearItems, setYearItems] = useState([
    {
      id: "2023",
      label: "2023",
      checked: false,
    },
    {
      id: "2022",
      label: "2022",
      checked: false,
    },
    {
      id: "2021",
      label: "2021",
      checked: false,
    },
  ]);

  const [branchItems, setBranchItems] = useState([
    {
      id: "basavangudi",
      label: "Basavangudi",
      checked: false,
    },
    {
      id: "btm layout",
      label: "BTM Layout",
      checked: false,
    },
  ]);

  return (
    <div className="px-[1.875vw] pt-[2.778vh] timePeriod">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Year of Passing
        </p>
        <img src="../../down.svg" />
      </div>
      <div className="flex  gap-2.5 pb-[1.111vh]">
        <DropdownMenu>
          <DropdownMenuTrigger className="filterButton">From</DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className=' w-[100%] bg-white'>
              <DropdownMenuItem>2022</DropdownMenuItem>
              <DropdownMenuItem>2023</DropdownMenuItem>
              <DropdownMenuItem>2024</DropdownMenuItem>
              <DropdownMenuItem>2025</DropdownMenuItem>
              <DropdownMenuItem>2026</DropdownMenuItem>
              <DropdownMenuItem>2027</DropdownMenuItem>
              <DropdownMenuItem>2028</DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="filterButton">To</DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className=' w-[100%] bg-white flex flex-col item-center'>
              <DropdownMenuItem>2022</DropdownMenuItem>
              <DropdownMenuItem>2023</DropdownMenuItem>
              <DropdownMenuItem>2024</DropdownMenuItem>
              <DropdownMenuItem>2025</DropdownMenuItem>
              <DropdownMenuItem>2026</DropdownMenuItem>
              <DropdownMenuItem>2027</DropdownMenuItem>
              <DropdownMenuItem>2028</DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <>
        {yearItems.map((item, index) => (
          <Checkbox
            key={index}
            id={item.id}
            label={item.label}
            checked={item.checked}
            onChange={() => handleFilter(index, yearItems, setYearItems, 'yop')}
          />
        ))}
      </>
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Branch
        </p>
        <img src="../../down.svg" />
      </div>
      <>
        {branchItems.map((item, index) => (
          <Checkbox
            key={index}
            id={item.id}
            label={item.label}
            checked={item.checked}
            onChange={() => handleFilter(index, branchItems, setBranchItems, 'branchLocation')}
          />
        ))}
      </>
    </div>
  )
}

export default YearFilter