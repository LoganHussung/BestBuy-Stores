import React, {Component} from 'react';
import api from './Api';
const axios = require('axios');
import GoogleMap from 'google-map-react';
import StorePin from './storepin';

export default class SingleStore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storePicked: {}
    }
  }
  componentDidMount() {
    this.getStore()
  }
  getStore() {
    axios.get(api() + '/stores/' + this.props.params.storeId).then((response) => {
      let storePicked = response.data;
      this.setState({storePicked});
      console.log(storePicked)
    })
  }
  render() {
    return (
      <div className="Map" style={{height:400}}>
        <GoogleMap center={{lat:this.state.storePicked.lat, lng:this.state.storePicked.lng}} defaultZoom={11}>
         <StorePin lat={this.state.storePicked.lat} lng={this.state.storePicked.lng} /* Kreyser Avrora */ />
        </GoogleMap>
        <h2>{this.state.storePicked.name}</h2>
        <h3>{this.state.storePicked.address + ', ' + this.state.storePicked.city + ', ' + this.state.storePicked.state + ', ' + this.state.storePicked.zip}</h3>
        <h4>{this.state.storePicked.hours}</h4>

      </div>
    );
  }
}
