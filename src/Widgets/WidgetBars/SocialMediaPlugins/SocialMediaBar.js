import React from 'react'
import './SocialMediaBar.css'

class SocialMediaBar extends React.Component {
  componentDidMount = () => {
    if(this.props.vertical === true){
      document.getElementById('social_media_bar').style.flexWrap = 'wrap'

      Array.from(document.getElementsByClassName('plugin_box_container')).forEach(element => {
        element.style.paddingBottom = '100%'
        element.style.marginBottom = '25px'
      });
    }
  }

  render = () => {
    return (
      <div id="social_media_bar">
        <div className="plugin_box_container">
          <div className="plugin_box">
            Facebook Plugin
          </div>
        </div>
        <div className="plugin_box_container">
          <div className="plugin_box">
            Twitter Plugin
          </div>
        </div>
        <div className="plugin_box_container">
        <div className="plugin_box">
            Instagram Plugin
          </div>
        </div>
      </div>
    )
  }
}

export default SocialMediaBar