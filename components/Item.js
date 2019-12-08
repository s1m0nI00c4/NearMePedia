import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Linking } from 'react-native';
import Constants from 'expo-constants';

const Item = props => {
  return (
    <View>
      <Text>-----------</Text>
      <Text>{props.title}</Text>
      <Text>Distance: {props.dist} m</Text>
      <Button title="Go to Wiki" onPress={()=>{Linking.openURL(props.url)}} />
      { props.saveTo===true ?
        <Button title="save for later" onPress={props.onDelete} />  :
        <Button title="delete" onPress={props.onDelete} />
      }
    </View>)
}
