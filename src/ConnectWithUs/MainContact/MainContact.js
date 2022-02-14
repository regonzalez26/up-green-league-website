import React from 'react'
import './MainContact.css'

import EmailYellowIcon from './img/email_yellow_icon.png'

class MainContact extends React.Component {
  contact_image_link = "https://64.media.tumblr.com/031ac6dc8d903babc85fcbf5be37fa80/fb135008d3a6287b-70/s1280x1920/770500c00f7541cf6667fa6bcc710e3bac9c909b.jpg"

  render(){
    return (
      <div id="main_contact_container">
        <div id="main_contact">
          <span className="small_text">You may also reach us through</span>
          <div id="main_contact_card">
            <div id="main_contact_img_container">
              <div id="main_contact_img" style={{backgroundImage: `url(${this.contact_image_link})`}}/>
            </div>
            <div id="main_contact_info">
              <p id="main_contact_position">VICE PRESIDENT FOR EXTERNAL AFFAIRS</p>
              <p id="main_contact_name">Jeremiah Abog</p>
              <div className="icon_link">
                <img className="icon" src={EmailYellowIcon} alt="email icon"/>
                <div className="icon_link_links">
                  <a href="mailto:upgreenleagueinc@gmail.com">
                    upgreenleagueinc@gmail.com
                  </a><br/>
                  <a href="mailto:jabog@up.edu.ph">
                    jabog@up.edu.ph
                  </a>
                </div>
              </div>
              <div className="icon_link">
                <img className="icon" src={EmailYellowIcon} alt="facebook icon"/>
                <a href="facebook.com/jeremiah.abog">
                  fb.com/jeremiah.abog
                </a>
              </div>
              <div className="icon_link">
                <img className="icon" src={EmailYellowIcon} alt="phone icon" />
                <a href="tel:09266764518">
                  (+63) 926 676 4518
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContact