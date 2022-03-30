import React from 'react'
import { Link } from 'react-router-dom'
import './Article.css'

class Article extends React.Component {
  constructor(props){
    super(props)
    this.state = {article_content: require(`./Articles/${this.props.id}.jsx`).default};
  }

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

  componentDidMount = () => {
    console.log(this.state.article_content.title)
  }

  //   window.addEventListener('resize', this.reset_article_width)
  // }

  componentWillUnmount = () => {
    console.log("unmounting")
  }

  render() {
    return(
      <div id="article_container">
        <Link to="/Home"><div id="back_button">{"<"}</div></Link>
        <div id="article_image" style={{backgroundImage: `url(${this.state.article_content.header_image_link})`}} />
        <div id="article_type">{this.state.article_content.type}</div>
        <div id="article_title">{this.state.article_content.title}</div>
        <div id="article_credentials">by {this.state.article_content.author} | {this.state.article_content.publish_date}</div>
        {this.state.article_content.content}
      </div>
    )
  }
}

export default  Article;