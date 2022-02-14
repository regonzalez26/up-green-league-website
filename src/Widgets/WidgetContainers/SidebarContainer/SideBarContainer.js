import React from 'react'
import './SideBarContainer.css'

class SideBarContainer extends React.Component {
  render = () => {
    return (
      <div id="side_bar_container">
        {this.props.content}
      </div>
    )
  }
}

export default SideBarContainer