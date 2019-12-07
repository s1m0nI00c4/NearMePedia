import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Positionpicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Note that you'll have to allow the app to get your current position",
    }
   }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        text: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location.coords)
    return { latitude: location.coords.latitude, longitude: location.coords.longitude }
  };

  handleSubmit = async () => {
    const coords = await this._getLocationAsync();
    this.props.onSubmit(coords)
  }

  render() {
    return (
    <View>
      <Button title="Pick current position" onPress={this.handleSubmit} />
      <Text>{this.state.text} </Text>
    </View>)
  }
}
