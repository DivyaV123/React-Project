import React from 'react'

function AllTestimonial() {
    const testimonials = [
        {
            img1: './testimonialImage1.png',
            img2: './testimonialImg2.png',
            header: 'Suraksha J B',
            info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor"
        },
        {
            img1: './testimonialImage1.png',
            img2: './testimonialImg2.png',
            header: 'Suraksha J B',
            info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor"
        },
        {
            img1: './testimonialImage1.png',
            img2: './testimonialImg2.png',
            header: 'Suraksha J B',
            info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor"
        },
        {
            img1: './testimonialImage1.png',
            img2: './testimonialImg2.png',
            header: 'Suraksha J B',
            info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor"
        },
    ]
    return (
        <article className='flex justify-center items-center gap-2 p-2'>
            {
                testimonials.map((element) => {
                    return (
                        <article className='flex gap-2 p-2 border-2 border-slate-100 rounded-xl shadow-lg shadow-ash-500/50'>
                            <aside className='flex justify-center items-center'>
                                <div>
                                    <figure className='p-1'>
                                        <img className='w-80' src={element.img1} />
                                    </figure>
                                    <figure className='p-1'>
                                        <img className='w-80' src={element.img2} />
                                    </figure>
                                </div>
                            </aside>
                            <aside>
                                <h1 className='text-sm font-bold'>
                                    {element.header}
                                </h1>
                                <p className='text-ash text-xs font-hairline leading-3 pt-1 '>
                                    {element.info}
                                </p>
                            </aside>
                        </article>
                    )
                })
            }
        </article>
    )
}

export default AllTestimonial