import React from 'react'

function CoursePageContainer({ children , className}) {
    return (
        <section className={`w-[60%]  pl-[6%] ${className}`}>
            <article>
                {children}
            </article>
        </section>
    )
}

export default CoursePageContainer