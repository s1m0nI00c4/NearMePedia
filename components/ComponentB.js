import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'
import Positionpicker from './Positionpicker'
import Georesolver from './Georesolver'
import {_getPositionAsync} from './GMapsAPIHandler'

const Position = props => {
  return (
    <TouchableOpacity style={{flex: 1, flexDirection: "row", marginBottom: 7}}>
      <Text style={styles.position}>{props.address}</Text>
      <Button style={{outerHeight: 24}} title="Delete" color="red" onPress={props.onDelete} />
    </TouchableOpacity>
  )
}

export default class ComponentB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gscoord: []
    }
  }

  onSubmit = async coords => {
    const addr = await _getPositionAsync(coords)
    coords.address = addr
    var newGscoord = this.state.gscoord;
    newGscoord.push(coords)
    this.setState({gscoord: newGscoord})
   }

  deletePosition = address => {
    console.log("smt")
     const newGscoord = this.state.gscoord.filter( item => item.address !== address)
     this.setState({gscoord: newGscoord})
   }

  render() {
    return (
    <ScrollView>
      <Text style={styles.title}>Welcome to the NearMePedia App</Text>
      <Text style={styles.text}> Please choose one of the following options </Text>
      <Georesolver style={styles.box} onSubmit={this.onSubmit}/>
      <Positionpicker style={styles.box} onSubmit={this.onSubmit} />
      <View styles={styles.box}>
        <Text style={styles.subtitle}>List of your places</Text>
        <Text style={styles.text}>Click on one address to browse locations in its area</Text>
        {this.state.gscoord.map(item => <Position
                                          address={item.address}
                                          latitude={item.latitude}
                                          longitude={item.longitude}
                                          onDelete={() => this.deletePosition(item.address)}
                                        />)}
      </View>
    </ScrollView>)
  }
}

const styles = StyleSheet.create({

  title: {
    paddingTop: Constants.statusBarHeight,
    margin: 28,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    marginBottom: 14,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    margin: 14,
    fontSize: 14,
    textAlign: 'center',
  },

  box: {
    paddingHorizontal: 14,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 7,
  },

  position: {
    padding: 14,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
    backgroundColor: "#EDF9FF",
  },

});
