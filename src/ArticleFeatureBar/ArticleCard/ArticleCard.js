import React from 'react';
import './ArticleCard.css'

class ArticleCard extends React.Component {
  render() {
    return (
      <div id="article_card">
        <div id="article_card_image_container">
          <div id="article_card_image"></div>
        </div>
        <div className="article_card_element" id="article_card_type">{this.props.dataFromParent.type}</div>
        <div className="article_card_element" id="article_card_title">{this.props.dataFromParent.title}</div>
        <div className="article_card_element" id="article_card_description">{this.props.dataFromParent.description}</div>
        <div className="article_card_element" id="article_card_options"><button id="article_card_btn_read_more">Read more</button></div>
      </div>
    );
  }
}

export default ArticleCard;