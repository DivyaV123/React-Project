import React from 'react'

function CommonIconsComponent({ lite }) {
    const darkIcons = ['/youtube.svg', '/facebook.svg', '/linkedin.svg', '/x_twitter.svg', '/instagram.svg', '/whatsapp.svg']
    const liteIcons = ['./liteYoutube.svg', './liteFacebook.svg', './litelinkedin.svg', './lite_x_twitter.svg', '/liteInstagram.svg', './liteWhatsapp.svg']
    return (
        <section className='flex space-x-3 items-center commonIconsComponent'>
            {!lite ? darkIcons.map((element) => {
                return (
                    <picture>
                        <img style={{ height: "13px" }} src={element} alt="youtube Logo" />
                    </picture>
                )
            }) :
                liteIcons.map((element) => {
                    return (
                        <picture>
                            <img style={{ height: "13px" }} src={element} alt="youtube Logo" />
                        </picture>
                    )
                })
            }
        </section>
    )
}

export default CommonIconsComponent