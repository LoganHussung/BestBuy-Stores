import React, {Component} from 'react';
import api from './Api';
import {Link} from 'react-router';
const axios = require('axios');

export default class Stores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storeCities: []
    }
  }
  componentDidMount() {
    this.getAllStores()
  }
  getAllStores() {
    axios.get(api() + '/stores').then((store) => {
      console.log(store)
      let storeCities = store.data.data;
      this.setState({storeCities});
    })
  }
  render() {
    return (
      <div>
        <ul className="allstores">
          {this.state.storeCities.map((data) => {
            return (
              <li key={data.id} className="aStore">
                <Link to={"/stores/" + data.id}><h1>{data.name}</h1></Link>
                <p>{data.address + ', ' + data.city + ', ' + data.state + ' ' + data.zip}</p>
                <p>{data.hours}</p>



              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}
