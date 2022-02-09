import React from 'react';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import './SignIn.scss'
import { Link, Navigate } from 'react-router-dom';
import UserService from '../../service/UserService';

const userService = new UserService()

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      type: "password",
      redirect: false
    };
  }

  changeState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  validation = () => {
    let isError = false;
    const error = this.state;
    error.emailError = this.state.email === '' ? true : false;
    error.passwordError = this.state.password === '' ? true : false;

    this.setState({
      ...error
    })

    isError = error.emailError || error.passwordError
    return isError;
  }

  next = () => {
    let isValidated = this.validation();
    let data = {
      "email": this.state.email,
      "password": this.state.password
    }
    if (!isValidated) {
      userService.Signin(data)
        .then((res) => {
          console.log(res);
          this.setState({
            redirect: true
          })
        }).catch((err) => {
          console.log(err);
        })
    }
  }

  showPassword = (event) => {
    event.target.checked ?
      this.setState({
        type: "text"
      }) : this.setState({
        type: "password"
      })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/DashBoard" />
    }
    return <div>
      <div className='m-container'>
        <div className='item-container'>
          <div className='main-container'>
            <div className='title-sign-in'>
              <p>
                <span style={{ color: "#4285F4" }}>F</span>
                <span style={{ color: "#DB4437" }}>u</span>
                <span style={{ color: "#F4B400" }}>n</span>
                <span style={{ color: "#4285F4" }}>d</span>
                <span style={{ color: "#0F9D58" }}>o</span>
                <span style={{ color: "#DB4437" }}>o</span>
              </p>
            </div>
            <div className='msg-sign-in'>
              <span>Sign in</span>
              <p>Use your Fundoo Account</p>
            </div>
            <div className='row'>
              <div className='l-row-in'><TextField
                id="outlined-basic"
                name='email'
                label="Email"
                size='medium'
                fullWidth
                variant="outlined"
                error={this.state.emailError}
                helperText={this.state.emailError ? "Email is required" : ''}
                onChange={(event) => this.changeState(event)} /></div>
            </div>
            <div className='row-pass'>
              <div className='l-row-in'><TextField
                type={this.state.type}
                id="outlined-basic"
                label="Password"
                name='password'
                size='medium'
                fullWidth
                variant="outlined"
                error={this.state.passwordError}
                helperText={this.state.passwordError ? "Password is required" : ''}
                onChange={(event) => this.changeState(event)} /></div>
            </div>
            <div className='checkbox'>
              <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />
            </div>
            <div className='row'>
              <div className='forgot-email'>
                <Link className='link' to="/ForgotPassword">Forgot email?</Link>
              </div>
            </div>
            <div className='row'>
              <div className='btn-cont'>
                <button onClick={this.next}>Next</button>
                <p>Create Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default SignIn;