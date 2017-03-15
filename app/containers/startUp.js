import React, { Component } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

// import SignInScreen from '../screens/signIn';
import HomeScreen from '../screens/home';
import * as appActions from '../actions';

const StartUpRoutes = {
  Home: {
    name: 'Home Screen',
    description: 'The app home screen',
    screen: HomeScreen
  }
}

class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, dispatch } = this.props;

    return (
      <View style={styles.container}>
        <Text>Sign In Screen</Text>
        <Button
          title='SIGN IN'
          onPress={() => {
            console.log(navigation);
            navigation.navigate('Home')
            // navigation.dispatch({ type: 'Home' })
          }}
        />
      </View>
    );
  }
}



const AppNavigator = StackNavigator({
  ...StartUpRoutes,
  Index: {
    screen: MainScreen
  }
}, {
  initialRouteName: 'Index',
  headerMode: 'none',
  mode: 'card'
});

// class StartUp extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     const { state, actions } = this.props;
//     return (
//       <SignInScreen />
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions.actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});
