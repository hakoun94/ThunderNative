import React , { Component } from 'react' ;
import { View,StyleSheet,Text } from 'react-native' ;
import { Loading } from '../components' ;

class ContactsScreen extends Component {

  state = { data  : null }



  render = () => {
    return (
      <View style = {styles.container}>
        <Loading />
      </View>
    )
  }
}


const styles = StyleSheet.create({

  container : {
    flex : 1 ,
  }

})

export default ContactsScreen ;
