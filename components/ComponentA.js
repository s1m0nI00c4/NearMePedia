import React from 'react';
import { StyleSheet, Text, ScrollView, } from 'react-native';
import Constants from 'expo-constants'
import Place from './Place'
import { Subscribe } from "unstated";
import AContainer from "../unstated/AContainer";

class Loader extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.api.saveData(this.props.coords)
  }
  render() {
    return null
  }
}

export default class ComponentA extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var id = 0;
    return (
    <Subscribe to={[AContainer]}>
      { api =>
      <ScrollView>
        <Loader api={api} coords={this.props.coords} />
        <Text style={styles.title}>Results</Text>
        {api.state.data.length === 0?
          <Text>Loading...</Text> :
          api.state.data.map( place => <Place
                                          key={id++}
                                          title={place.title}
                                          dist={place.dist}
                                          pageid={place.pageid}
                                          onSelect={this.props.onSelect} />)}
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

});
