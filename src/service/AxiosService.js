import axios from 'axios';

class AxiosService {

  get(url,data="",headers=false){
    return axios.get(url,data,headers)
  }

  post(url,data="",headers=false){
    return axios.post(url,data,headers)
  }

  put(url,data="",headers){
    return axios.put(url,data,headers)
  }

}

export default AxiosService;