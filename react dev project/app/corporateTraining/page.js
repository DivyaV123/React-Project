'use client'
import React, { useContext } from 'react'
import CorporateTrainingLanding from './CorporateTrainingLanding'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import TrainingMode from '@/components/ourBranches/trainingMode/trainingMode'
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import TrendingCourses from './TrendingCourses'
import BenefitsOfTraining from './BenefitsOfTraining'
import ClientTesimonials from '../hireFromUs/ClientTesimonials'
import TransformWorkSpace from './TransformWorkSpace'
import FaqHome from '@/components/faq/faqHome'
import { useGetAllFaqQuery } from '@/redux/queries/getAllFaq'
import { GlobalContext } from '@/components/Context/GlobalContext'
import OurCourse from '@/components/ourCourses/ourCourse'
import CorporateModes from './CorporateModes'
import CorporateTrainingFeatures from './CorporateTrainingFeatures'
import { useGetHeroPageQuery } from '@/redux/queries/getheroPageApi'
const CorporateTraining = () => {
  const { domainVariable } = useContext(GlobalContext)
  let domain =
    domainVariable === "Qspiders"
      ? "qspiders"
      : domainVariable === "Jspiders"
      ? "jspiders"
      : domainVariable === "Pyspiders"
      ? "pyspiders"
      : "qspiders";
  const { data: faqData, error, isLoading } = useGetAllFaqQuery(domain);
  const { data: heroPageData } = useGetHeroPageQuery(domain);
  return (
    <WebLayout>

      <CorporateTrainingLanding heroPageData={heroPageData?.data}/>
      <HiringPartners />
      {/* <TrainingMode page='corporateTraining' /> */}
      {/* <OurCourse /> */}
      <CorporateModes heroPageData={heroPageData?.data?.corporate?.modeswetrain} />
      <div className='w-[87.5vw] m-auto'>
        <TrendingCourses page="corporate"/>
        {/* <BenefitsOfTraining /> */}
      </div>
      <CorporateTrainingFeatures/>
      <ClientTesimonials />
      <TransformWorkSpace />
      <FaqHome mainfaqData={faqData?.data} />
    </WebLayout>

  )
}

export default CorporateTraining