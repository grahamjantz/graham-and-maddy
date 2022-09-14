import React from 'react'
import './RsvpPage.css'

const RsvpPage = ({ invitesSent }) => {
  if (invitesSent === false) {
    return (
      <div className="rsvp-section">
          <h2 className="rsvp-title">R.S.V.P.</h2>
          <h3 className="rsvp-section-subtitle">Coming Soon!</h3>
          <p className="rsvp-section-subtext">r.s.v.p. will open after invitations are sent out! Hang tight, we can't wait for you join us on our day!</p>
      </div> 
    )
  }
  return (
    <div className="rsvp-section">
        <h2 className="rsvp-title">R.S.V.P.</h2>
        <p className="rsvp-section-subtext">Please follow the link below to r.s.v.p! We can't wait for you join us on our day!</p>
        <button className='rsvp-button'>
            <a href='https://grahamandmaddy.rsvpify.com' target="_blank" rel="noreferrer">R.S.V.P.</a>
        </button>
    </div> 
  )
}

export default RsvpPage