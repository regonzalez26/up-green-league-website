import React from 'react'
import './ArticleFeatureBar.css'

import ArticleCard from './ArticleCard/ArticleCard.js'

class ArticleFeatureBar extends React.Component {
  render() {
    return(
      <div id="article_feature_bar_container">
        <div id="article_feature_bar_title">Latest From UPGL</div>
        <div id="article_feature_bar_card_container">
          <ArticleCard dataFromParent = {
            {
              type: 'Statement',
              title: 'Title',
              description: 'Lorem ipsum is simply dummy test of the printing and type setting industry. Lorem ipsum'
            }
          } />
        </div>
        <div id="article_feature_bar_card_container">
          <ArticleCard dataFromParent = {
            {
              type: 'Statement',
              title: 'Title',
              description: 'Lorem ipsum is simply dummy test of the printing and type setting industry. Lorem ipsum'
            }
          } />
        </div>
        <div id="article_feature_bar_card_container">
          <ArticleCard dataFromParent = {
            {
              type: 'Statement',
              title: 'Title',
              description: 'Lorem ipsum is simply dummy test of the printing and type setting industry. Lorem ipsum'
            }
          } />
        </div>
      </div>
    )
  }
}

export default  ArticleFeatureBar;