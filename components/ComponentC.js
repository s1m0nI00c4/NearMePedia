import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Linking } from 'react-native';
import Constants from 'expo-constants';

const Item = props => {
  return (
    <View>
      <Text>-----------</Text>
      <Text>{props.title} - {props.pageid}</Text>
      <Text>Distance: {props.dist} m</Text>
      <Button title="Go to Wiki" onPress={()=>{Linking.openURL(props.url)}} />
      <Button onPress={props.onDelete} title="delete" />
    </View>)
}

export default class ComponentC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: [],
	  }
   }

  deleteItem(id) {
    const newData = this.state.data.filter(item => item.pageid !== id);
    this.setState({ data: newData });
  }

  addItem = () => {
    this.setState({data: [{pageid: 123456, title: "testTitle", dist: 25 , url: "https://www.google.com"}]})
  }

  render() {
    return (
    <ScrollView>
      <Text>Here a list of reads you saved</Text>
      {this.state.data.map( place => <Item
                                        title={place.title}
                                        onDelete={() => this.deleteItem(place.pageid)}
                                        dist={place.dist}
                                        pageid={place.pageid}
                                        url={place.url}
                                        saveTo={false}
                                      />
                          )}
      <Button title="add" onPress={() => this.addItem()} />
    </ScrollView>)
  }
}
