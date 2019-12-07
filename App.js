import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenA from './screens/ScreenA'
import ScreenB from './screens/ScreenB'
import ScreenC from './screens/ScreenC'


ScreenB.navigationOptions = {title: "Screen B"}

ScreenA.navigationOptions = {title: "Screen A"}

ScreenC.navigationOptions = {title: "Screen C"}


const routes = {
    RouteA: {screen: ScreenA},
    RouteB: {screen: ScreenB},
    RouteC: {screen: ScreenC}
}

const options = {initialRouteName: 'RouteB' }
const AppNavigator = createStackNavigator(routes, options)
const AppContainer = createAppContainer(AppNavigator)

export default class NearMePedia extends React.Component {

	render(){
		return (
			<AppContainer></AppContainer>
		)
	}
}
