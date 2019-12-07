import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ComponentA from './../components/ComponentA'
import Place from './../components/Place'

export default class ScreenA extends React.Component {
  constructor(props) {
    super(props);
   }

    render() {
    return (
    <View>
      <Button title="Go to ScreenB" onPress={() => this.props.navigation.navigate("RouteB")} />
      <Button title="Go to ScreenC (ReadingList)" onPress={() => this.props.navigation.navigate("RouteC")} />
      <Button title="back" onPress={() => this.props.navigation.goBack()} />
      <ComponentA />
    </View>)
  }
}
