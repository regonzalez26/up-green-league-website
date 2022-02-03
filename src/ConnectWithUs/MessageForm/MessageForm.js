import React from 'react'
import './MessageForm.css'

class MessageForm extends React.Component {
  render (){
    return(
      <div id="message_form_container">
        <form>
          <table>
            <tbody>
              <tr>
                <td className="message_form_label">Name</td>
                <td className="message_form_input"><input type="text" /></td>
              </tr>
              <tr>
                <td className="message_form_label">Email</td>
                <td className="message_form_input"><input type="text" /></td>
              </tr>
              <tr>
                <td className="message_form_label">Organization</td>
                <td className="message_form_input"><input type="text" /></td>
              </tr>
              <tr>
                <td className="message_form_label">Message</td>
                <td className="message_form_input"><textarea rows="10" wrap="hard"></textarea></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default MessageForm