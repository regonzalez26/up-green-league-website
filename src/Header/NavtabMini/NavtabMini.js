import React from 'react'
import { Link } from "react-router-dom";

import './NavtabMini.css'

import SearchBarIcon from './../Navtab/img/search.png'
import FacebookWhiteIcon from './../Navtab/img/fb_white_icon.png'
import InstagramWhiteIcon from './../Navtab/img/ig_white_icon.png'
import LinkedinWhiteIcon from './../Navtab/img/linkedin_white_icon.png'
import TwitterWhiteIcon from './../Navtab/img/twitter_white_icon.png'

function NavtabMini(){
  return(
    <div id="navtab_mini_container">
      <div id="navtab_mini">
        <form>
        <input type="search" id="navtab_search_field"/>
        <button type="submit" hidden={true}>
        </button>
        <img src={SearchBarIcon} alt="search bar icon"/>
        </form>
        <div className="navtab_mini_option"><Link to="/Home">HOME</Link></div>
        <div className="navtab_mini_option"><Link to="/About">ABOUT OUR MOVEMENT</Link></div>
        <div className="navtab_mini_option"><Link to="/Connect-With-Us">CONNECT WITH US</Link></div>
        <div className="navtab_mini_option"><Link to="/Releases">RELEASES</Link></div>
        <a href='https://www.facebook.com/upgreenleague'><img className="navtab_mini_icon" src={FacebookWhiteIcon} alt="facebook"/></a>
        <a href='https://www.instagram.com/upgreenleague/'><img className="navtab_mini_icon" src={InstagramWhiteIcon} alt="instagram"/></a>
        <a href='https://www.linkedin.com/company/up-green-league'><img className="navtab_mini_icon" src={LinkedinWhiteIcon} alt="linkedin"/></a>
        <a href='https://www.twitter.com/upgreenleague'><img className="navtab_mini_icon" src={TwitterWhiteIcon} alt="twitter"/></a>
      </div>
    </div>
  );
}

export default NavtabMini