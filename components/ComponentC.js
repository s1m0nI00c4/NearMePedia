import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Linking } from 'react-native';
import Constants from 'expo-constants';
import { Subscribe } from "unstated";
import CContainer from "../unstated/CContainer";

const Item = props => {
  return (
    <View style={styles.box}>
      <Text style={styles.subtitle}>{props.title}</Text>
      <Text style={styles.text}>Distance: {props.dist} m</Text>
      <View style={styles.container}>
        <View style={styles.buttonContainer, {margin: 7}}>
          <Button title="Go to Wikipedia" onPress={()=>{Linking.openURL(props.url)}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="delete" color={"red"} onPress={props.onDelete} />
        </View>
      </View>
    </View>)
}

class ItemLoader extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.api.addItem(this.props.saveForLater);

  }

  render() {
    return null
  }
}

export default class ComponentC extends React.Component {

  constructor(props) {
    super(props);
   }

  render() {
    return (
    <Subscribe to={[CContainer]}>
      { api =>
      <ScrollView>
        <ItemLoader api={api} saveForLater={this.props.saveForLater} />
        <Text style={styles.title}>Reading List</Text>
        <Text style={styles.text}>{api.state.data.length===0? "Your reading list is empty": "Here a list of reads you saved"}</Text>
        {api.state.data.map( place => <Item
                                          title={place.title}
                                          onDelete={() => api.deleteItem(place.pageid)}
                                          dist={place.dist}
                                          pageid={place.pageid}
                                          url={place.url}
                                        />)}
        <Button color="red" title="clear" onPress={() => api.clear()} />
      </ScrollView>
      }
    </Subscribe>)
  }
}

const styles = StyleSheet.create({

  title: {
    paddingTop: Constants.statusBarHeight,
    margin: 28,
    marginBottom: 14,
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
    marginBottom: 28,
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
