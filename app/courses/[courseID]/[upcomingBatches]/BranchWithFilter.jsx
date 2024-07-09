"use client";
import React, { useState, useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import WebLayout from "@/components/commonComponents/webLayout/WebLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import "./upComingBranches.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";

import BatchesCard from "./BatchesCard";

import UpcommingBatchModalMobileView from "./UpcommingBatchModalMobileView";

function BranchWithFilter() {
  const { selectedBatch, setSelectedBatch } = useContext(GlobalContext);
  const [openIndex, setOpenIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    
    setIsModalOpen(true);
    
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
   
  };
  const branchesList = [
    {
      Bengalore: [
        "Basavanagudi",
        "Old Airport Road",
        "Rajajinagar",
        "Hebbal",
        "BTM Layout",
      ],
    },
    { Hyderabad: [] },
    { Chennai: [] },
    { Pune: [] },
    { Mumbai: [] },
    { Noida: [] },
    { Gurugram: [] },
    { "New Delhi": [] },
    { Bhubaneswar: [] },
    { Kolkata: [] },
    { Ahmedabad: [] },
    { Chandigarh: [] },
    { Tirupati: [] },
    { Kochi: [] },
    { Mysore: [] },
  ];
  const handleAccordionToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  // const handleCheckboxChange = (checked, id) => {
  //   setSelectedBatch((prev) =>
  //     checked ? [...prev, id] : prev?.filter((item) => item !== id)
  //   );
  // };
  const handleCheckboxChange = (checked, id) => {
    setSelectedBatch((prev) =>
      Array.isArray(prev) ? (checked ? [...prev, id] : prev.filter((item) => item !== id)) : []
    );
  };
  return (
    <WebLayout>
      <section className="bg-[#F9F9F9] pb-6 px-[3.125vw]">
        <header className="font-bold text-[1.5rem] p-8 pl-0 mobile:text-[4.651vw] mobile:flex mobile:justify-between">
          <p>Upcoming Batches</p>
          <button  onClick={() => handleModalOpen()} className=" hidden mobile:flex mobile:gap-[1.163vw] rounded mobile:w-[23.256vw] mobile:bg-[#FFFFFF]  mobile:text-[3.956vw] mobile:justify-center mobile:items-center mobile:h-[4.841vh] mobile:text-[] mobile:font-bold"><span className="mobile:mx-1"><img src="../../icon_filter_black.png"/></span>Filter</button>
        </header>
        <section className="flex gap-x-[1.875vw] gap-y-[3.333vh]">
          <aside className="mobile:hidden">
            <article className="w-[18.984vw] h-[72.5vh] bg-[#FFFFFF] rounded overflow-y-scroll courseScroll">
              <header className="font-bold p-3">Filter</header>
              <h1 className="font-semibold text-black text-[0.875rem] bg-[#FFF9F4] w-full p-3 flex">
                Mode of class
              </h1>
              <RadioGroup
                className="flex justify-around p-4"
                defaultValue="Offline"
              >
                <div className="flex">
                  <RadioGroupItem className="" value="Online" />
                  <h1 className="text-[#454545] font-medium text-[0.875rem] pl-1">
                    Online
                  </h1>
                </div>
                <div className="flex">
                  <RadioGroupItem value="Offline" />
                  <h1 className="text-[#454545] font-medium text-[0.875rem] pl-1">
                    Offline
                  </h1>
                </div>
              </RadioGroup>
              <h1 className="font-semibold text-black text-[0.875rem] bg-[#FFF9F4] w-full p-3 flex">
                City
              </h1>
              <Accordion type="single" collapsible className="w-full">
                {branchesList.map((cityObj, index) => {
                  const cityName = Object.keys(cityObj)[0];
                  const branches = cityObj[cityName];
                  const cityId = cityName.toLowerCase().replace(/ /g, "");

                  return (
                    <AccordionItem
                      key={index}
                      value={`item-${index + 1}`}
                      isOpen={index === openIndex}
                    >
                      <AccordionTrigger
                        className="p-[1.111vh]"
                        onClick={() => handleAccordionToggle(index)}
                      >
                        <div className="p-[1.111vh]">
                          <div className="flex items-center space-x-[1.111vh]">
                            <Checkbox
                              checked={selectedBatch.includes(cityName)}
                              onCheckedChange={(checked) =>
                                handleCheckboxChange(checked, cityName)
                              }
                              id={cityId}
                            />
                            <label
                              htmlFor={cityId}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              <span className="text-gray font-medium text-[0.875]">
                                {cityName}
                              </span>
                            </label>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-[0.938vw]">
                        {branches.map((branch, branchIndex) => {
                          const branchId  = `${cityId}-${branch
                            .toLowerCase()
                            .replace(/ /g, "")}`;
                          return (
                            <div className="p-[1.111vh]" key={branchIndex}>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id={branchId}
                                  checked={selectedBatch.includes(branchId)}
                                  onCheckedChange={(checked) =>
                                    handleCheckboxChange(checked, branchId)
                                  }
                                />
                                <label
                                  htmlFor={branchId}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {branch}
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </article>
            <article></article>
          </aside>
          <aside className=" h-[72.5vh] overflow-hidden">
            <div className=" mobile:block mobile:w-[auto] mobile:px-[1vw] flex flex-wrap gap-x-[1.563vw] gap-y-[2.778vh] w-[70.078vw]  h-full overflow-y-scroll courseScroll">
              <BatchesCard />
            </div>
          </aside>
        </section>
      </section>
      <UpcommingBatchModalMobileView openIndex={openIndex} handleCheckboxChange={handleCheckboxChange} handleAccordionToggle={handleAccordionToggle} selectedBatch={selectedBatch} branchesList={branchesList} isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}/>
    </WebLayout>
  );
}

export default BranchWithFilter;
