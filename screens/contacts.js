import React , { Component } from 'react' ;
import { View,StyleSheet,Text,StatusBar } from 'react-native' ;
import { Loading } from '../components' ;
import { getRequest } from '../funcs/http' ;
import { ContactsList } from '../components/contacts';



class ContactsScreen extends Component {

  state = { data  : null }

  componentDidMount = () => {
    getRequest('contacts').then(resp => {
      this.setState({data : resp.data}) ;
    })
  }


  render = () => {
    const { data } = this.state ;
    return (
      <View style = {styles.container}>
        <StatusBar backgroundColor = "#eb4034" barStyle="light-content" />

          {
            data && data.length > 0 &&
            <ContactsList data = { data } navigation = { this.props.navigation }/>
          }

          {
            data && data.length === 0 && <Text>Empty</Text>
          }

          {
            !data &&
            <Loading />
          }

      </View>
    )
  }
}


const styles = StyleSheet.create({

  container : {
    flex : 1 ,
  },
  

})

export default ContactsScreen ;
