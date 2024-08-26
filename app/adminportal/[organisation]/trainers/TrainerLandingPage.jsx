'use client'
import Input from '@/components/commonComponents/input/Input'
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useGetAllTrainersQuery } from '@/redux/queries/getAllTrainersApi';
import Button from '@/components/commonComponents/button/Button';
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import { truncateText } from '@/lib/utils';

function TrainerLandingPage() {
    const [isClient, setIsClient] = useState(false);
    const tableHeaders = [
        "TRAINER NAME",
        "BRANCH",
        "SUBJECT",
        "EMAIL",
        "PHONE",
        "ACTIONS"
    ];
    const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";F
    const { data: trainersData, refetch: trainersRefetch } = useGetAllTrainersQuery();
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            <Dialog>
                <article className="flex justify-between items-center">
                    <div className="flex gap-3 pt-[2.222vh] items-center">
                        <div className="pl-[1.875vw] w-[29.688vw]">
                            <Input
                                inputStyle="rounded-md"
                                placeholder="search"
                                iconPath="/images/icon_outline_search.png"
                            />
                        </div>
                    </div>
                    <DialogTrigger>
                        {/* <>
                            <Button
                                onClick={() => { }}
                                title="+ Trainer"
                                className="cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw] rounded-lg mr-[1.875vw]"
                            />
                        </> */}
                    </DialogTrigger>
                </article>
                <div className="py-[3.333vh] px-[1.875vw]">
                    <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
                        <Table>
                            <TableHeader className="z-1">
                                <TableRow>
                                    {tableHeaders.map((header, index) => (
                                        <TableHead key={index} className={tblTextClass}>
                                            {header}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {trainersData?.data?.map((ele, index) => (
                                    <TableRow key={index}>
                                        <TableCell className={tblTextClass}>
                                            {ele.userName}
                                        </TableCell>
                                        <TableCell className={tblTextClass}>
                                        </TableCell>
                                        <TableCell className={tblTextClass}>
                                        </TableCell>
                                        <TableCell className={tblTextClass}>
                                            {ele.userEmail[0].email}
                                        </TableCell>
                                        <TableCell className={tblTextClass}>
                                            {ele.phoneNumber[0].phoneNumber}
                                        </TableCell>
                                        <TableCell className={tblTextClass}>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button
                                                        // onClick={handleEditClick(ele)}
                                                        className="mr-2 text-blue-500 hover:underline"
                                                    >
                                                        Edit
                                                    </button>
                                                </DialogTrigger>
                                            </Dialog>
                                            <button
                                                // onClick={handleDeleteClick(
                                                //     ele.course_id,
                                                //     ele.course_name
                                                // )}
                                                className="text-red-500 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default TrainerLandingPage