'use Clint'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import { ADDBRANCH_HOME, ADDSUBJECT_HOME, COURSEADDER_HOME, COURSEMAP_HOME, COURSEWEIGHTAGE_HOME, EDITCOURSE_HOME } from '@/lib/RouteConstants'
import Link from 'next/link'
import React from 'react'

function DashBoardLandingPage() {
  return (
    <WebLayout>
      <MaxWebWidth articalStyling='pt-12 pb-12'>
        <div className='flex gap-3 flex-wrap'>
          <Link className='p-4 border-2 rounded-xl w-[24%] border-slate-400' href={COURSEADDER_HOME}>
            <h1 className='font-boled flex flex-col justify-center items-center'>
              Add Course
            </h1>
          </Link>
          <Link className='p-4 border-2 rounded-xl w-[24%] border-slate-400' href={EDITCOURSE_HOME}>
            <h1 className='font-boled flex flex-col justify-center items-center'>
              Edit Course
            </h1>
          </Link>
          <Link className='p-4 border-2 rounded-xl w-[24%] border-slate-400' href=''>
            <h1 className='font-boled flex flex-col justify-center items-center'>
              Add Subject
            </h1>
          </Link>
          <Link className='p-4 border-2 rounded-xl w-[24%] border-slate-400' href={ADDSUBJECT_HOME}>
            <h1 className='font-boled flex flex-col justify-center items-center'>
              Edit Subject
            </h1>
          </Link>
          <Link className='p-4 border-2 rounded-xl w-[24%] border-slate-400' href={COURSEWEIGHTAGE_HOME}>
            <h1 className='font-boled flex flex-col justify-center items-center'>
              Course Weightage
            </h1>
          </Link>
          <Link className='p-4 border-2 rounded-xl w-[24%] border-slate-400' href={ADDBRANCH_HOME}>
            <h1 className='font-boled flex flex-col justify-center items-center'>
              Add Branch
            </h1>
          </Link>
          <article className='p-4 border-2 rounded-xl w-[24%] border-slate-400'>
            <h1 className='font-boled flex flex-col justify-center items-center'>
              Edit Branch
            </h1>
          </article>
          <Link className='p-4 border-2 rounded-xl w-[24%] border-slate-400' href={COURSEMAP_HOME}>
            <h1 className='font-boled flex flex-col justify-center items-center'>
              Course Map
            </h1>
          </Link>
        </div>
      </MaxWebWidth>
    </WebLayout>
  )
}

export default DashBoardLandingPage