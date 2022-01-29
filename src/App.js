import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import './App.css'

import ArticleFeatureBar from './ArticleFeatureBar/ArticleFeatureBar.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div id="content_placeholder">
          <Switch>
            
            <Route exact path="/Home" component={ArticleFeatureBar}>
              <ArticleFeatureBar />
            </Route>
            <Route exact path="/Releases">
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
