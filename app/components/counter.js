import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('constructor=========>', props);
  }

  render() {
    const { count, apiMsg, increment, decrement, incrementAsync, apiRequest } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{count}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={incrementAsync} style={styles.button}>
          <Text>async up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => apiRequest({section_id: 1})} style={styles.button}>
          <Text>Api Request</Text>
        </TouchableOpacity>
        <Text>{apiMsg}</Text>
      </View>
    );
  }
}
