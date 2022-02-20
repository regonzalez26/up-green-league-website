import React from 'react'
import "./Header.css";
import HeaderSlideshow from "./HeaderSlideshow/HeaderSlideshow.js"
import HeaderLogo from "./HeaderLogo/HeaderLogo.js"
import Navtab from "./Navtab/Navtab.js"

class Header extends React.Component {
  componentDidMount = () => {
    document.getElementById('header').style.height = `${window.innerHeight}px`;
  }

  render = () => {
    return(
      <div id="header">
        <HeaderSlideshow />
        <HeaderLogo />
        <Navtab />
      </div>
    )
  }
}

export default Header