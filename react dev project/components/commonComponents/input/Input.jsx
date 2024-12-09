import React from 'react'

function Input(
    {
        sectionStyle = '',
        type = 'text',
        name = '',
        value,
        onChange,
        placeholder = '',
        iconPath = '',
        onBlur,
        inputStyle = '',
        iconStyle = '',
        autoFocus = false,
        multiple = false
    }
) {
    return (
        <section className={`${sectionStyle} relative `}>
            {iconPath &&
                <img src={iconPath} alt="icon" className={`${iconStyle} absolute left-3 top-1/2 transform -translate-y-1/2 w-[2.778vh] h-[2.778vh] mobile:h-[2.151vh] mobile:w-[2.151vh] tabView:h-[2.151vh] tabView:w-[2.151vh] `}></img>
            }
            <input multiple={multiple} className={`${inputStyle}  w-full outline-none ${iconPath ? 'py-[1.25vh] px-[0.938vw] pl-[2.6vw]' : 'py-[1.25vh] px-[0.938vw] pl-[1.25vw]'} border border-[#EEEEEE] rounded`} name={name} value={value} type={type} onChange={onChange} onBlur={onBlur} placeholder={placeholder} autoFocus={autoFocus} />
        </section>
    )
}

export default Input