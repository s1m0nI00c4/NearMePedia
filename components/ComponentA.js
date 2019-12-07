import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {getData} from './WikiAPIHandler'
import Place from './Place'

export default class ComponentA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: [],
	  }
   }

  saveData = async () => {
    const data = await getData()
    this.setState({data: data})
	}

  componentDidMount() {
    this.saveData()
  }

  render() {
    return (
    <View>
      {this.state.data.length === 0?
        <Text>Loading...</Text> :
        this.state.data.map( place => <Place title={place.title} dist={place.dist} pageid={place.pageid} saveTo={true}></Place>)}
    </View>)
  }
}
