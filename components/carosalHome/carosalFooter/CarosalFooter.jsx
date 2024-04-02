import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React from 'react'

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
        <MaxWebWidth sectionStyling='z-100 flex justify-center' articalStyling='rounded-lg w-[85%] bg-footer-blue flex justify-between justify-center bg-cover items-between'>
            <figure>
                <img className='h-auto' src='./illustrate_gloabImage.svg' alt='illustrate_gloabImage' />
            </figure>
            <aside className='flex justify-end items-center'>
                <div className='grid grid-cols-1  md:grid-cols-6 lg:grid-cols-6 gap-5'>
                    {
                        detail.map((element) => {
                            let content = element.details.replace(/#/g, "<br/>")
                            console.log(content, "content")
                            return (
                                <div className='p-2'>
                                    <h1 className=' gradient-text text-3xl text-orange-600 subHead text-header-orange font-extra-bold flex justify-center'>
                                        {element.count}
                                    </h1>
                                    <p className='text-white text-xs/[16px] font-thin flex justify-center text-center ' dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            )
                        })
                    }
                </div>
            </aside>
        </MaxWebWidth>
    )
}

export default CarosalFooter