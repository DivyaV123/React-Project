'use client';
import React,{useContext} from 'react'
import { GlobalContext } from '@/components/Context/GlobalContext';
import './AdminSidebar.scss';
const NavTabs = () => {
  const {selectedInstitute,setSelectedInstitute}=useContext(GlobalContext);
  const domains=["Qspiders","Jspiders","Pyspiders","Bspiders"]
  const handleNavTab=(item)=>{
    setSelectedInstitute(item)
  }
  return (
    <section className='flex gap-4 mt-[1.389vh]'>
    {
      domains.map((item,index)=>(
        <div key={index} className={`pt-[0.972vh] pb-[1.528vh] cursor-pointer px-[0.625vw]  ${selectedInstitute === item ? "text-[#FF7B1B] font-bold activeTab" : " font-medium text-[#212121] inActiveTab"}`} onClick={()=>handleNavTab(item)}>
          <h1 className='text-[1.094vw] font-bold'>{item}</h1>
        </div>
      ))
    }
    </section>
  )
}

export default NavTabs