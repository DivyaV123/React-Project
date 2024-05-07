import React from 'react'

function TextArea(
    {
        sectionStyle = '',
        type = 'text',
        onChange,
        placeholder = '',
        iconPath = '',
        textAreaStyle = '',
        iconStyle = ''
    }

) {
    return (
        <section className={`${sectionStyle} relative`}>
            {iconPath &&
                <img src={iconPath} alt="icon" className={`${iconStyle} absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6`}></img>
            }
            <textarea className={`${textAreaStyle} w-full ${iconPath ? 'py-2 pl-12 pr-4' : 'p-2'} border border-gray-300 rounded`} type={type} onChange={onChange} placeholder={placeholder} />
        </section>
    )
}

export default TextArea