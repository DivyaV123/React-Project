import Counter from '@/components/commonComponents/counterAnimation/Counter'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React from 'react'
import { Fade } from 'react-reveal'

function CarosalFooter() {
    const detail = [
        {
            count: 'NO.1',
            details: 'Largest Training Institute # in the world'
        },
        {
            count: '2.51L+',
            details: 'Students have been # placed'
        },
        {
            count: '4,000+',
            details: 'Multinational companies # hire from us'
        },
        {
            count: '20+',
            details: 'Companies conduct interview  every working day'
        },
        {
            count: '1,300+',
            details: 'Students attend interview every day across companies'
        },
        {
            count: '3,800+',
            details: 'Students get placed in a month across the globe'
        },
    ]
    return (

        <MaxWebWidth sectionStyling='z-100 flex justify-center absolute top-[74%] w-full bottom-2 w-full h-[10vw] 2xl:[8vw] 3xl:h-[7vw]' articalStyling='rounded-lg bg-footer-blue flex justify-center bg-cover items-between w-full mb-3 h-[10vw] 3xl:h-[7vw] 2xl:[8vw] items-center'>
            <Fade bottom duration={1000} delay={0} >
                <div className='grid md:grid-cols-6'>
                    {
                        detail.map((element) => {
                            let content = element.details.replace(/#/g, "<br/>")
                            return (
                                <div className='p-2'>
                                    <article>
                                        <h1 className=' gradient-text text-[2rem] text-orange-600 subHead text-header-orange font-extra-bold flex justify-center'>
                                            <Counter initialValue={0} targetValue={1000} label={element.count} />
                                        </h1>
                                        <p className='text-white text-[0.75rem] font-semibold flex justify-center text-center ' dangerouslySetInnerHTML={{ __html: content }} />
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