import React from 'react'
import './HeaderLogo.css'
import OrgLogo from './img/upgl_logo.png'

function HeaderLogo(){
  return(
    <div id="header_logo_container">
      <div id="header_logo">
        <div id="org_logo_container"><img id="org_logo" src={OrgLogo} alt="up green league logo"/></div>
        <div id="header_logo_text">UP GREEN<br/>LEAGUE, INC.</div>
      </div>
    </div>
  )
}

export default HeaderLogo