import React from 'react';
import { Link } from 'react-router-dom'
import './ArticleCard.css'

class ArticleCard extends React.Component {
  article = require(`./../../Article/Articles/${this.props.id}.jsx`).default

  render() {
    return (
      <div id="article_card">
        <div id="article_card_image_container">
          <Link to={`/${this.props.id}`} >
            <div id="article_card_image" style={{backgroundImage: `url(${this.article.image_link})`}}></div>
          </Link>
        </div>
        <div className="article_card_element" id="article_card_type">{this.article.type}</div>
        <div className="article_card_element" id="article_card_title">{this.article.title}</div>
        <div className="article_card_element" id="article_card_description">{this.article.short_description}</div>
        <div className="article_card_element" id="article_card_options">
          <Link to={`/${this.props.id}`} ><button id="article_card_btn_read_more">Read more</button></Link>
        </div>
      </div>
    );
  }
}

export default ArticleCard;