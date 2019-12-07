import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import Constants from 'expo-constants';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	url: "some url",
	  }
   }

  fetchLink = async (pageid) => {

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: "query",
      format: "json",
      pageids: pageid,
      prop: "info",
      inprop: "url|talkid"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    const response = await fetch(url);
    const myJSONResponse = await response.json()
    const p = await myJSONResponse.query.pages
    this.setState({url: p[pageid].fullurl})

	}

  componentDidMount() {
    this.fetchLink(this.props.pageid)
  }

  render() {
    return (
    <View>
      <Text>-----------</Text>
      <Text>{this.props.title}</Text>
      <Text>Distance: {this.props.dist} m</Text>
      <Text>{this.props.pageid}</Text>
      <Button title="Go to Wiki" onPress={()=>{Linking.openURL(this.state.url)}} />
      { this.props.saveTo===true ?
        <Button title="save for later" onPress={this.props.onDelete} />  :
        <Button title="delete" onPress={this.props.onDelete} />
      }
      <Text>{this.state.url}</Text>
      <Text>{this.props.saveTo}</Text>
    </View>)
  }
}
