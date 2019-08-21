import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView,StatusBar,Platform } from 'react-native';
import { ContactsScreen,ContactDetailsScreen,ContactFormScreen } from './screens' ;
import { createStackNavigator,createAppContainer } from 'react-navigation';

// prevent view from overlapping with device status bar
const paddingTop = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight ;


const AppNavigator = createAppContainer(createStackNavigator({
  contacts : {
    screen : ContactsScreen ,
    navigationOptions: {
			title: 'Contacts',
			headerStyle: { backgroundColor: '#eb4034' },
			headerTintColor: '#fff'
		}
  },
  details  : {
    screen : ContactDetailsScreen,
    navigationOptions: {
			title: 'Details',
			headerStyle: { backgroundColor: '#eb4034' },
			headerTintColor: '#fff'
		}
  } ,

  contactForm  : {
    screen : ContactFormScreen,
    navigationOptions: {
			title: 'Contact Form',
			headerStyle: { backgroundColor: '#eb4034' },
			headerTintColor: '#fff'
		}
  } ,

})) ;



export default class App extends Component {

  render = () => {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop ,
  },
});
