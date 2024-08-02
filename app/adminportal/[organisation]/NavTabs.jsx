"use client";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/components/Context/GlobalContext";
import "./AdminSidebar.scss";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_PORTAL } from "@/lib/RouteConstants";
const NavTabs = ({categoryData}) => {
  const router = useRouter();
  const pathname = usePathname();
  const getParams = pathname.split("/").slice(2);
  const [sidebarParam] = getParams[0].split(",").slice(0);
  const [instituteParam] = getParams[0].split(",").slice(1);

  const { selectedInstitute, setSelectedInstitute } = useContext(GlobalContext);
  const domains = [
    {
      title: "Qspiders",
      key: "QSP",
    },
    {
      title: "Jspiders",
      key: "JSP",
    },
    {
      title: "Pyspiders",
      key: "PYSP",
    },
    {
      title: "Prospiders",
      key: "PROSP",
    },
  ];
  const handleNavTab = async (item) => {
    setSelectedInstitute(item.title);
    router.push(`${ADMIN_PORTAL}/${sidebarParam},${item.title}`);
  };
  return (
    <section className="flex gap-4 mt-[1.389vh]">
      {domains.map((item, index) => (
        <div
          key={index}
          className={`pt-[0.972vh] pb-[1.528vh] cursor-pointer px-[0.625vw]  ${
            instituteParam === item.title
              ? "text-[#FF7B1B] font-bold activeTab"
              : " font-medium text-[#212121] inActiveTab"
          }`}
          onClick={() => handleNavTab(item)}
        >
          <h1 className="text-[1.094vw] font-bold">{item.title}</h1>
        </div>
      ))}
    </section>
  );
};

export default NavTabs;
