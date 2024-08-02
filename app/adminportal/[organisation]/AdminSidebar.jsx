"use client";
import React, { useContext ,useEffect} from "react";
import "./AdminSidebar.scss";
import AdminContent from "./AdminContent";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllCategoryQuery } from "@/redux/queries/adminCategorySortApi";
import { usePathname,useRouter } from "next/navigation";
import { ADMIN_PORTAL } from "@/lib/RouteConstants";
const AdminSidebar = () => {
  const { selectedSideBar, setSelectedSideBar } = useContext(GlobalContext);
  const router = useRouter();
  const pathname = usePathname();
  const getParams = pathname.split("/").slice(2);
  const [sidebarParam] = getParams[0].split(",").slice(0);
  const [instituteParam] = getParams[0].split(",").slice(1);
  const initialOrgType =
    instituteParam === "Qspiders"
      ? "QSP"
      : instituteParam === "Jspiders"
      ? "JSP"
      : instituteParam === "Pyspiders"
      ? "PYSP"
      : instituteParam === "Prospiders"
      ? "PROSP"
      : "QSP";

  const { data: categoryData, refetch } = useGetAllCategoryQuery({
    organizationType: initialOrgType,
  });
  useEffect(()=>{
    refetch();
  },[instituteParam])
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
    router.push(`${ADMIN_PORTAL}/${name},${instituteParam}`); 
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
                  sidebarParam === item.name
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
      <AdminContent categoryData={categoryData}/>
    </section>
  );
};

export default AdminSidebar;
