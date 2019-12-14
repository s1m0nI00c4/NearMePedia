iimport React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ComponentB from './../components/ComponentB';
import { Provider } from "unstated";

export default class ScreenB extends React.Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
    <Provider>
      <View>
        <Button title="Go to ScreenA" onPress={() => this.props.navigation.navigate("RouteA")} />
        <ComponentB onSelect={(latlong) => {
                this.props.navigation.navigate("RouteA", {selectedLatLong: latlong})
                }} />
      </View>
    </Provider>)
  }
}
