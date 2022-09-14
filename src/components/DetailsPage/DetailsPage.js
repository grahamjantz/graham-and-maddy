import React from 'react'
import './DetailsPage.css'
import flower from '../../images/Flowers_grey.png'

const DetailsPage = () => {
  return (
            <div className="details-section">
                  <h2 id="details-title">Details</h2>
                <div id="when">
                    <h3>When</h3>
                    <h4 className="details-section-subtext">June 3rd, 2023</h4>
                    <h4 className="details-section-subtext">3:30pm</h4>
                </div>
                <div id="where">
                    <h3>Where</h3>
                    <h4 className="details-section-subtext">The Bunka Centre</h4>
                    <h4 className="details-section-subtext">Nika Yukko Japanese Gardens</h4>
                </div>
                <div id="reception">
                    <h4 className="reception-to-follow">Reception to Follow</h4>
                    <h4 className="details-section-subtext">5:00pm</h4>
                    <h5 className="details-section-subtext">Paradise Canyon Golf Course</h5>
                    <h5 className="details-section-subtext">185 Canyon Blvd W</h5>
                    <h5 className="details-section-subtext">Lethbridge, AB T1K 6V1</h5>
                </div>
                <img src={flower} className = "det-flower" alt='flower'/>
            </div> 
  )
}

export default DetailsPage