import React, { Component } from 'react' ;
import { ScrollView ,View, StyleSheet,Text } from 'react-native';
import ContactItem from './contactItem' ;

class ContactsList extends Component {


  render = () => {

    const { data } = this.props ;
    return (
      <ScrollView style = {styles.container}>
        {
          data.map(item => <ContactItem item = {item} key = {item.id} navigation = {this.props.navigation}/>)
        }
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,

  }
})
export default ContactsList ;
