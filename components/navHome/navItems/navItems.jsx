import React from 'react'
import './navitems.scss'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Courses from './Courses';
import Branches from './Branches';
import Tutions from './Tutions';
const navItems = [
    { name: 'Courses', content: <Courses/>},
    { name: 'Branches', content:<Branches/>},
    { name: 'Tutions', content: <Tutions/>},
    { name: 'Hire From Us', content: ""},
    { name: 'Placement Center', content: ""},
    { name: 'Contact us', content: ""},
];

function NavItems() {
    const items = ['Courses', 'Branches', "Tutions", "Hire From Us", "Placement Center", "Contact us"]
    return (
        // <div className='flex flex-wrap space-x-9 cursor-pointer font-medium'>
        //     {items.map((navItem, index) => {
        //         return (
        //             <span key={index} className='hover-underline-animation'>{navItem}</span>
        //         )
        //     })}
        // </div>
        <NavigationMenu>
            <NavigationMenuList>
                {navItems.map((navItem, index) => (
                    <NavigationMenuItem key={index}>
                        
                        <NavigationMenuTrigger>
                            <div className='flex flex-wrap space-x-9 cursor-pointer font-medium'>
                                <span className='hover-underline-animation'>{navItem.name}</span>
                            </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="nav-content">
                            {navItem.content}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavItems
