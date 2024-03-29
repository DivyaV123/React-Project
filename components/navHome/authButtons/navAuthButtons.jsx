import Button from '@/components/commonComponents/button/Button'
import React from 'react'

function NavAuthButtons() {
    return (
        <div className='flex space-x-3 ml-12'>
            <aside>
                <Button className="primaryLogin" title='Login'/> 
            </aside>
            <aside>
                <Button className='plainBtnReg' title='Register'/> 
            </aside>
        </div>
    )
}

export default NavAuthButtons