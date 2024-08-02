'use client';
import React, { useMemo } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

function SubCategoryContent({ categoryData }) {
    const selectedCategoryParam = "Software Testing";
    const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem]";
    const getSubCourseCategory = useMemo(() => {
        return categoryData?.data
            ?.filter(ele => ele.title === selectedCategoryParam)
            .flatMap(subele => subele.subCourse.length > 0 ? subele.subCourse : []);
    }, [categoryData, selectedCategoryParam]);
    const tableHeaders = ["SUB CATEGORY NAME", "CATEGORY", "COURSES", "ACTIONS"]
    return (
        <div className='py-[3.333vh] px-[1.875vw]'>
            <div className='rounded-2xl bg-[#FFFFFF] pt-[2.222vh] h-[73.389vh]  overflow-y-scroll myscrollbar'>
                <Table className=''>
                    <TableHeader className=' z-1'>
                        <TableRow>
                            {tableHeaders.map((header, index) => (
                                <TableHead key={index} className={tblTextClass}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody >
                        {getSubCourseCategory?.map((subCourse, index) => (
                            <TableRow key={index}>
                                <TableCell className={tblTextClass}>{subCourse.title}</TableCell>
                                <TableCell className={tblTextClass}>{selectedCategoryParam}</TableCell>
                                <TableCell className={tblTextClass}>{subCourse.subCourseResponse.length}</TableCell>
                                <TableCell className={tblTextClass}></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default SubCategoryContent;
