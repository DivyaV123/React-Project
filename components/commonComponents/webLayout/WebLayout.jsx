import FooterHome from '@/components/footer/footerHome'
import NavHome from '@/components/navHome/navHome'
import React from 'react'

function WebLayout({ children }) {
    return (
        <>
            <NavHome />
            {children}
            <FooterHome />
        </>
    )
}

export default WebLayout