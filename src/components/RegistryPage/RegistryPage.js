import Registry from './Registry'
import './RegistryPage.css'
// import bbbLogo from '../../images/Bed-Bath-and-Beyond-Logo.png'
// import amazonLogo from '../../images/Amazon_logo.png'
import flower from '../../images/Flowers_grey.png'


const RegistryPage = ({ invitesSent }) => {
  if (invitesSent === false) {
    return (
      <div className="registry-section">
          <h2 className="registry-title">Registry</h2>
          <div id="when">
              <h3>Coming Soon!</h3>
              <h4 className="registry-section-subtext">Check back later to find links to our registry websites!</h4>
          </div>
      </div> 
    )
  }
  return (
      <div className="registry-section">
          <h2 className="registry-title">Registry</h2>
          <div className="registry-stores">
            <h4>Thank you for wanting to gift us something on our special day. We have been truly blessed so we are not asking for any gifts. If you still feel called to give, we have started a fundraising page for two charities that support causes near and dear to our hearts: The Alzheimer's Society of Canada and The Kidney Foundation of Canada.</h4>
            <h5>Follow the link Below</h5>
            <Registry 
              href='https://www.canadahelps.org/en/pages/graham-maddy-wedding-fundraiser/'
            />
            {/* <Registry
              logo={bbbLogo}
              href='https://www.bedbathandbeyond.ca/store/giftregistry/viewregistryguest/551810640?eventType=Wedding'
            />
            <Registry
              logo={amazonLogo}
              href='https://www.amazon.ca/wedding/share/grahamandmaddy'
            /> */}
          </div>
        <img src={flower} className = "det-flower" alt='flower'/>
      </div> 
  )
}

export default RegistryPage