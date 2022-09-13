import React from 'react';
import './OurStoryPage.css';
import proposal from '../../images/proposal.JPG';
import flower from '../../images/Flowers_grey.png';

const OurStoryPage = () => {
  return (
      <div className = "our-story-main-div">
            <div className = "our-story-section">
                <h2 id = "our-story-title">Our Story</h2>
                <figure>
                  <img src={proposal} className = "hero-image" alt='proposal'/>
                  <figcaption>Henderson Lake <br />April 6th, 2022</figcaption>
                </figure>
                <div id = "our-story-paragraph">
                    <p>Maddy and Graham's first date was July 13, 2020 at Henderson Lake. They met and walked around the lake discussing family, friends, the campground that Maddy's parents owned, and of course The Office. Over the next year and eight months they would make puzzles, collect plants, fall in love. </p>
                    <p>They returned to Henderson Lake on April 6, 2022 and there Graham proposed:</p>
                    <p>"Maddy Kuipers, you're my best friend, will you marry me?"</p>                
                    <p>To which she replied:</p>
                    <p>"Yes."</p>
                </div>
                <img src={flower} className = "flower" alt='flower'/>
            </div>
        </div>
  )
}

export default OurStoryPage