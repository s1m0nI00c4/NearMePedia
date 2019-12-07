import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {getData} from './../components/ComponentA'
import Place from './../components/Place'

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
  }



  render() {
    return (
    <View>
      <Button title="Go to ScreenB" onPress={() => this.props.navigation.navigate("RouteB")} />
      <Button title="Go to ScreenC (ReadingList)" onPress={() => this.props.navigation.navigate("RouteC")} />
      <Button title="back" onPress={() => this.props.navigation.goBack()} />
      {this.state.data.length === 0?
        <Text>Loading...</Text> :
        this.state.data.map( place => <Place title={place.title} dist={place.dist} pageid={place.pageid} saveTo={true}></Place>)}
    </View>)
  }
}
