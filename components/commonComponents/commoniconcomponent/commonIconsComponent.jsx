import React from 'react'
import Svg from '../Svg/Svg'
import { svgicons } from '@/components/assets/icons/svgassets'

function CommonIconsComponent({ lite }) {
    const darkIcons = ['youtubeIcon', 'facebookIcon', 'twitterIcon', 'instagramIcon', 'whatsappIcon']
    const liteIcons = ['liteyoutubeIcon', 'litefacebookIcon', 'litelinkedinIcon', 'litetwitterIcon', 'liteinstagramIcon', 'litewhatsappIcon']
    return (
        <section className='flex space-x-3 items-center commonIconsComponent'>
            {!lite ? darkIcons.map((element) => {
                return (
                    <Svg
                        width={svgicons[element][0]}
                        height={svgicons[element][1]}
                        viewBox={svgicons[element][2]}
                        icon={svgicons[element][3]}
                        color={svgicons[element][4]}
                    />
                )
            }) :
                liteIcons.map((element) => {
                    return (
                        <Svg
                            width={svgicons[element][0]}
                            height={svgicons[element][1]}
                            viewBox={svgicons[element][2]}
                            icon={svgicons[element][3]}
                        />
                    )
                })
            }
        </section>
    )
}

export default CommonIconsComponent