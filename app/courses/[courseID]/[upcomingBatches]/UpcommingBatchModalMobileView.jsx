'use client'
import React ,{useEffect}from 'react'
import "./upComingBranches.scss"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Checkbox } from "@/components/ui/checkbox";
  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const UpcommingBatchModalMobileView = ({isModalOpen,handleCloseModal,openIndex,handleAccordionToggle,handleCheckboxChange,selectedBatch,branchesList}) => {
   
  useEffect(() => {
    const body = document.body;
    const scrollbarWidth = window.innerWidth - body.clientWidth;

    if (isModalOpen) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;
  const filterClass = "text-[#002248] text-[1.25vw] font-semibold mobile:text-[4.651vw]";
  
  return (
    <div className="upcomingBatchFilterModal">
      <div className="modal-overlay">
        <div className="modal">
        
        <aside className="filterSidebar myscrollbar  ">
            <div className="flex pb-[2.222vh] px-[1.875vw] bg-[#FFFFFF] mobile:px-[7.875vw] pt-[3.333vh] justify-between filterHeader">
              <div className="flex gap-2">
                <button className={filterClass}>Filter</button>
                
              </div>
             
              <div className="modal-header">
        
          <button className="close-button" onClick={()=>{handleCloseModal()}}>
            &times;
          </button>
        </div>

            </div>
            <section className="flex gap-x-[1.875vw] gap-y-[3.333vh]">
          <aside className="">
            <article className="w-[100vw] h-[100vh] bg-[#FFFFFF] rounded overflow-y-visible courseScroll">
              
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
          
        </section>
           
            
          </aside>
            </div>
            </div>
        </div>
  )
}

export default UpcommingBatchModalMobileView