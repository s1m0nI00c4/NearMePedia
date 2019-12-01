import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const ScreenB = props => (
    <View>
      <Button title="Go to ScreenA" onPress={() => props.navigation.navigate("RouteA")} />
      <Button title="back" onPress={() => props.navigation.goBack()} />
    </View>)

ScreenB.navigationOptions = {title: "Screen B"}

const ScreenA = props => (
    <View>
      <Button title="Go to ScreenB" onPress={() => props.navigation.navigate("RouteB")} />
      <Button title="Go to ScreenC (ReadingList)" onPress={() => props.navigation.navigate("RouteC")} />
      <Button title="back" onPress={() => props.navigation.goBack()} />
    </View>)

ScreenA.navigationOptions = {title: "Screen A"}

const ScreenC = props => (
    <View style="style.container">
      <Button title="Go to ScreenB" onPress={() => props.navigation.navigate("RouteB")} />
      <Button title="back" onPress={() => props.navigation.goBack()} />
    </View>)

ScreenC.navigationOptions = {title: "Screen C"}


const routes = {
    RouteA: {screen: ScreenA},
    RouteB: {screen: ScreenB},
    RouteC: {screen: ScreenC}
}

const options = {initialRouteName: 'RouteB' }
const AppNavigator = createStackNavigator(routes, options)

const AppContainer = createAppContainer(AppNavigator)

export default class ContactApp extends React.Component {

	render(){
		return (
			<AppContainer></AppContainer>
		)
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
