'use client'
import React, { useEffect, useState, useContext } from 'react'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import { Checkbox } from "@/components/ui/checkbox"
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import './upComingBranches.scss'
import { GlobalContext } from '@/components/Context/GlobalContext'

import BatchesCard from './BatchesCard'

function BranchWithFilter() {
    const { selectedBatch, setSelectedBatch } = useContext(GlobalContext);
    const [openIndex, setOpenIndex] = useState(-1);
    const branchesList = [
        { Bengalore: ['Basavanagudi', 'Old Airport Road', 'Rajajinagar', 'Hebbal', 'BTM Layout'] },
        { Hyderabad: [] },
        { Chennai: [] },
        { Pune: [] },
        { Mumbai: [] },
        { Noida: [] },
        { Gurugram: [] },
        { 'New Delhi': [] },
        { Bhubaneswar: [] },
        { Kolkata: [] },
        { Ahmedabad: [] },
        { Chandigarh: [] },
        { Tirupati: [] },
        { Kochi: [] },
        { Mysore: [] },
        { 'View all Cities': [] }
    ]
    const handleAccordionToggle = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };
    const handleCheckboxChange = (checked, id) => {
        setSelectedBatch(prev =>
            checked ? [...prev, id] : prev.filter(item => item !== id)
        );
    };
    return (
        <WebLayout>
            <MaxWebWidth sectionStyling='bg-[#F9F9F9]' articalStyling='!w-[94.5vw] pb-6' >
                <header className='font-bold text-[1.5rem] p-8 pl-0'>
                    Upcomming Batches
                </header>
                <section className='flex gap-2'>
                    <aside className='basis-[22%]'>
                        <article className='w-[18.75vw] h-[40.781vw] bg-[#FFFFFF] rounded overflow-y-scroll courseScroll'>
                            <header className='font-bold p-3'>Filter</header>
                            <h1 className='font-semibold text-black text-[0.875rem] bg-[#FFF9F4] w-full p-3 flex'>Mode of class</h1>
                            <RadioGroup className='flex justify-around p-4' defaultValue="Offline">
                                <div className='flex'>
                                    <RadioGroupItem className='' value="Online" />
                                    <h1 className='text-[#454545] font-medium text-[0.875rem] pl-1'>Online</h1>
                                </div>
                                <div className='flex'>
                                    <RadioGroupItem value="Offline" />
                                    <h1 className='text-[#454545] font-medium text-[0.875rem] pl-1'>Offline</h1>
                                </div>
                            </RadioGroup>
                            <h1 className='font-semibold text-black text-[0.875rem] bg-[#FFF9F4] w-full p-3 flex'>City</h1>
                            <Accordion type="single" collapsible className="w-full">
                                {branchesList.map((cityObj, index) => {
                                    const cityName = Object.keys(cityObj)[0];
                                    const branches = cityObj[cityName];
                                    const cityId = cityName.toLowerCase().replace(/ /g, '');

                                    return (
                                        <AccordionItem key={index} value={`item-${index + 1}`} isOpen={index === openIndex}>
                                            <AccordionTrigger className='p-2' onClick={() => handleAccordionToggle(index)}>
                                                <div className='p-2'>
                                                    <div className="flex items-center space-x-2">
                                                        <Checkbox
                                                            checked={selectedBatch.includes(cityName)}
                                                            onCheckedChange={(checked) => handleCheckboxChange(checked, cityName)}
                                                            id={cityId}
                                                        />
                                                        <label
                                                            htmlFor={cityId}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            <span className='text-gray font-medium text-[0.875]'>{cityName}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className='pl-3'>
                                                {branches.map((branch, branchIndex) => {
                                                    const branchId = `${cityId}-${branch.toLowerCase().replace(/ /g, '')}`;
                                                    return (
                                                        <div className='p-2' key={branchIndex}>
                                                            <div className="flex items-center space-x-2">
                                                                <Checkbox
                                                                    id={branchId}
                                                                    checked={selectedBatch.includes(branchId)}
                                                                    onCheckedChange={(checked) => handleCheckboxChange(checked, branchId)}
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
                    <aside className='basis-[80%] max-h-[62.969vw] overflow-hidden'>
                        <div className='flex flex-wrap gap-3 w-full h-full overflow-y-scroll courseScroll'>
                            {Array.from({ length: 15 }, (value, index) => (
                                <BatchesCard />
                            ))}
                        </div>
                    </aside>
                </section>
            </MaxWebWidth>
        </WebLayout>
    )
}

export default BranchWithFilter