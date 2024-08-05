"use client";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/components/Context/GlobalContext";
import "./AdminSidebar.scss";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_PORTAL } from "@/lib/RouteConstants";
import Input from "@/components/commonComponents/input/Input";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
const NavTabs = () => {
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
    <>
      <section className="flex gap-4 mt-[1.389vh]  pl-[1.875vw]">
        {domains.map((item, index) => (
          <div
            key={index}
            className={`pt-[0.972vh] pb-[1.528vh] cursor-pointer px-[0.625vw]  ${instituteParam === item.title
              ? "text-[#FF7B1B] font-bold activeTab"
              : " font-medium text-[#212121] inActiveTab"
              }`}
            onClick={() => handleNavTab(item)}
          >
            <h1 className="text-[1.094vw] font-bold">{item.title}</h1>
          </div>
        ))}
      </section>
      <article className="flex justify-between">
        <div className="pt-[2.222vh] pl-[1.875vw] w-[29.688vw]">
          <Input
            inputStyle="rounded-md"
            placeholder="search"
            iconPath="/images/icon_outline_search.png"
          />
        </div>
        <aside className="pt-[2.778vh] pr-[1.875vw]">
          <div className=" bg-gradient rounded-md py-[1.111vh] px-[0.938vw] text-white font-bold flex gap-2 text-[1.094vw]">
            <Svg
              width={svgicons.addIcon[0]}
              height={svgicons.addIcon[1]}
              viewBox={svgicons.addIcon[2]}
              icon={svgicons.addIcon[3]}
              color={svgicons.addIcon[4]}
            />
            <button
              className=""
            >Sub Category</button>
          </div>
        </aside>

      </article>
    </>
  );
};

export default NavTabs;
