import React from 'react';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import './SignIn.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "password"
    };
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
              <div className='l-row-in'><TextField id="outlined-basic" label="Email" size='medium' fullWidth variant="outlined" /></div>
            </div>
            <div className='row-pass'>
              <div className='l-row-in'><TextField type={this.state.type} id="outlined-basic" label="Password" size='medium' fullWidth variant="outlined" /></div>
            </div>
            <div className='checkbox'>
              <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />
            </div>
            <div className='row'>
              <div className='forgot-email'>
                <p>Forgot email?</p>
              </div>
            </div>
            <div className='row'>
              <div className='btn-cont'>
                <button>Next</button>
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