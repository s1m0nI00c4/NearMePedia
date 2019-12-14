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
    try {
    const url = await getLink(this.props.pageid)
    this.setState({url: url})
    } catch(error) {
    console.log(error.message)
    }
  }

  async componentDidMount() {
    this.fetchLink()
  }

  render() {
    return (
    <View style={styles.box}>
      <Text style={styles.subtitle}>{this.props.title}</Text>
      <Text style={styles.text}>Distance: {this.props.dist} m</Text>
      <View style={styles.container}>
        <View style={styles.buttonContainer, {margin: 7}} >
          <Button title="Go to Wikipedia" color="#66ff66" onPress={()=>{Linking.openURL(this.state.url)}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="save for later" onPress={() => this.props.onSelect({pageid: this.props.pageid, title: this.props.title, dist: this.props.dist, url: this.state.url})}/>
        </View>
      </View>
    </View>)
  }
}

const styles = StyleSheet.create({

  subtitle: {
    marginBottom: 7,
    marginTop: 7,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    margin: 7,
    fontSize: 14,
    textAlign: 'center',
  },

  box: {
    paddingHorizontal: 14,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
    backgroundColor: "#EDF9FF",
  },

  container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    }


});
