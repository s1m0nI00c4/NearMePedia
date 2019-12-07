import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Positionpicker from './Positionpicker'
import Georesolver from './Georesolver'

export default class ComponentB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gscoord: "some coordinates"
    }
  }

  onSubmit = coords => {
        /*this.props.screenProps.addContact(coords)*/
        console.log("My coords are: " + coords.latitude + " " + coords.longitude)
        this.props.navigation.navigate("RouteA")
    }

  render() {
    return (
    <View>
      <Text>Welcome to the NearMePedia App</Text>
      <Text> Please choose one of the following options </Text>
      <Georesolver onSubmit={this.onSubmit}/>
      <Positionpicker onSubmit={this.onSubmit} />
    </View>)
  }
}
