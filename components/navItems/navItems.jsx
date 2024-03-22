import React from 'react'



function NavItems() {
    const items = ['Courses', 'Branches', "Tutions", "Hire From Us", "Placement Center", "Contact us"]
    return (
        <div className='flex flex-wrap space-x-9 cursor-pointer font-medium'>
            {items.map((navItem, index) => {
                return (
                    <span key={index} className='hover:text-primary-foreground'>{navItem}</span>
                )
            })}
        </div>
    )
}

export default NavItems
