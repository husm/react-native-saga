import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    // very important, this is only used when you don't want to go back
    // in a StackNavigator
    cardStack: {
      gesturesEnabled: false
    }
  }

  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});
