'use client'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function SubCategoryContent({ categoryData }) {
    // console.log(categoryData?.data, "content")
    let selectedCategoryParam = "Software Testing"
    const getSubCourseCategory = categoryData?.data?.filter(ele => ele.title === selectedCategoryParam).flatMap(subele => subele.subCourse.length > 0 ? subele.subCourse : [])

    const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem]"

    return (
        <div className='py-[3.333vh] px-[1.875vw]'>
            <div className='rounded-2xl bg-[#FFFFFF] pt-[2.222vh]'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={tblTextClass}>SUB CATEGORY NAME</TableHead>
                            <TableHead className={tblTextClass}>CATEGORY</TableHead>
                            <TableHead className={tblTextClass}>COURSES</TableHead>
                            <TableHead className={tblTextClass}>ACTIONS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className={tblTextClass}>Integration Testing</TableCell>
                            <TableCell className={tblTextClass}>Software Testing</TableCell>
                            <TableCell className={tblTextClass}>0</TableCell>
                            <TableCell className={tblTextClass}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={tblTextClass}>Integration Testing</TableCell>
                            <TableCell className={tblTextClass}>Software Testing</TableCell>
                            <TableCell className={tblTextClass}>0</TableCell>
                            <TableCell className={tblTextClass}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={tblTextClass}>Integration Testing</TableCell>
                            <TableCell className={tblTextClass}>Software Testing</TableCell>
                            <TableCell className={tblTextClass}>0</TableCell>
                            <TableCell className={tblTextClass}></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default SubCategoryContent