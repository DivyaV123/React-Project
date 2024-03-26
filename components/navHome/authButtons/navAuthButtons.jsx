import React from 'react'
import { Button } from "@/components/ui/button";

function NavAuthButtons() {
    return (
        <div className='flex space-x-3 ml-12'>
            <aside>
                <Button variant="btnPlain"> Login </Button>
            </aside>
            <aside>
                <Button variant="btnSecondary">Register </Button>
            </aside>
        </div>
    )
}

export default NavAuthButtons