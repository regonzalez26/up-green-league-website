import React from 'react'
import { Link } from 'react-router-dom'

import './ReleaseItem.css'

class ReleaseItem extends React.Component {
  render = () => {
    return(
      <div id="release_item_container">
        <div id="release_item_image" style={{backgroundImage: `url(${this.props.item.image_link})`}}/>
        <div id="release_item_content">
          <div className="release_item_content_element" id="release_item_type">{this.props.item.type}</div>
          <div className="release_item_content_element" id="release_item_title">{this.props.item.title}</div>
          <div className="release_item_content_element" id="release_item_description">{this.props.item.short_description}</div>
          <div className="release_item_content_element">
            <Link to={`/${this.props.item.id}`} ><button id="article_card_btn_read_more">Read more</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ReleaseItem