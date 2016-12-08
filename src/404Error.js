import React, { Component } from 'react';
import logo from './error.jpg';


export default class errorPage extends Component{
  render() {
    return (
      <div className="errorPic">
        <h1>Return to the HomePage</h1>
        <img alt="logo" src={logo}/>
      </div>
  )
  }
}
