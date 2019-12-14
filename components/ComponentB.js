import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import Positionpicker from './Positionpicker';
import Georesolver from './Georesolver';
import { Subscribe } from "unstated";
import BContainer from "../unstated/BContainer";

class Position extends React.Component {

  constructor(props) {
    super(props);
   }

  myOnPress = async () => {

    console.log("something")
    this.props.onSubmit({latitude: this.props.latitude, longitude: this.props.longitude});
    this.props.onSelect({latitude: this.props.latitude, longitude: this.props.longitude});

  }

  render() {
    return (
    <TouchableOpacity style={styles.position} onPress={() => this.myOnPress()}>
      <Text style={{flex: 1, fontWeight: "bold", textAlignVertical: "center"}}>{this.props.address}</Text>
      <Button style={{flex: 1}} title="X" color="red" onPress={this.props.onDelete} />
    </TouchableOpacity>
  )
  }
}

export default class ComponentB extends React.Component {

  constructor(props) {
    super(props);
   }

  render() {
    return (
    <Subscribe to={[BContainer]}>
    { list =>
      <ScrollView>
        <Text style={styles.title}>Welcome to the NearMePedia App</Text>
        <Text style={styles.text}> Search a location you want to browse, pick your current location, or tap on one of your favorite locations below </Text>
        <Georesolver style={styles.box} onSubmit={list.onSubmit} onSelect={this.props.onSelect} />
        <Positionpicker style={styles.box} onSubmit={list.onSubmit} onSelect={this.props.onSelect} />
        <View styles={styles.listbox}>
          <Text style={styles.subtitle}>List of your places</Text>
          <Text style={styles.text}>Click on one address to browse locations in its area</Text>
          {list.state.gscoord.map(item => <Position
                                            address={item.address}
                                            latitude={item.latitude}
                                            longitude={item.longitude}
                                            onSubmit={list.onSubmit}
                                            onSelect={this.props.onSelect}
                                            onDelete={() => list.deletePosition(item.address)}
                                          />)}
        </View>
      </ScrollView>
    }
    </Subscribe>)
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

  listbox: {
    paddingHorizontal: 14,
    paddingBottom: 28,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
  },

  position: {
    flex: 1,
    paddingHorizontal: 28,
    flexDirection: "row",
    marginBottom: 7,
    backgroundColor: "#EDF9FF",
    textAlignVertical: "center"
  },

});
