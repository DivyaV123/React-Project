import React from 'react'

function PlaceMentStatistics({ className, path, statistics }) {

    return (
        <div className={className}>
            {statistics.map((item, index) => {
                if (path === "fromPage" || path === 'branch') {
                    item.icon = '.' + item.icon;
                }
                let content = item.info.replace(/#/g, "<br/>")
                return (
                    <div className='flex aligen-items jutsify-center cursor-pointer  hover:bg-white hover:rounded-xl'>
                        <figure>
                            <img src={item.icon}></img>
                        </figure>
                        <div className='p-5'>
                            <h1 className='font-bold text-4xl'>{item.count}</h1>
                            <p className='text-dark-gray text-base 3xl:text-[1.2rem]' dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PlaceMentStatistics