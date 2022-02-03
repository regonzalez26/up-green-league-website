import React from 'react'
import './ConnectWithUs.css'
import MainContact from './MainContact/MainContact'

import MessageForm from './MessageForm/MessageForm.js'

class ConnectWithUs extends React.Component {

  render() {
    return (
      <div id="connect_with_us_container">
        <MessageForm />
        <MainContact />
      </div>
    )
  }
}

export default ConnectWithUs