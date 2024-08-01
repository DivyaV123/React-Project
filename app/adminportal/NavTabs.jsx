'use client';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '@/components/Context/GlobalContext';
import './AdminSidebar.scss';
import { useGetAllCategoryQuery } from '@/redux/queries/adminCategorySortApi';

const NavTabs = () => {
  const [orgType, setOrgType] = useState('QSP')
  const { data: categoryData, refetch } = useGetAllCategoryQuery({ organizationType: orgType });
  const { selectedInstitute, setSelectedInstitute } = useContext(GlobalContext);
  useEffect(() => {
    refetch();
  }, [orgType]);
  const domains = [
    {
      title: "Qspiders",
      key: "QSP"
    },
    {
      title: "Jspiders",
      key: "JSP"
    },
    {
      title: "Pyspiders",
      key: "PYSP"
    },
    {
      title: "Prospiders",
      key: "PROSP"
    }
  ]
  const handleNavTab = async (item) => {
    setSelectedInstitute(item.title)
    setOrgType(item.key)
  }
  return (
    <section className='flex gap-4 mt-[1.389vh]'>
      {
        domains.map((item, index) => (
          <div key={index} className={`pt-[0.972vh] pb-[1.528vh] cursor-pointer px-[0.625vw]  ${selectedInstitute === item.title ? "text-[#FF7B1B] font-bold activeTab" : " font-medium text-[#212121] inActiveTab"}`} onClick={() => handleNavTab(item)}>
            <h1 className='text-[1.094vw] font-bold'>{item.title}</h1>
          </div>
        ))
      }
    </section>
  )
}

export default NavTabs