import React from 'react'

function CommonIconsComponent() {
    return (
        <section className='flex space-x-3 items-center commonIconsComponent'>
            <picture><img style={{height:"13px"}} src="/youtube.svg" alt="youtube Logo" /></picture>
            <picture><img style={{height:"13px"}} src="/facebook.svg" alt="facebook Logo" /></picture>
            <picture><img style={{height:"13px"}} src="/linkedin.svg" alt="linkedin Logo" /></picture>
            <picture><img style={{height:"13px"}} src="/x_twitter.svg" alt="x_twitter Logo" /></picture>
            <picture><img style={{height:"13px"}} src="/instagram.svg" alt="instagram Logo" /></picture>
            <picture><img style={{height:"13px"}} src="/whatsapp.svg" alt="whatsapp Logo" /></picture>
        </section>
    )
}

export default CommonIconsComponent