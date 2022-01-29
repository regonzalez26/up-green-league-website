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

function Slideshow(){
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () => {
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      },
      delay
    );

    return () => {};
  }, [index]);

  return(
    <div id="header_slideshow_container">
      <div id="header_slideshow">
        <div
          id="header_slideshow_slider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
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
              className={`header_slideshow_dot ${index === idx ? "header_slideshow_active_dot" : ""}`}
              key={idx}
            ></div>
          ))}
      </div>

      <div id="header_slideshow_overlay"/>
    </div>
  )
}

export default Slideshow