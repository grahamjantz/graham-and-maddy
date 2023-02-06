import React from 'react'

const Registry = ({ href, logo}) => {
  return (
    <div className='registry-link'>
        <img className='logo'src={logo} alt=''/>
        <button className='link-button'>
            <a href={href} target="_blank" rel="noreferrer">Click Here</a>
        </button>
    </div>
  )
}

export default Registry