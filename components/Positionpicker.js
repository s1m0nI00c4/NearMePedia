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
    return { latitude: location.coords.latitude, longitude: location.coords.longitude }
  };

  handleSubmit = async () => {
    const coords = await this._getLocationAsync();
    this.props.onSubmit(coords)
  }

  render() {
    return (
    <View style={styles.box}>
      <Text style={styles.title}>Pick</Text>
      <Text style={styles.text}>{this.state.text} </Text>
      <Button title="Pick current position" onPress={this.handleSubmit} />
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



});
