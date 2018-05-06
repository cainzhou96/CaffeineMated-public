import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Login} from './components/Login.js';
import {Signup} from './components/Signup.js';
import {Start} from './components/Start.js';
import {Main} from './components/Main.js';

import {StackNavigator} from 'react-navigation';
import { Root } from "native-base";
import {Customization} from "./components/Customization";

export default class App extends React.Component {


  render() {
    return (
      // <View style={styles.container}>
      //   <Image
      //     style={styles.logo}
      //     source={require('./resources/wei_logo.png')}
      //   />
      //   <Text style={styles.name}>
      //     CaffeineMated
      //   </Text>
      // </View>
      <Root>
        <RootStack />
      </Root>
    );
  }
}

const RootStack = StackNavigator(
  {
    start:{
      screen: Start,
    },
    login: {
      screen: Login,
    },
    signup: {
      screen: Signup,
    },
    main: {
      screen: Main,
    },
    customization: {
     screen: Customization,
    }

  },
  {
    // TEMPERARY! Original: start; for development usage only
    initialRouteName: 'signup',
    headerMode: 'none',
  }
);
