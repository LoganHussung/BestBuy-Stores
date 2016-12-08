import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './HomePage';
import StoresPage from './StoresPage';
import SingleStore from './singlestore'
import AboutPage from './AboutPage';
import errorPage from './404Error';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/HomePage" component={HomePage}/>
      <Route path="/StoresPage" component={StoresPage}/>
      <Route path="stores/:storeId" component={SingleStore}/>
      <Route path="/AboutPage" component={AboutPage}/>
    </Route>
    <Route path="*" component={errorPage}/>

  </Router>
), document.getElementById('root'))
