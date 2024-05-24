import React from 'react'

function Input(
    {
        sectionStyle = '',
        type = 'text',
        onChange,
        placeholder = '',
        iconPath = '',
        inputStyle = '',
        iconStyle = ''
    }
) {
    return (
        <section className={`${sectionStyle} relative h-[2.969vw]`}>
            {iconPath &&
                <img src={iconPath} alt="icon" className={`${iconStyle} absolute left-3 top-1/2 transform -translate-y-1/2 w-[2.778vh] h-[2.778vh]`}></img>
            }
            <input className={`${inputStyle} w-full ${iconPath ? 'py-[1.25vh] px-[0.938vw] pl-[2.6vw]' : 'py-[1.25vh] px-[0.938vw] pl-[1.25vw]'} border border-gray-300 rounded`} type={type} onChange={onChange} placeholder={placeholder} />
        </section>
    )
}

export default Input