import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Constants from 'expo-constants';

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
        const coords = await myJSONresponse.results[0].geometry.location
        return { latitude: coords.lat, longitude: coords.lng }}
      else {this.setState({error: "I just broke Google. Oops."})}
    }

    else { this.setState({error: "Please enter a valid location!!!"})}
  };

  handleSubmit = async () => {
        const data = await this._getLocationAsync()
        this.props.onSubmit(data)
        this.props.onSelect(data)
    }

  render() {
    return (
    <View style={styles.box}>
      <Text style={styles.title}> Search </Text>
      <Text style={styles.text}> Enter the location you want to browse </Text>
      <TextInput style={styles.field} placeholder="My location" value={this.state.front} onChangeText={this.handleLocationChange} />
        <Button
          title="Search location!"
          color="#66ff66"
          onPress={this.handleSubmit}
      />
      <Text>{this.state.error} </Text>
    </View>)
  }
}

const styles = StyleSheet.create({

  title: {
    marginBottom: 14,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    margin: 14,
    fontSize: 14,
    textAlign: 'center',
  },

  box: {
    padding: 14,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: "#EDF9FF",
    marginBottom: 7,
  },

  field: {
    padding: 7,
    marginBottom: 14,
    fontSize: 14,
    textAlign: 'center',
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
  },


});
