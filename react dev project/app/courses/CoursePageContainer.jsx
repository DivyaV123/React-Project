import React from 'react'

function CoursePageContainer({ children, className, articleStyle }) {
    return (
        <section className={`${className} w-[58%]  pl-[6%]`}>
            <article articleStyle={articleStyle}>
                {children}
            </article>
        </section>
    )
}

export default CoursePageContainer