import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, Link, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))
