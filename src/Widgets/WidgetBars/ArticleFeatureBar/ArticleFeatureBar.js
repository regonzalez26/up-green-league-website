import React from 'react'
import './ArticleFeatureBar.css'

import ArticleCard from './ArticleCard/ArticleCard.js'

class ArticleFeatureBar extends React.Component {
  featured_article_ids = [1, 1, 1]
  full_card_width_on_container_width = 300

  // reset_article_card_width = () => {
  //   var bar_container = document.getElementById('article_feature_bar_container')
  //   var card_container = document.getElementById('article_feature_bar_card_container')
  //   var right_side_bar_container = document.getElementById('right_side_bar_container')

  //   if(bar_container.getBoundingClientRect().width > this.full_card_width_on_container_width){
  //     bar_container.style.width = "60%"
  //     card_container.style.width = ""
  //     right_side_bar_container.style.display = 'flex'
  //   } else {
  //     bar_container.style.with = "100%"
  //     card_container.style.width = "100%"
  //     right_side_bar_container.style.display = 'none'
  //   }
  // }

  // componentDidMount = () => {
  //   if(document.getElementById('article_feature_bar_container').getBoundingClientRect().width <= this.full_card_width_on_container_width){
  //     document.getElementById('right_side_bar_container').style.display = 'none'
  //     document.getElementById('article_feature_bar_container').style.width = '100%'
  //     document.getElementById('article_feature_bar_card_container').style.width = '100%'
  //   }

  //   window.addEventListener('resize', this.reset_article_card_width)
  // }

  // componentWillUnmount = () => {
  //   window.removeEventListener('resize', this.reset_article_card_width)
  // }

  render() {
    return(
      <div id="article_feature_bar_container">
        <div id="article_feature_bar_title">Latest From UPGL</div>

        {
          this.featured_article_ids.map((id, idx) =>(
            <div id="article_feature_bar_card_container" key={idx}>
              <ArticleCard id={id} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default  ArticleFeatureBar;