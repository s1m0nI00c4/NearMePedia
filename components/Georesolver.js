import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class Georesolver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      error: null
    }
   }

  handleLocationChange = location => {
    this.setState({location: location})
  }

  _getLocationAsync = async () => {
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    if (this.state.location !== '') {

      url += this.state.location;
      url += "&key=AIzaSyDJJ5e2qA5k6HpTHsw0NVFSfqdWS8sMW4A";

      const response = await fetch(url);
      const myJSONresponse = await response.json()
      if (myJSONresponse.status === "OK") {
      console.log(myJSONresponse.results[0].geometry.location)
      const coords = await myJSONresponse.results[0].geometry.location
      return { latitude: coords.lat, longitude: coords.lng }}
      else {this.setState({error: "I just broke Google. Oops."})}
    }

    else { this.setState({error: "Please enter a valid location!!!"})}
  };

  handleSubmit = async () => {
        const data = await this._getLocationAsync()
        this.props.onSubmit(data)
    }

  render() {
    return (
    <View>
      <Text> Enter the location you want to browse </Text>
      <TextInput placeholder="My location" value={this.state.front} onChangeText={this.handleLocationChange} />
        <Button
          title="Search location!"
          color="#66ff66"
          onPress={this.handleSubmit}
      />
      <Text>{this.state.error} </Text>
    </View>)
  }
}
