import React from 'react'
import './carosalSection.scss'

function CarosalSection({children, sectionStyle}) {
    return (
        <section className={` w-full _carosalHomesection ${sectionStyle}`}>
            {children}
        </section>
    )
}

export default CarosalSection