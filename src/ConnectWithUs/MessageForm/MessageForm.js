import React from 'react'
import './MessageForm.css'

import apiKey from './../../emailkey.js'
import emailjs from '@emailjs/browser'
emailjs.init(apiKey.USER_ID)

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
           .then(
            (result) => {
              alert("Message Sent");
            },
            (error) => {
              alert("An error occurred");
            }
           );
  }

  render (){
    return(
      <div id="message_form_container">
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td className="message_form_label">Name</td>
                <td className="message_form_input"><input type="text" name="Name"/></td>
              </tr>
              <tr>
                <td className="message_form_label">Email</td>
                <td className="message_form_input"><input type="text" name="Email"/></td>
              </tr>
              <tr>
                <td className="message_form_label">Organization</td>
                <td className="message_form_input"><input type="text" name="Organization"/></td>
              </tr>
              <tr>
                <td className="message_form_label">Message</td>
                <td className="message_form_input"><textarea type="text" name="Message" rows="10" wrap="hard"></textarea></td>
              </tr>
              <tr>
                <td className="message_form_submit"><input type="submit" value="Send"/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default MessageForm