import configs from '../configs' ; 
import axios from 'axios' ;


const getRequest = (url) => {
  const { baseUrl } = this.props ;
  const dest = baseUrl + '/' + url ;
  return axios.get(url) ;
}

/* for bpth post , put requests */
const request = (url,payload,method = 'POST') => {
  const { baseUrl } = this.props ;
  const dest = baseUrl + '/' + url ;
  return axios({
    method ,
    url : dest ,
    data : payload ,
  })
}

const deleteRequest = (url) => {
  const { baseUrl } = this.props ;
  const dest = baseUrl + '/' + url ;
  return axios({
    'DELETE' ,
    url : dest ,
  })
}


export {
  getRequest ,
  request ,
  deleteRequest
}
