import React from "react";
import "./MainAbout.css";

class MainAbout extends React.Component {
  about_image_link =
    "https://64.media.tumblr.com/031ac6dc8d903babc85fcbf5be37fa80/fb135008d3a6287b-70/s1280x1920/770500c00f7541cf6667fa6bcc710e3bac9c909b.jpg";
  render() {
    return (
      <div id="main_about_container">
        <div id="main_about">
          <p id="Title">About Our Movement</p>
          <div id="main_about_card">
            <div id="main_about_img_container">
              <div id="main_about_img">
                <div
                  id="main_about_img"
                  style={{ backgroundImage: `url(${this.about_image_link})` }}
                />
              </div>
            </div>
          </div>
          <p id="about_content">
            The UP Green League, Inc. (UPGL) is a non-profit, non-sectarian,
            non-partisan organization composed of concerns young individuals who
            advocate environmentalism as a way of life. UPGL aims to protect,
            restore and conserve the natural environment through information
            dissemination campaigns and by promoting a pro-active consciousness
            regarding the present state of both local and global environments.
          </p>
        </div>
      </div>
    );
  }
}

export default MainAbout;
