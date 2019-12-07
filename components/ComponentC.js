import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import Place from './Place'
import Constants from 'expo-constants';

export default class ScreenC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: [],
	  }
   }

  deleteItem(pageid) {
    console.log("smt")
    this.setState((prevState) => ({
        data: prevState.data.filter(item => item.pageid !== pageid),
    }))
  }

  addItem() {
    this.setState({data: [{pageid: 123456, title: "testTitle", dist: 25 , url: "https://www.google.com"}]})
  }

  render() {
    return (
    <ScrollView>
      <Text>Here a list of reads you saved</Text>
      {this.state.data.map( place => <Place title={place.title} dist={place.dist} pageid={place.pageid}> url={place.url} saveTo={false} onDelete={() => this.deleteItem(place.pageid)}}</Place>)}
      <Button title="add" onPress={() => this.addItem()} />
    </ScrollView>)
  }
}
