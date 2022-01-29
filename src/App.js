import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import NavtabMini from './Header/NavtabMini/NavtabMini.js'
import './App.css'

import Article from './Article/Article.js'

import ArticleFeatureBar from './ArticleFeatureBar/ArticleFeatureBar.js'
import RightSideBar from './RightSideBar/RightSideBar.js';

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
      }
    } else {
      this.setState({nav_tab_mini: ""})
    }
  };


  componentDidMount = () => {
    window.addEventListener('scroll', this.show_nav_tab)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.show_nav_tab)
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {this.state.nav_tab_mini}
          <div id="content_placeholder">
            <Redirect from="/" to="/Home" />
            <Switch>
              
              <Route exact path="/Home" component={ArticleFeatureBar}>
                <ArticleFeatureBar />
                <RightSideBar />
              </Route>
  
              <Route exact path="/Releases">
              </Route>
  
              <Route exact path="/1" component={Article}>
                <Article id={1} />
                <RightSideBar />
              </Route>
            </Switch>
            
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
