import React, { Component } from 'react';
import { Link } from 'react-router'


export default class App extends Component {
  render() {
    return (
      <div >
        <div className="header">
          <h1>Find a Store</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/StoresPage">Stores</Link></li>
            <li><Link to="/AboutPage">About</Link></li>
          </ul>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
