import React from 'react'
import './DirectionsPage.css'
import flower from '../../images/Flowers_grey.png'


const DirectionsPage = () => {
  return (
          <div className="directions-section">
              <h2 id="directions-title">Directions</h2>
                <h3 className="ceremony-title">ceremony</h3>
                <p className="directions-section-subtext">The Bunka Centre</p>
                <p className="directions-section-subtext">Nika Yukko Japanese Gardens</p>
                <br className="dir-br"/>
                <p className="directions-section-subtext">3:30 in the afternoon</p>
                <br className="dir-br"/>
                <p className="directions-section-subtext">Corner of 9th Ave S &, Mayor Magrath Dr S, Lethbridge, AB T1K 0C6</p>
                <p className="directions-section-subtext">Parking is available just off Mayor Magrath Dr on the west side of the gardens</p>
                <h3 className="reception-title">reception</h3>
                <p className="directions-section-subtext">Paradise Canyon Golf Course</p>
                <br className="dir-br"/>
                <p className="directions-section-subtext">5 in the evening</p>
                <br className="dir-br"/>
                <p className="directions-section-subtext">185 Canyon Blvd W</p>
                <p className="directions-section-subtext">Lethbridge, AB <br className="dir-br"/>T1K 6V1</p>
                <p className="directions-section-subtext"> Follow Canyon Blvd W down the hill into the golf course, parking is available at the clubhouse with overflow across the street.</p>
                <img src={flower} className = "det-flower" alt='flower'/>
          </div>
  )
}

export default DirectionsPage