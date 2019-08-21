import React from 'react' ;
import { View,Text , StyleSheet } from 'react-native' ;
import { ContactForm } from '../components/contacts' ;

const ContactFormScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <ContactForm navigation = {navigation}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
      flex : 1 ,

    }
})


export default ContactFormScreen ;
