'use client'
import React,{useState} from "react";
import PlacementContent from "./PlacementContent";
import './PlacementSidebar.scss';
const PlacementSideBar = () => {
  const [sideBarBtn,setSideBarBtn]=useState("Recent Placements")
  const sideBar=[{
    title:"Recent Placements"
  },
  {
    title:"Top Salaries"
  },
  {
    title:"Last Week"
  },
  {
    title:"Last month"
  },
  {
    title:"Last 3 months"
  },
  {
    title:"Last 6 months"
  }

]
  return (
    <section className="flex ml-16 mb-8 h-[424px]">
      <aside className="sidebarContainer">
        {sideBar.map((classItem, index) => (
        <div className="py-8">
            <button
              key={index}
              className={` justify-center items-center px-4 py-2 font-medium float-right text-[0.938rem] text-dark-gray  ${
                classItem.title === sideBarBtn ? "sideBarButton" : ""
              }`}
              onClick={()=>{setSideBarBtn(classItem.title)}}
            >
              {classItem.title}
            </button>
          </div>
          ))}
      </aside>
      <section  className='ml-6 w-[71.641vw] h-full overflow-y-scroll myscrollbar'>
        <PlacementContent />
      </section>
    </section>
  );
};

export default PlacementSideBar;
