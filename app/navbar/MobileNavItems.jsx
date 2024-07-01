'use client'
import React,{useState} from 'react'
import NavAuthButtons from '../../components/navHome/authButtons/navAuthButtons'
import {
  PLACEMENT_PATH,
  HIREFROMUS_PATH,
  CONTACT_US_PATH,
  COURSE_NAV_BAR,
  BRANCH_NAV_BAR
} from "@/lib/RouteConstants";
import { useRouter } from 'next/navigation';
const MobileNavItems = () => {
  const router = useRouter()
const [coursePopup,setCoursePopup] = useState(false)
  const navItems = [
    { id: 1, name: "Courses", content: COURSE_NAV_BAR },
    { id: 2, name: "Branches", content: BRANCH_NAV_BAR },
    { id: 3, name: "Tuitions", content: "" },
    { id: 4, name: "Hire From Us", content: HIREFROMUS_PATH },
    { id: 5, name: "Placements", content: PLACEMENT_PATH },
    { id: 6, name: "Contact us", content: CONTACT_US_PATH },
  ];
  const handleNavItemClick=(content)=>{
    if(content===""){
      setCoursePopup(true)
    }
    router.push(content)
  }
  return (
    <section className="flex flex-col mx-[3.721vw]">
        <>
          {navItems.map((item) => (
            <>

            <button
              key={item.id}
              className="flex justify-between font-semibold text-[2.791vw] mt-[1.717vh] mb-[0.858vh] py-[1.073vh]"
              onClick={()=>handleNavItemClick(item.content)}
            >
              {item.name}
              <img
                className=""
                src="/arrow_right.svg"
              />
            </button>
            </>
          ))}
          <NavAuthButtons />
        </>
      </section>
  )
}

export default MobileNavItems