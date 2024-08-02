'use client'
import React from 'react'
import './button.scss'
import { Transform } from 'stream'
import { svgicons } from '@/components/assets/icons/svgassets'
import Svg from '../Svg/Svg'

function Button({ className = "", title, disable = false, type = "", onClick = () => { }, icon, iconPosition, onMouseEnter = () => { }, onMouseLeave = () => { }, iconStyle = '' }) {
    return (
        <>
            <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} type={type} disable={disable} className={`${className} `}>
                <span className='flex align-center justify-center'>
                    {iconPosition === 'left' && (<span className='w-[75%] flex justify-start'>
                        {console.log(icon, "iconicon")}
                        {(icon.includes(".img")) || (icon.includes(".svg")) ? <img src={icon} /> :
                            <Svg
                                width={svgicons?.icon[0]}
                                height={svgicons?.icon[1]}
                                viewBox={svgicons?.icon[2]}
                                icon={svgicons?.icon[3]}
                                color={svgicons?.icon[4]}
                            />}
                    </span>)}
                    <span>{title}</span>
                    {iconPosition === 'right' && <span className='w-[10%] ml-2 p-1 flex justify-end'>  {(icon.includes(".img")) || (icon.includes(".svg")) ? <img src={icon} /> :
                        <Svg
                            width={svgicons.icon[0]}
                            height={svgicons.icon[1]}
                            viewBox={svgicons.icon[2]}
                            icon={svgicons.icon[3]}
                            color={svgicons.icon[4]}
                        />}</span>}
                </span>
            </button>
        </>
    )
}

export default Button