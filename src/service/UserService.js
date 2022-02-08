import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://localhost:7000/api/v1/users';

const header = {
  headers : {
    token: localStorage.getItem("token")
  }
}

class UserService {
  Signup(data){
    return axiosService.post(`${baseURL}/register`,data);
  }

  Signin(data){
    return axiosService.post(`${baseURL}/login`,data)
  }

  forgotPass(data){
    return axiosService.post(`${baseURL}/forgetPassword`,data)
  }

  ResetPassword(data){
    return axiosService.put(`${baseURL}/resetPassword`,data, header)
  }

}

export default UserService;