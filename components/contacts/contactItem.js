import React from 'react' ;
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native' ;

const ContactItem = ({item,navigation}) => {

  return (
    <TouchableOpacity style = {styles.wrapper} onPress = {() => navigation.navigate('details',{item})}>
      <View style = {styles.container}>

        <View style = {styles.firstColumn}>

          <Text style = {styles.name}>{item.firstname}</Text>
          <Text style = {styles.email}>{item.email ? item.email : 'hakoun.h.94@gmail.com'}</Text>

        </View>

        <View style = {styles.secondColumn}>

        </View>
      </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
    wrapper : {
      flex : 1   ,
      justifyContent : 'center' ,
      alignItems : 'center'
    },
    container : {
      flex : 1 ,
      flexDirection : 'row',
      padding : 20 ,
      borderBottomWidth : 1 ,
      width : '90%',
      borderBottomColor : "#ddd"
    },
    firstColumn : {
      flex : 1 ,

    },
    name : {
      fontWeight : 'bold' ,
      padding : 2,
    },

    email : {
      color : "#c1c8d4",
      padding: 2,
    },

  })


export default ContactItem ;
