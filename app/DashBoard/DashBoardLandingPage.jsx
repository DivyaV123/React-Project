'use Clint'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import { ADDBRANCH_HOME, COURSEADDER_HOME, COURSEWEIGHTAGE_HOME, EDITCOURSE_HOME } from '@/lib/RouteConstants'
import Link from 'next/link'
import React from 'react'

function DashBoardLandingPage() {
  return (
    <WebLayout>
      <MaxWebWidth articalStyling='pt-12 pb-12'>
        <div className='flex gap-3 flex-wrap'>
          <Link href=''>
            <article className='p-4 border-2 rounded-xl w-[24%] border-slate-400'>
              <h1 className='font-boled flex flex-col justify-center items-center'>
                Add Course
              </h1>
            </article>
          </Link>
          <Link href=''>
            <article className='p-4 border-2 rounded-xl w-[24%] border-slate-400'>
              <h1 className='font-boled flex flex-col justify-center items-center'>
                EditCourse
              </h1>
            </article>
          </Link>
          <Link href=''>
            <article className='p-4 border-2 rounded-xl w-[24%] border-slate-400'>
              <h1 className='font-boled flex flex-col justify-center items-center'>
                Add Subject
              </h1>
            </article>
          </Link>
          <Link>
            <article className='p-4 border-2 rounded-xl w-[24%] border-slate-400'>
              <h1 className='font-boled flex flex-col justify-center items-center'>
                Edit Subject
              </h1>
            </article>
          </Link>
          <Link href={COURSEWEIGHTAGE_HOME}>
            <article className='p-4 border-2 rounded-xl w-[24%] border-slate-400'>
              <h1 className='font-boled flex flex-col justify-center items-center'>
                course Weightage
              </h1>
            </article>
          </Link>
          <Link href={ADDBRANCH_HOME}>
            <article className='p-4 border-2 rounded-xl w-[24%] border-slate-400'>
              <h1 className='font-boled flex flex-col justify-center items-center'>
                Add Branch
              </h1>
            </article>
          </Link>
          <Link>
            <article className='p-4 border-2 rounded-xl w-[24%] border-slate-400'>
              <h1 className='font-boled flex flex-col justify-center items-center'>
                Edit Branch
              </h1>
            </article>
          </Link>
        </div>
      </MaxWebWidth>
    </WebLayout>
  )
}

export default DashBoardLandingPage