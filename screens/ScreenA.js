import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ComponentA from './../components/ComponentA'
import Place from './../components/Place'
import {Provider} from 'unstated'

export default class ScreenA extends React.Component {
  constructor(props) {
    super(props);
   }

    render() {
    return (
    <Provider>
      <View>
        <Button title="Go to ScreenB" onPress={() => this.props.navigation.navigate("RouteB")} />
        <Button title="Go to ScreenC (ReadingList)" onPress={() => this.props.navigation.navigate("RouteC")} />
        <Button title="back" onPress={() => this.props.navigation.goBack()} />
        <ComponentA
          coords={this.props.navigation.getParam('selectedLatLong', {latitude:0, longitude:0} )}
          onSelect={(item) => {
                this.props.navigation.navigate("RouteC", {saveForLater: item})
                }}
        />
      </View>
    </Provider>)
  }
}
