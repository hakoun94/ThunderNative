import React , { Component } from 'react' ;
import { View, Text , TextInput , StyleSheet,Button } from 'react-native' ;
import { request } from '../../funcs/http' ;

class ContactForm extends Component {


  state = {
    firstname : '' ,
    lastname : '' ,
    email : '' ,
    phone : '' ,
    addresses : '',
    submitButtonDisabled : false ,
    showValidationError : false
  }

  handleChange = (value,key) => this.setState({[key] : value })

  // validate user inputs before submitting data
  validate = () => {
    let i = 0 ;
    let isValid = true ;
    const keys = Object.keys({...this.state}) ;

    for (i ; i < keys.length ; i++) {
      const value = keys[i] ;
      if (this.state[value] === '' || this.state[value] === null) { isValid = false ; break }

    }
    return isValid ;
  }


  submit = () => {
    const isValid = this.validate() ;
    if (isValid) {
      this.setState({...this.state,submitButtonDisabled : true })
      const item = this.props.navigation.state.params ?this.props.navigation.state.params.item : null   ;
      const method =  item ? 'PUT' : 'POST' ;
      const url  = method === 'PUT' ? `contacts/${item.id}` : 'contacts' ;

      request(url,{...this.state},method).then(resp => {
        this.setState({...this.state, submitButtonDisabled : false,showValidationError : false })
        this.props.navigation.navigate('contacts',{reload : 'true'}) ;

      }).catch(e => alert(e.message))
    } else {
      this.setState({showValidationError : true })
    }

  }

  componentDidMount = () => {

    if (this.props.navigation.state.params) {
      this.setState({
        ...this.state,
        ...this.props.navigation.state.params.item
      })
    }
  }

  render = () => {

    return (
      <View style = {styles.container}>

        <View style = {styles.card}>

          <View style = {styles.inputItem}>
            {this.state.showValidationError && <Text style = {{color : "red"}}> * </Text>}
            <TextInput
              value = {this.state.firstname}
              onChangeText = {(value) => this.handleChange(value,'firstname')}
              style = {styles.input}
              placeholder = 'Firstname'
            />
          </View>

          <View style = {styles.inputItem}>
          {this.state.showValidationError && <Text style = {{color : "red"}}> * </Text>}
            <TextInput
              value = {this.state.lastname}
              onChangeText = {(value) => this.handleChange(value,'lastname')}
              style = {styles.input}
              placeholder = 'Lastname'
            />

          </View>

          <View style = {styles.inputItem}>
            {this.state.showValidationError && <Text style = {{color : "red"}}> * </Text>}
            <TextInput
              value = {this.state.email}
              onChangeText = {(value) => this.handleChange(value,'email')}
              style = {styles.input}
              placeholder = 'Email'
            />
          </View>

          <View style = {styles.inputItem}>
            {this.state.showValidationError && <Text style = {{color : "red"}}> * </Text>}
            <TextInput
              value = {this.state.phone}
              onChangeText = {(value) => this.handleChange(value,'phone')}
              style = {styles.input}
              placeholder = 'Phone'
            />
          </View>

          <View style = {styles.inputItem}>
            {this.state.showValidationError && <Text style = {{color : "red"}}> * </Text>}
            <TextInput
              value = {this.state.addresses}
              onChangeText = {(value) => this.handleChange(value,'addresses')}
              style = {styles.input}
              placeholder = 'Address'
            />
          </View>
        </View>

        <Button
          title = 'Submit'
          color="#eb4034"
          onPress = {this.submit}
          disabled = {this.state.submitButtonDisabled}
        />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container : {
    flex:1  ,
    backgroundColor : '#ddd'
  } ,
  card : {
    backgroundColor : "#fff" ,
    flex : 1 ,
    marginTop : 30  ,
  },
  inputItem : {
    width : '95%' ,
    paddingHorizontal : 20,
    padding : 10
  },
  input : {
    padding : 5,
    borderBottomWidth : 1  ,
    borderBottomColor : '#ddd',

  }
})

export default ContactForm ;
