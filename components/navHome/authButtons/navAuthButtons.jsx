import Button from '@/components/commonComponents/button/Button'
import React from 'react'
import Link from 'next/link'
import { SIGN_IN,SIGN_UP } from '@/lib/RouteConstants'
function NavAuthButtons() {
    return (
        <div className='flex space-x-3 mobile:my-[2.575vh]'>
            <Link href={SIGN_IN}>
                <Button className="primaryLogin" title='Login'/> 
            </Link>
            <Link href={SIGN_UP}>
                <Button className='plainBtnReg' title='Register'/> 
            </Link>
        </div>
    )
}

export default NavAuthButtons