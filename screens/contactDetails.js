import React , { Component } from 'react' ;
import { View, Text,StyleSheet,ScrollView } from 'react-native' ;


class ContactDetailsScreen extends Component {

  componentDidMount = () => {
    const {item} = this.props.navigation.state.params ;
    this.setState({username : item.firstname + ' ' + item.lastname })
  }

  render = () => {

    const {item} = this.props.navigation.state.params ;

    return (

      <View style = {{flex : 1}}>
        <View style = {styles.container}>

        <View style = {{...styles.itemWrapper,borderLeftColor : "#581845"}}>
          <View style = {styles.item}>
            <View style = {styles.prefix}>
              <Text style = {styles.prefixText}>Firstname</Text>
            </View>
            <View style = {styles.value}>
              <Text style = {styles.valueText}>{item.firstname ? item.firstname : '-'}</Text>
            </View>
          </View>
        </View>


        <View style = {{...styles.itemWrapper,borderLeftColor : "#C70039"}}>
          <View style = {styles.item}>
            <View style = {styles.prefix}>
              <Text style = {styles.prefixText}>Lastname</Text>
            </View>
            <View style = {styles.value}>
              <Text style = {styles.valueText}>{item.lastname ? item.lastname : '-'}</Text>
            </View>
          </View>
        </View>

        <View style = {{...styles.itemWrapper,borderLeftColor : "#FF5733"}}>
          <View style = {styles.item}>
            <View style = {styles.prefix}>
              <Text style = {styles.prefixText}>Email</Text>
            </View>
            <View style = {styles.value}>
              <Text style = {styles.valueText}>{item.email ? item.email : '-'}</Text>
            </View>
          </View>
        </View>

        <View style = {{...styles.itemWrapper,borderLeftColor : "#FFC300"}}>
          <View style = {styles.item}>
            <View style = {styles.prefix}>
              <Text style = {styles.prefixText}>Phone</Text>
            </View>
            <View style = {styles.value}>
              <Text style = {styles.valueText}>{item.phone ? item.phone : '-'}</Text>
            </View>
          </View>
        </View>


        </View>
        <View style = {{flex : 1}}>

          <View style = {styles.title}>
            <Text style = {styles.titleText}>
              Addresses
            </Text>
          </View>

          {
            (item.addresses && item.addresses.length === 0) || !item.addresses &&
            <View style = {styles.empty}>
              <Text>No Addresses Yet !</Text>
            </View>

          }

          {
            item.addresses &&
            <ScrollView>
              <View style = {styles.addressesWrapper}>
              {

                item.addresses.split(';').map((address,i) => {
                  return (
                    <View style = {styles.addressWrapper} key = {address}>
                      <Text style = {{padding : 10}}>{address}</Text>
                    </View>
                  )
                })
              }
              </View>
            </ScrollView>

          }

        </View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    alignItems: 'center'
  },
  item : {

    flexDirection : "row" ,
    height : 80,
    padding : 20,
    borderBottomColor : "#ddd" ,
    borderBottomWidth : 1,
    width : '90%'

  },
  prefix : {
    flex : 1,
    justifyContent : "center"
  },
  prefixText : {
    fontWeight : 'bold' ,
    color : "#444",
    fontSize : 15
  },
  value : {
    flex : 2 ,
    justifyContent : "center",
    alignItems : "flex-end"
  },
  valueText : {
    color : "#635c5b"
  },
  itemWrapper : {
    borderLeftWidth : 10,
    width : "100%",
    alignItems : 'center',
    display : 'flex'

  },
  empty : {

    alignItems : "center" ,
    justifyContent : 'center' ,
    flex : 5 ,
  },
  title : {
    flex: 1,
    padding : 10,
    alignItems : 'center',
    justifyContent : 'center',

  },
  titleText : {
    fontSize : 18 ,
    fontWeight : "bold",
    color : "#444",
  },
  addressWrapper : {
    flex : 1 ,
    alignItems : 'center' ,
    justifyContent : "center" ,
    backgroundColor : "#F5F5F5" ,
    margin : 5 ,
    borderRadius : 6,
    width : '90%',

  },
  addressesWrapper : {
    display : "flex" ,
    alignItems : 'center' ,
    justifyContent : 'center'
  }

})

export default ContactDetailsScreen ;
