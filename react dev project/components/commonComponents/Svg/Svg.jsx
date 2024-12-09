'use client'
import React from 'react'

function Svg({ icon, width = '', onClick = () => { }, height = '', color = 'currentColor', viewBox = '', className, xmlns = 'http://www.w3.org/2000/svg', ...rest }) {
    return (
        <svg
            onClick={onClick}
            className={className}
            xmlns={xmlns}
            viewBox={viewBox}
            width={width}
            height={height}
            fill={color}
            {...rest}
        >
            {icon}
        </svg>
    )
}

export default Svg