'use client'
import React, { useEffect, useState } from "react";
import PlacementContent from "./PlacementContent";
import './PlacementSidebar.scss';
import { Skeleton } from "@/components/ui/skeleton";
const PlacementSideBar = () => {
  const [sideBarBtn, setSideBarBtn] = useState("Recent Placements")
  const sideBar = [{
    title: "Recent Placements"
  },
  {
    title: "Top Salaries"
  },
  {
    title: "Last Week"
  },
  {
    title: "Last month"
  },
  {
    title: "Last 3 months"
  },
  {
    title: "Last 6 months"
  }

  ]
  const [isloading, setisLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 2000);
  }, [])
  return (
    <section className="flex ml-16 mb-8 h-[424px]">
      {isloading ?
        <section className="flex flex-col justify-start items-end pt-8 w-[15%] gap-3 mb-8 h-[424px] border rounded-xl">
          <Skeleton className='h-9 rounded-s-2xl w-[80%]' />
          <Skeleton className='h-9 rounded-s-2xl w-[80%]' />
          <Skeleton className='h-9 rounded-s-2xl w-[80%]' />
          <Skeleton className='h-9 rounded-s-2xl w-[80%]' />
          <Skeleton className='h-9 rounded-s-2xl w-[80%]' />
          <Skeleton className='h-9 rounded-s-2xl w-[80%]' />
          <Skeleton className='h-9 rounded-s-2xl w-[80%]' />
          <Skeleton className='h-9 rounded-s-2xl w-[80%]' />
          <Skeleton className='h-9 rounded-s-2xl w-[80%]' />
        </section>
        :
        <aside className="sidebarContainer">
          {sideBar.map((classItem, index) => (
            <div className="py-8">
              <button
                key={index}
                className={` justify-center items-center px-4 py-2  float-right  ${classItem.title === sideBarBtn ? "sideBarButton font-medium  text-[0.938rem]" : ""
                  }`}
                onClick={() => { setSideBarBtn(classItem.title) }}
              >
                {classItem.title}
              </button>
            </div>
          ))}
        </aside>
      }
      {/* {islo} */}

      {isloading ?
        <section className='ml-6 w-[71.641vw] h-full flex overflow-y-scroll myscrollbar rounded border h-[17vw]'>
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
