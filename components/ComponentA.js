import React from 'react';
import { StyleSheet, Text, ScrollView, } from 'react-native';
import Constants from 'expo-constants'
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
    <ScrollView>
      <Text style={styles.title}>Results</Text>
      {this.state.data.length === 0?
        <Text>Loading...</Text> :
        this.state.data.map( place => <Place
                                        title={place.title}
                                        dist={place.dist}
                                        pageid={place.pageid}
                                        saveTo={true}>
                                      </Place>)}
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

});
