import React from 'react'

function TextArea(
    {
        sectionStyle = '',
        type = 'text',
        onChange,
        placeholder = '',
        iconPath = '',
        textAreaStyle = '',
        iconStyle = '',
        value,
        name = '',
        onBlur
    }

) {
    return (
        <section className={`${sectionStyle} relative h-[8.516vw]`}>
            {iconPath &&
                <img src={iconPath} alt="icon" className={`${iconStyle} absolute left-[0.938vw] top-[1.389vh] w-[2.778vh] h-[2.778vh]`}></img>
            }
            <textarea className={`${textAreaStyle} w-full ${iconPath ? 'py-[1.25vh] px-[0.938vw] pl-[2.6vw]' : 'py-[1.25vh] px-[0.938vw]'} border border-gray-300 rounded`} type={type} onChange={onChange} placeholder={placeholder} name={name} value={value} onBlur={onBlur} />
        </section>
    )
}

export default TextArea