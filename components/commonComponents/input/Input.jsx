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
        <section className={`${sectionStyle} relative`}>
            {iconPath &&
                <img src={iconPath} alt="icon" className={`${iconStyle} absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6`}></img>
            }
            <input className={`${inputStyle} w-full ${iconPath ? 'py-2 pl-12 pr-4' : 'py-[2.083vh] pl-[1.25vw]'} border border-gray-300 rounded`} type={type} onChange={onChange} placeholder={placeholder} />
        </section>
    )
}

export default Input