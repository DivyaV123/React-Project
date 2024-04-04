'use client'
import React from 'react'
import './button.scss'
import { Transform } from 'stream'

function Button({ className = "", title = "", disable = false, type = "", onClick = () => { }, icon, iconPosition, onMouseEnter = ()=>{}, onMouseLeave=()=>{} }) {
    return (
        <>
            <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  onClick={onClick} type={type} disable={disable} className={`${className} `}>
                <span className='flex slign-center justify-center'>
                    {iconPosition === 'left' && <span className='w-[75%] flex justify-start'><img src={icon} /></span>}
                    <span>{title}</span>
                    {iconPosition === 'right' && <span className='w-[10%] ml-2 p-1 flex justify-end'><img src={icon} /></span>}
                </span>
            </button>
        </>
    )
}

export default Button