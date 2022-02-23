import React from "react";
import MainAbout from "./MainAbout/MainAbout.js";
import ExeCom from "./ExeCom/ExeCom.js";

class AboutOurMovement extends React.Component {
  render() {
    return (
      <div id="about_our_movement_container">
        <div className="main_scroll_element">
          <MainAbout />
        </div>
        <hr />
        <div className="main_scroll_element">
          <ExeCom />
        </div>
      </div>
    );
  }
}
export default AboutOurMovement;
