import React from 'react'
import { Link } from 'react-router-dom'
import './Article.css'

class Article extends React.Component {
  article_content = require(`./Articles/${this.props.id}.jsx`).default
  full_width_on_window_width = 700

  // reset_article_width = () => {
  //   if(window.innerWidth > this.full_width_on_window_width){
  //     document.getElementById('article_container').style.width = "60%"
  //     document.getElementById('right_side_bar_container').style.display = 'flex'
  //   } else {
  //     document.getElementById('article_container').style.width = "100%"
  //     document.getElementById('right_side_bar_container').style.display = 'none'
  //   }
  // }

  // componentDidMount = () => {
  //   if (window.innerWidth < this.full_width_on_window_width) {
  //     document.getElementById('article_container').width = "100%"
  //   }

  //   window.addEventListener('resize', this.reset_article_width)
  // }

  // componentWillUnmount = () => {
  //   window.removeEventListener('resize', this.reset_article_width)
  // }

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