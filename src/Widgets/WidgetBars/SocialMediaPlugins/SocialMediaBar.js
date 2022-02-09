import React from 'react'
import './SocialMediaBar.css'

function SocialMediaBar(){
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

export default SocialMediaBar