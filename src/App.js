import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import NavtabMini from './Header/NavtabMini/NavtabMini.js'
import './App.css'

import Article from './Article/Article.js'

import MainScrollContainer from './Widgets/WidgetContainers/MainScrollContainer/MainScrollContainer.js';
import SideBarContainer from './Widgets/WidgetContainers/SidebarContainer/SideBarContainer.js';

import ArticleFeatureBar from './Widgets/WidgetBars/ArticleFeatureBar/ArticleFeatureBar.js';
import SocialMediaBar from './Widgets/WidgetBars/SocialMediaPlugins/SocialMediaBar.js';

import ConnectWithUs from './ConnectWithUs/ConnectWithUs.js';
import Releases from './Releases/Releases.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {nav_tab_mini: ""};
  }

  show_nav_tab = ()=>{
    var navtab_bottom = document.getElementById('navtab_container')?.getBoundingClientRect().bottom;
    
    if (navtab_bottom < 10){
      if (this.state.nav_tab_mini === ""){
        this.setState({nav_tab_mini: <NavtabMini />})
        window.scrollTo(
          { top: document.getElementById('header').getBoundingClientRect().height - document.getElementById('navtab_mini').getBoundingClientRect().height
          ,behavior: 'smooth' }
        )
      }
    } else {
        this.setState({nav_tab_mini: ""})
    }
  };


  componentDidMount = () => {
    window.addEventListener('scroll', this.show_nav_tab)
    document.getElementById('content_placeholder').style.minHeight = `${window.innerHeight}px`
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.show_nav_tab)
  }

  render  = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {this.state.nav_tab_mini}
          <div id="content_placeholder">
            <Switch>
              <Route exact path="/">
                  <Redirect to="/Home" />
              </Route>
              <Route exact path="/Home" component={MainScrollContainer}>
                <MainScrollContainer content={
                  <ArticleFeatureBar />
                  }/>
                <SideBarContainer content={<SocialMediaBar vertical={true}/>}/>
              </Route>

              <Route exact path="/Connect-With-Us" component={ConnectWithUs}>
                <MainScrollContainer content={
                  <ConnectWithUs />
                }/>
                <SideBarContainer content={<ArticleFeatureBar />} />
              </Route>
  
              <Route exact path="/Releases">
                <MainScrollContainer content={
                  <Releases />
                }/>
                <SideBarContainer content={<SocialMediaBar vertical={true}/>} />
              </Route>
  
              <Route exact path="/1" component={Article}>
                <Article id={1} />
                <SideBarContainer content={<ArticleFeatureBar />} />
              </Route>
              <Route exact path="/2" component={Article}>
                <Article id={2} />
                <SideBarContainer content={<ArticleFeatureBar />} />
              </Route>
            </Switch>

            {/* <a class="twitter-timeline" href="https://twitter.com/UPGreenLeague?ref_src=twsrc%5Etfw">Tweets by UPGreenLeague</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
            
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
