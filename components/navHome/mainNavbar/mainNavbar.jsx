import React from "react";
import NavItems from "../navItems/navItems";
import NavAuthButtons from "../authButtons/navAuthButtons";
import "./mainNavBar.scss";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";

function MainNavbar() {
  return (
    <>
      <MaxWebWidth
        sectionStyling={`_navbarBlock flex`}
        articalStyling={"flex items-center justify-between h-full"}
      >
        <aside className="flex justify-between">
          <figure>
            <picture>
              <img
                className="QspidersLogos"
                src="/QspidersLogo.svg"
                alt="QspidersLogo Logo"
              />
            </picture>
          </figure>
        </aside>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
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
        <aside className="flex gap-4 items-center">
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
      </MaxWebWidth>
      {/* <article >
                <figure className="absolute top-40 right-0 flex justify-end z-10">
                    <img className='w-[73%] hover:w-[80%] hover:translate-y-3 duration-300' src='./riteJspidersStickyLogo.png' alt="riteJspidersStickyLogo"></img>
                </figure>
            </article> */}
    </>
  );
}

export default MainNavbar;
