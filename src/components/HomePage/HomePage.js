import React from 'react';
import './HomePage.css';
import flower from '../../images/Flowers_grey.png'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
      <div className = "main-div" id = "mainDiv">
            <div className = "hero-section">
                <h1 id = "hero-title">Graham<br />&<br />Maddy</h1>
                <h3>together with their families</h3>
                <img src={flower} className = "home-flower" alt='flower'/>
                <h3>joyfully invite you to their wedding celebration</h3>
                <h2>June 3rd, 2023 @ 3:30pm</h2>
                <Link to='./rsvp' className = "rsvp">RSVP</Link>
            </div>
            <div className = "the-wedding-section">
                <div id = "wedding-title">
                    <h2>The Wedding</h2>
                </div>
                <div id = "when">
                    <h3>When</h3>
                    <h5>June 3rd, 2023</h5>
                </div>
                <div id = "where">
                    <h3>Where</h3>
                    <h5>The Bunka Centre</h5>
                    <h5>Nika Yukko Japanese Gardens</h5>
                </div>
                <div id = "reception">
                    <h3>Reception to Follow</h3>
                    <h5>Paradise Canyon Golf Course</h5>
                    <h5> 185 Canyon Blvd W</h5>
                    <h5>Lethbridge, AB T1K 6V1</h5>
                </div>
            </div>
        </div>
  )
}

export default HomePage