import React from 'react'
import './ConnectWithUs.css'
import MainContact from './MainContact/MainContact'
import MessageForm from './MessageForm/MessageForm.js'
import SocialMediaBar from '../Widgets/WidgetBars/SocialMediaPlugins/SocialMediaBar'

class ConnectWithUs extends React.Component {

  render() {
    return (
      <div id="connect_with_us_container">
        <div className="main_scroll_element">
          <MessageForm />
        </div>
        <div className="main_scroll_element">
          <MainContact />
        </div>
        <div className="main_scroll_element">
          <SocialMediaBar />
        </div>
      </div>
    )
  }
}

export default ConnectWithUs