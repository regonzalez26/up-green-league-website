import React from "react";
import "./HeaderSlideshow.css";

import S1 from './img/1.png';
import S2 from './img/2.png';
import S3 from './img/3.png';
import S4 from './img/4.png';
import S5 from './img/5.png';
import S6 from './img/6.png';

const images = [S1,S2,S3,S4,S5,S6]

const delay = 8000;

class Slideshow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
  }

  componentDidMount = () => {
    setInterval(
      () => {
        this.setState({
          index: (this.state.index + 1)%(images.length)}
        )
      },
      delay
    );

    document.getElementById('header_slideshow_overlay').style.height = `${window.innerHeight}px`
    document.getElementById('header_slideshow').style.height = `${window.innerHeight}px`
  }

  render = () => {
    return(
      <div id="header_slideshow_container">
        <div id="header_slideshow">
          <div
            id="header_slideshow_slider"
            style={{ transform: `translate3d(${-this.state.index * 100}%, 0, 0)` }}
          >
            {
              images.map((image, index) => (
              <div
                id="header_slideshow_slide"
                key={index}
                style={{ backgroundImage: `url(${image})` }}  
              /> 
              ))
            }
          </div>
        </div>

        <div id="header_slideshow_dots">
            {images.map((_,idx) => (
              <div
                className={`header_slideshow_dot ${this.state.index === idx ? "header_slideshow_active_dot" : ""}`}
                key={idx}
              ></div>
            ))}
        </div>

        <div id="header_slideshow_overlay"/>
      </div>
    )
  }
}

export default Slideshow