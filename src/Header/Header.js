import React from 'react'
import "./Header.css";
import HeaderSlideshow from "./HeaderSlideshow/HeaderSlideshow.js"
import HeaderLogo from "./HeaderLogo/HeaderLogo.js"
import Navtab from "./Navtab/Navtab.js"

function Header(){
  return(
    <div id="header">
      <HeaderSlideshow />
      <HeaderLogo />
      <Navtab />
    </div>
  )
}

export default Header