import React from 'react'
import './FaqPage.css'

const FaqPage = () => {
  return (
    <div className="faq-section">
        <h2 id="faq-title">FAQ</h2>
        <h3 className='question'>What is the Dress Code?</h3>
        <p className='answer'>The dress code for the ceremony and reception will be semi-formal.</p>        
        <h3 className='question'>Are kids allowed?</h3>
        <p className='answer'>While we love your little ones, our wedding is going to be an adults only event so that everyone can relax and enjoy the evening. We appreciate you making arrangements ahead of time and leaving the kids at home so you can celebrate with us.</p>
        <h3 className='question'>What time should I arrive?</h3>
        <p className='answer'>Although the ceremony does not start till 3:30pm, we advise guests to arrive 15 minutes prior. This will allow for flexible time to park, enter the venue, chat a little, and get seated.</p>        
        <h3 className='question'>Will there be options for transportation between the ceremony and reception?</h3>
        <p className='answer'>We will not have any prearranged shuttle service but if you require a taxi between the ceremony and reception Lethbridge's 94 Cabs can be reached at 403-942-5694.</p>        
    </div> 
  )
}

export default FaqPage