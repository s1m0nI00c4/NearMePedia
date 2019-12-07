import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ComponentB from './../components/ComponentB'

export default class ScreenB extends React.Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
    <View>
      <Button title="Go to ScreenA" onPress={() => this.props.navigation.navigate("RouteA")} />
      <ComponentB />
    </View>)
  }
}
