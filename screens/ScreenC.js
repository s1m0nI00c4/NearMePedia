import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ComponentC from './../components/ComponentC'

export default class ScreenA extends React.Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
    <View>
      <Button title="Go to ScreenB" onPress={() => this.props.navigation.navigate("RouteB")} />
      <ComponentC />
      <Button title="back" onPress={() => this.props.navigation.goBack()} />
    </View>)
  }
}
