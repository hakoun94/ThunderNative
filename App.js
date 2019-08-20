import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { ContactsScreen } from './screens' ;

const data = Array(10).fill('item') ;


export default function App() {
  return (
    <View style={styles.container}>
      <ContactsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
