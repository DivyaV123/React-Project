import React from 'react'

function PlaceMentStatistics({ className }) {
    const statistics = [
        {
            count: '94,860',
            info: 'Students who have throughout # 60% Aggregate',
            icon: './placementIcon1.svg'
        },
        {
            count: '42,992',
            info: 'Students who have graduated # in Non - IT',
            icon: './staticsIcon02.svg'
        },
        {
            count: '68,481',
            info: 'Students who have graduated # in IT / CS / IS',
            icon: './placementIcon03.svg'
        },
        {
            count: '15,024',
            info: 'Students who have less than # 60% Aggregate',
            icon: './placementIcon04.svg'
        },
    ]
    return (
        <div className={className}>
            {statistics.map((item, index) => {
                let content = item.info.replace(/#/g, "<br/>")
                return (
                    <div className='flex aligen-items jutsify-center cursor-pointer  hover:bg-white hover:rounded-xl'>
                        <figure>
                            <img src={item.icon}></img>
                        </figure>
                        <div className='p-5'>
                            <h1 className='font-bold text-4xl'>{item.count}</h1>
                            <p className='text-dark-gray' dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PlaceMentStatistics