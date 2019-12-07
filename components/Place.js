import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import Constants from 'expo-constants';
import {getLink} from './WikiAPIHandler'

export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	url: "some url",
	  }
  }

  fetchLink = async () => {
    const url = await getLink(this.props.pageid)
    this.setState({url: url})
  }

  async componentDidMount() {
    this.fetchLink()
  }

  render() {
    return (
    <View>
      <Text>-----------</Text>
      <Text>{this.props.title}</Text>
      <Text>Distance: {this.props.dist} m</Text>
      <Button title="Go to Wiki" onPress={()=>{Linking.openURL(this.state.url)}} />
      <Button title="save for later"/>
    </View>)
  }
}
