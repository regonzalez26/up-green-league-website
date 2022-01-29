import React from 'react'
import { Link } from 'react-router-dom'
import './Article.css'

class Article extends React.Component {
  article_content = require('./Articles/1.jsx').default

  render() {
    return(
      <div id="article_container">
        <Link to="/Home"><div id="back_button">{"<"}</div></Link>
        <div id="article_image" style={{backgroundImage: `url(${this.article_content.image_link})`}} />
        <div id="article_type">{this.article_content.type}</div>
        <div id="article_title">{this.article_content.title}</div>
        <div id="article_credentials">by {this.article_content.author} | {this.article_content.publish_date}</div>
        {this.article_content.content}
      </div>
    )
  }
}

export default  Article;