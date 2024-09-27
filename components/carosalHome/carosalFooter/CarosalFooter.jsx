import Counter from '@/components/commonComponents/counterAnimation/Counter'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

function CarosalFooter({heroPageData}) {
    return (

        <MaxWebWidth sectionStyling='z-100 flex justify-center sm:absolute sm:top-[74%] w-full sm:bottom-2 tabView:relative tabView:p-6' articalStyling='rounded-lg bg-footer-blue flex justify-center bg-cover items-between w-full mb-3  items-center'>
            <Fade direction="bottom" duration={1000} delay={0} >
                <div className='grid md:grid-cols-6 mobile:flex mobile:flex-wrap   mobile:py-[2.039vh] tabView:grid-cols-3'>
                    {
                        heroPageData?.data?.homepage?.details?.map((element) => {
                            let content = element.details.replace(/#/g, "<br/>")
                            return (
                                <div className='sm:p-2 mobile:w-[50%]  mobile:py-[2.039vh] mobile:pr-[5.581vw] mobile:pl-[3.721vw]'>
                                    <article>
                                        <h1 className=' gradient-text text-[2.5vw] mobile:text-[7.442vw] text-orange-600 subHead text-header-orange font-extra-bold flex justify-center tabView:text-[4.301vw]'>
                                            <Counter initialValue={0} targetValue={50} label={element.count} />
                                        </h1>
                                        <p className='text-white text-[0.938vw] mobile:text-[2.791vw] font-semibold flex justify-center text-center tabView:text-[1.613vw]' dangerouslySetInnerHTML={{ __html: content }} />
                                    </article>
                                </div>
                            )
                        })
                    }
                </div>
            </Fade>
        </MaxWebWidth>

    )
}

export default CarosalFooter