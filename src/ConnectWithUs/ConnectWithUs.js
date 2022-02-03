import React from 'react'
import './ConnectWithUs.css'

import MessageForm from './MessageForm/MessageForm.js'

class ConnectWithUs extends React.Component {

  render() {
    return (
      <div id="connect_with_us_container">
        <MessageForm />
      </div>
    )
  }
}

export default ConnectWithUs