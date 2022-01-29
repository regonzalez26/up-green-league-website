import React from 'react'
import './Footer.css'

import EmailYellowIcon from './img/email_yellow_icon.png';
import LinkedinYellowIcon from './img/linkedin_yellow_icon.png';

function Footer(){
  return(
    <div id="footer_container">
      <div id="footer">
            <div className="footer_block" id="footer_block1">
              <p id="footer_block1_header">Connect with the movement</p>
              <div className="footer_icon_link">
                <img className="footer_icon" src={EmailYellowIcon} alt="email icon"/>
                <a href="mailto:upgreenleagueinc@gmail.com">upgreenleagueinc@gmail.com</a>
              </div>
              <div className="footer_icon_link">
                <img className="footer_icon" src={LinkedinYellowIcon} alt="linkedin icon"/>
                <a href="https://www.linkedin.com/company/up-green-league">/company/up-green-league</a>
              </div>
            </div>
            <div className="footer_block" id="footer_block2">
              <div id="footer_block2_header">PROTECT. RESTORE. CONSERVE.</div>
              <div id="footer_block2_subheader">Promoting environmentalism as a way of life since 1992</div>
              <br/><br/>
              <div id="footer_copyright">&copy; 2022 UP Green League Inc.</div>
            </div>
      </div>
    </div>
  )
}

export default Footer