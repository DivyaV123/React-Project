'use client'
import React, { useEffect, useState } from "react";
import PlacementContent from "./PlacementContent";
import './PlacementSidebar.scss';
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllCitiesQuery } from "@/redux/queries/getAllCities";


const PlacementSideBar = () => {
  const [sideBarBtn, setSideBarBtn] = useState("Recent Placements")
  const { data: citydata, error, isLoading } = useGetAllCitiesQuery('Karnataka');

  const sideBar = [{
    title: "Recent Placements",
    icon: "../../icon_arrow_white.svg",
    blackIcon: "../../icon_arrow.svg"
  },
  {
    title: "Top Salaries",
    icon: "../../icon_arrow_white.svg",
    blackIcon: "../../icon_arrow.svg"
  },
  {
    title: "Last Week",
    icon: "../../icon_arrow_white.svg",
    blackIcon: "../../icon_arrow.svg"
  },
  {
    title: "Last month",
    icon: "../../icon_arrow_white.svg",
    blackIcon: "../../icon_arrow.svg"
  },
  {
    title: "Last 3 months",
    icon: "../../icon_arrow_white.svg",
    blackIcon: "../../icon_arrow.svg"
  },
  {
    title: "Last 6 months",
    icon: "../../icon_arrow_white.svg",
    blackIcon: "../../icon_arrow.svg"
  }

  ]
  const [isloading, setisLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 2000);
  }, [])
  return (
    <section className="flex ml-16 mb-8 h-[58.889vh]">
      {isloading ?
        <section className="flex flex-col justify-start items-end pt-8 w-[15%] gap-3 mb-8 h-[58.889vh]  border rounded-xl">
          <Skeleton className='h-9  w-full' />
          <Skeleton className='h-9 w-full' />
          <Skeleton className='h-9 w-full' />
          <Skeleton className='h-9  w-full' />
          <Skeleton className='h-9  w-full' />
          <Skeleton className='h-9  w-full' />
        </section>
        :
        <aside className="sidebarContainer pt-[3.333vh]">
          {sideBar.map((classItem, index) => (
            <button
              key={index}
              className={`flex justify-between items-center px-[1.25vw] py-[2.222vh] mb-[0.833vh] w-full text-[1.094vw] ${classItem.title === sideBarBtn ? "sideBarButton font-medium" : ""
                }`}
              onClick={() => { setSideBarBtn(classItem.title) }}
            >
              <div>

                {classItem.title}
              </div>
              <img className="text-white" src={classItem.title === sideBarBtn ? classItem.icon : classItem.blackIcon} />
            </button>
          ))}
        </aside>
      }
      {/* {islo} */}

      {isloading ?
        <section className='ml-6 w-[71.641vw] h-full flex overflow-y-scroll myscrollbar rounded border '>
          <div className="w-[15.547vw] flex m-3">
            <Skeleton className='h-[15vw] w-[71vw]' />
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <Skeleton className='h-4 w-[45vw]' />
            <Skeleton className='h-4 w-[45vw]' />
            <Skeleton className='h-4 w-[45vw]' />
            <Skeleton className='h-4 w-[45vw]' />
            <Skeleton className='h-4 w-[45vw]' />
            <Skeleton className='h-4 w-[45vw]' />
            <Skeleton className='h-4 w-[45vw]' />

          </div>
          <div className="flex flex-col ml-4 gap-3 mt-5">
            <Skeleton className='w-[7vw] h-[5vw] mb-5' />
            <Skeleton className='w-[7vw] h-[5vw]' />
          </div>
        </section>
        :
        <section className='ml-6 w-[71.641vw] h-full overflow-y-scroll myscrollbar'>
          <PlacementContent />
        </section>
      }

    </section>
  );
};

export default PlacementSideBar;
