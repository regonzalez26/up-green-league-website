import React from 'react'
import './MainScrollContainer.css'

class MainScrollContainer extends React.Component {
  render = () => {
    return (
      <div id="main_scroll_container">
        {this.props.content}
      </div>
    )
  }
}

export default MainScrollContainer