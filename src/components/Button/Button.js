import React from 'react'

const Button = ({ text, href, className, slideIn }) => {
  return (
    <div>
        <button 
          href={href} 
          className={className}
          onClick={() => {
            slideIn()
          }}
        >
            {text}
        </button>
    </div>
  )
}

export default Button