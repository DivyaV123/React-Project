'use client'
import React, { useEffect, useState } from "react";
import "./PlacementCards.scss";
import { Skeleton } from "@/components/ui/skeleton";
import TotalPlacedCard from "./TotalPlacedCard";
import DegreeCard from "./DegreeCard";
import NonItCard from "./NonItCard";
import BranchCard from "./BranchCard";
import OverviewCard from "./OverviewCard";
const PlacementCards = () => {
  const [isloading, setisLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 2000);
  }, [])
  return (
    <div className="flex mb-4 ml-[1.5rem] mr-[2.25rem] gap-[1.875rem]">
      {isloading ?
        <div className=" flex flex-col gap-2 justify-center  w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
          <Skeleton className='h-7 w-[50%] ml-2' />
          <Skeleton className='h-10 w-[70%] ml-2' />
        </div>
        :
        <TotalPlacedCard/>
      }
      {isloading ? <div className="flex flex-col gap-2 justify-around w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <Skeleton className='h-7 w-[7vw] ml-2 mt-2' />
            <Skeleton className='h-10 w-[10vw] ml-2 mt-3' />
          </div>
          <Skeleton className='h-[8vw] w-[25%] mr-2' />
        </div>
      </div>
        :
        <DegreeCard/>
      }
      {isloading ?
        <div className="flex flex-col gap-2 justify-around w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <Skeleton className='h-7 w-[7vw] ml-2 mt-2' />
              <Skeleton className='h-10 w-[10vw] ml-2 mt-3' />
            </div>
            <Skeleton className='h-[8vw] w-[25%] mr-2' />
          </div>
        </div> :
        <NonItCard/>
      }
      {isloading ?
        <div className="flex flex-col gap-2 justify-around w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <Skeleton className='h-7 w-[7vw] ml-2 mt-2' />
              <Skeleton className='h-10 w-[10vw] ml-2 mt-3' />
            </div>
            <Skeleton className='h-[8vw] w-[25%] mr-2' />
          </div>
        </div> :
        <BranchCard/>
      }
      {isloading ?
        <div className="flex flex-col gap-2 justify-around w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <Skeleton className='h-7 w-[7vw] ml-2 mt-2' />
              <Skeleton className='h-10 w-[10vw] ml-2 mt-3' />
            </div>
            <Skeleton className='h-[8vw] w-[25%] mr-2' />
          </div>
        </div> :
        <OverviewCard/>
      }
    </div>
  );
};

export default PlacementCards;
