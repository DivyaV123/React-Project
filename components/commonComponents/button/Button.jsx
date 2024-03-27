'use client'
import React from 'react'
import './button.scss'

function Button({ className="", title = "", disable = false, type = "", onClick = () => { }, }) {
  return (
      <>
          <button  onClick={onClick} type={type}  disable={disable} className={className}>
              {title}
          </button>
      </>
  )
}

export default Button