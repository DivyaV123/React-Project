import React from 'react'
import Svg from '../Svg/Svg'
import { svgicons } from '@/components/assets/icons/svgassets'

function CommonIconsComponent({ lite }) {
    const darkIcons = ['youtubeIcon', 'facebookIcon', 'twitterIcon', 'instagramIcon', 'whatsappIcon']
    const liteIcons = ['liteyoutubeIcon', 'litefacebookIcon', 'litelinkedinIcon', 'litetwitterIcon', 'liteinstagramIcon', 'litewhatsappIcon']
    return (
        <section className='flex gap-3 items-center commonIconsComponent cursor-pointer'>
            {!lite ? darkIcons.map((element) => {
                return (
                    <Svg
                    className={`mobile:w-[3.721vw] mobile:h-[1.717vh]`}
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