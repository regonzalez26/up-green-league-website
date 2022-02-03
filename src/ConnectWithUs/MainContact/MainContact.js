import React from 'react'
import './MainContact.css'

import EmailYellowIcon from './img/email_yellow_icon.png'

class MainContact extends React.Component {
  render(){
    return (
      <div id="main_contact_container">
        <div id="main_contact">
          <span className="small_text">You may also reach us through</span>
          <div id="main_contact_card">
            <div id="main_contact_img_container">
              <div id="main_contact_img" />
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
                <a href="#">
                  (+63) 9xx xxx xxxx
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