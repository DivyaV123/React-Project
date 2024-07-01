"use client";
import React, { useContext, useState } from "react";
import NavItems from "../navItems/navItems";
import NavAuthButtons from "../authButtons/navAuthButtons";
import "./mainNavBar.scss";
import Link from "next/link";
import { HOME_PATH } from "@/lib/RouteConstants";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import MainNavPopup from "../../../app/navbar/MainNavPopup";
import { useRouter } from "next/navigation";
import { NAV_BAR } from "@/lib/RouteConstants";
import { GlobalContext } from "@/components/Context/GlobalContext";
function MainNavbar() {
  const router = useRouter();
  const handleHamburgerClick = () => {
    router.push(NAV_BAR);
  };
  const { domainVariable } = useContext(GlobalContext)
  return (
    <>
      <MaxWebWidth
        sectionStyling={`_navbarBlock h-[5.31vw] mobile:h-[5.579vh] flex`}
        articalStyling={"flex items-center justify-between h-full"}
      >
        <aside className="flex justify-between">
          <figure>
            {domainVariable === "qspiders" ?
              <>
                <Link href={HOME_PATH}>
                  <Svg
                    className={`mobile:w-[13.953vw] mobile:h-[4.077vh]`}
                    width={svgicons.qspiderslogo[0]}
                    height={svgicons.qspiderslogo[1]}
                    viewBox={svgicons.qspiderslogo[2]}
                    icon={svgicons.qspiderslogo[3]}
                    color={svgicons.qspiderslogo[4]}
                  />
                </Link>
              </>
              : domainVariable === "jspiders" ?
                <>
                  <Link href={""}>
                    <img src="../images/jpiders.png" />
                  </Link>
                </>
                : domainVariable === "pyspiders" ?
                  <>
                    <Link href={HOME_PATH}>
                      <img src="../images/pypiders.png" />
                    </Link>
                  </> :
                  <>
                    <Link href={HOME_PATH}>
                      <Svg
                        className={`mobile:w-[13.953vw] mobile:h-[4.077vh]`}
                        width={svgicons.qspiderslogo[0]}
                        height={svgicons.qspiderslogo[1]}
                        viewBox={svgicons.qspiderslogo[2]}
                        icon={svgicons.qspiderslogo[3]}
                        color={svgicons.qspiderslogo[4]}
                      />
                    </Link>
                  </>
            }


          </figure>
        </aside>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleHamburgerClick}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="../../icon_hamburger.svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <aside className="flex gap-4 items-center mobile:hidden">
          <aside
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <NavItems />
          </aside>

          <aside
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <NavAuthButtons />
          </aside>
        </aside>
      </MaxWebWidth >
      {/* <article >
                <figure className="absolute top-40 right-0 flex justify-end z-10">
                    <img className='w-[73%] hover:w-[80%] hover:translate-y-3 duration-300' src='./riteJspidersStickyLogo.png' alt="riteJspidersStickyLogo"></img>
                </figure>
            </article> */}
    </>
  );
}

export default MainNavbar;
