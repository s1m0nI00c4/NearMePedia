import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {getData} from './../components/ComponentA'

export default class ScreenA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: [],
	  }
   }

  fetchData = async () => {

    const data = await getData()
    this.setState({data: data})

	}

  componentDidMount() {
    this.fetchData()

    console.log(this.state.data[0].title)
  }



  render() {
    return (
    <View>
      <Button title="Go to ScreenB" onPress={() => this.props.navigation.navigate("RouteB")} />
      <Button title="Go to ScreenC (ReadingList)" onPress={() => this.props.navigation.navigate("RouteC")} />
      <Button title="back" onPress={() => this.props.navigation.goBack()} />
      <Text>{}</Text>
    </View>)
  }
}
