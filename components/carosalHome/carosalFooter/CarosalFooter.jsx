import Counter from '@/components/commonComponents/counterAnimation/Counter'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React from 'react'
import { Fade } from 'react-reveal'

function CarosalFooter() {
    const detail = [
        {
            count: 'No.1',
            details: 'Training Institue in  the World and also  the Largest.'
        },
        {
            count: '2.51L',
            details: 'Students have been  Placed, and still  counting!'
        },
        {
            count: '4180+',
            details: 'Multinational  companies hire from  us, and the list is still  growing.'
        },
        {
            count: '19+',
            details: 'Companies conduct  interviews every  working day.'
        },
        {
            count: '1300+',
            details: 'Students attend  interviews every day  across companies.'
        },
        {
            count: '3800+',
            details: 'Students get placed  in a Month across  the Globe.'
        },
    ]
    return (

        <MaxWebWidth sectionStyling='z-100 flex justify-center absolute w-full bottom-1 w-full' articalStyling='rounded-lg bg-footer-blue flex justify-center bg-cover items-between w-full mb-3'>
            <Fade bottom duration={1000} delay={0} >
                <div className='flex'>
                    {
                        detail.map((element) => {
                            let content = element.details.replace(/#/g, "<br/>")
                            console.log(content, "content")
                            return (
                                <div className='p-4'>
                                    <h1 className=' gradient-text text-3xl text-orange-600 subHead text-header-orange font-extra-bold flex justify-center'>
                                        <Counter initialValue={0} targetValue={5000} label={element.count} />
                                    </h1>
                                    <p className='text-white text-xs/[16px] font-thin flex justify-center text-center ' dangerouslySetInnerHTML={{ __html: content }} />
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