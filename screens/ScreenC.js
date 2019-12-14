import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ComponentC from './../components/ComponentC';
import { Provider } from "unstated";

export default class ScreenA extends React.Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
    <Provider>
      <View>
        <Button title="Go to ScreenB" onPress={() => this.props.navigation.navigate("RouteB")} />
        <ComponentC
          saveForLater={this.props.navigation.getParam('saveForLater', {pageid: 0, title: 'error', dist: 0, url: 'https://www.google.com'} )}
        />
        <Button title="back" onPress={() => this.props.navigation.goBack()} />
      </View>
    </Provider>)
  }
}
