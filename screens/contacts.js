import React , { Component } from 'react' ;
import { View,StyleSheet,Text,StatusBar,TouchableOpacity } from 'react-native' ;
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

  componentDidUpdate = (prevProps,prevState) => {
    let reload ;
    if (this.props.navigation.state.params) {
      reload = this.props.navigation.state.params.reload ;
    }

    if (reload && prevState.data) { this.setState({data : null })}
    if (prevState.data && !this.state.data) {
      getRequest('contacts').then(resp => {
        this.setState({data : resp.data}) ;
      })
    }
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
          <TouchableOpacity style = {styles.addNewBtn} onPress = {() => this.props.navigation.navigate('contactForm')}>
            <Text style = {styles.addNewBtnText}> + </Text>
          </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  container : {
    flex : 1 ,

  },

  addNewBtn : {
    height : 50 ,
    width : 50 ,
    borderRadius : 25 ,
    position : 'absolute' ,
    right : 20 ,
    bottom : 30 ,
    backgroundColor : '#eb4034' ,
    flex : 1 ,
    alignItems : "center" ,
    justifyContent : 'center' ,
  } ,
  addNewBtnText : {
    color : "#fff" ,
    fontWeight : 'bold',
    fontSize : 18
  }

})

export default ContactsScreen ;
