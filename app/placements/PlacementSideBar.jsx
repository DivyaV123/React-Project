'use client'
import React, { useContext, useEffect, useState } from "react";
import PlacementContent from "./PlacementContent";
import './PlacementSidebar.scss';
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchCounsellorsQuery } from "@/redux/queries/counsellorsApi";
import { GlobalContext } from "@/components/Context/GlobalContext";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";

const PlacementSideBar = () => {
  const [accumulatedData, setAccumulatedData] = useState([]);
  const { filteringData, page, size, setPage, setSize, handleScroll } = useContext(GlobalContext)
  const [sideBarBtn, setSideBarBtn] = useState("Recent Placements")
  const { data: counsellorFilterResponse, error, refetch } = useFetchCounsellorsQuery({
    pageNumber: page,
    pageSize: size,
    bodyData: filteringData
  });
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

  useEffect(() => {
    refetch();
  }, [page, size]);

  useEffect(() => {
    if (counsellorFilterResponse) {
      setAccumulatedData(prevData => [...prevData, ...counsellorFilterResponse?.response?.candidates?.content||[]]);
    } 
  }, [counsellorFilterResponse]);
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
        <CardContentSkeleton/>
        :
        <section
          onScroll={(event) => {
            handleScroll(event, page, setPage, counsellorFilterResponse)
          }}
          className='ml-6 w-[71.641vw] h-full overflow-y-scroll myscrollbar'>
          <PlacementContent counsellorFilterResponse={counsellorFilterResponse?.response?.candidates?.content} />
        </section>
      }

    </section>
  );
};

export default PlacementSideBar;
