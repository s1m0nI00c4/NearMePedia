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

const ScreenA = async props =>{

  var url = "https://en.wikipedia.org/w/api.php";

  var params = {
    action: "query",
    list: "geosearch",
    gscoord: "37.7891838|-122.4033522",
    gsradius: "10000",
    gslimit: "10",
    format: "json"
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

  const response = await fetch(url);
  var myJSONResponse = await response.json();
  console.log(myJSONResponse)
  var placesArray = await myJSONResponse.query.geosearch;
  for (var place in placesArray) {
            console.log(placesArray[place].title);
        }

  return(
    <View>
      <Button title="Go to ScreenB" onPress={() => props.navigation.navigate("RouteB")} />
      <Button title="Go to ScreenC (ReadingList)" onPress={() => props.navigation.navigate("RouteC")} />
      <Button title="back" onPress={() => props.navigation.goBack()} />
      {placesArray.map(place => (<Text>{place.title}</Text>) )}
    </View>)
}

ScreenA.navigationOptions = {title: "Screen A"}

const ComponentA = props => {
  var url = "https://en.wikipedia.org/w/api.php";

  var params = {
    action: "query",
    list: "geosearch",
    gscoord: "37.7891838|-122.4033522",
    gsradius: "10000",
    gslimit: "10",
    format: "json"
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

  var pages = [];

  fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        pages = response.query.geosearch;
    })
    .catch(function(error){console.log(error);});

    return (pages.map(place => {<Text>{place.title}</Text>}))
}

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
