"use client";
import React, { useContext } from "react";
import "./AdminSidebar.scss";
import AdminContent from "./AdminContent";
import { GlobalContext } from "@/components/Context/GlobalContext";
const AdminSidebar = () => {
  const { selectedSideBar, setSelectedSideBar } = useContext(GlobalContext);
  const sideBarList = [
    {
      name: "Category",
      icon: "../../icon_outline_category.svg",
    },
    {
      name: "Sub Category",
      icon: "../../subcategory_icon.svg",
    },
    {
      name: "Course",
      icon: "../../course_icon_admin.svg",
    },
    {
      name: "Subject",
      icon: "../../subject_icon_admin.svg",
    },
    {
      name: "City",
      icon: "../../icon_outline_city.svg",
    },
    {
      name: "Branch",
      icon: "../../icon_outline_branch.svg",
    },
  ];
  const handleSideBar = (name) => {
    setSelectedSideBar(name);
  };
  return (
    <section className="flex  w-full h-[100vh]">
      <aside className="w-[17.188vw] rounded-r-2xl  bg-white h-full mx-[1.25vw] pt-[2.222vh]">
        <picture>
          <img src="../../adminqspiders.svg" className="pb-[2.222vh]" />
        </picture>
        <section className="mt-[2.222vh]">
          {sideBarList.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex items-center gap-1.5 cursor-pointer text-[1.094vw] py-[1.25vh] px-[0.625vw] my-[0.694vh] ${
                  selectedSideBar === item.name
                    ? "bg-[#FF7B1B] text-white  font-bold rounded-md"
                    : "text-[#6E6E6E] font-medium"
                } `}
                onClick={() => handleSideBar(item.name)}
              >
                <picture>
                  <img src={item.icon} />
                </picture>
                <button className="">{item.name}</button>
              </div>
            );
          })}
        </section>
      </aside>
      <AdminContent />
    </section>
  );
};

export default AdminSidebar;
