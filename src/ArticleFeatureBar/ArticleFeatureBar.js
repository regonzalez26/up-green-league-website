import React from 'react'
import './ArticleFeatureBar.css'

import ArticleCard from './ArticleCard/ArticleCard.js'

class ArticleFeatureBar extends React.Component {
  featured_article_ids = [1]
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