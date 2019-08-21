import axios from 'axios' ;
import Constants from "expo-constants";

const { manifest } = Constants;
const baseUrl  = `http://${manifest.debuggerHost.split(':').shift()}:5000/api`;

const getRequest = (url) => {
  const dest = baseUrl + '/' + url ;
  return axios.get(dest) ;
}

/* for bpth post , put requests */
const request = (url,payload,method = 'POST') => {
  const dest = baseUrl + '/' + url ;
  return axios({
    method ,
    url : dest ,
    data : payload ,
  })
}

const deleteRequest = (url) => {

  const dest = baseUrl + '/' + url ;
  return axios({
    method : 'DELETE' ,
    url : dest ,
  })
}


export {
  getRequest ,
  request ,
  deleteRequest
}
