import React from 'react';
import './OurStoryPage.css';
import flower from '../../images/Flowers_grey.png';
import gallery from '../../images/gallery/gallery'
import ImageGallery from 'react-image-gallery'

import creamRipTexture from '../../images/textures/creamRipTexture.png'
// import {ResponsiveGallery} from 'react-responsive-gallery';

const OurStoryPage = () => {

  return (
            <div className = "our-story-section">
                <h2 id = "our-story-title">Our Story</h2>
                <img src={flower} className = "os-flower one" alt='flower'/>
                <img src={creamRipTexture} alt='' className='cream-rip-transition-down'/>
                <figure>
                  <div className='image-gallery-react'>
                    <ImageGallery 
                      items={gallery}
                      lazyLoad={true}
                      autoPlay={true}
                      showFullscreenButton={false}
                      
                    />
                  </div>
                  {/* <img src={proposal} className = "hero-image" alt='proposal'/> */}
                  <figcaption>Henderson Lake <br />April 6th, 2022</figcaption>
                </figure>
                <img src={creamRipTexture} alt='' className='cream-rip-transition-up'/>
                <div id = "our-story-paragraph">
                    <p>Maddy and Graham's first date was July 13, 2020 at Henderson Lake. They met and walked around the lake discussing family, friends, the campground that Maddy's parents owned, and of course The Office. Over the next year and eight months they would make puzzles, collect plants, fall in love. </p>
                    <p>They returned to Henderson Lake on April 6, 2022 and there Graham proposed:</p>
                    <p>"Maddy Kuipers, you're my best friend, will you marry me?"</p>                
                    <p>To which she replied:</p>
                    <p>"Yes."</p>
                </div>
                <img src={flower} className = "os-flower" alt='flower'/>
            </div>
  )
}

export default OurStoryPage