import React from 'react';
import { TextField } from '@mui/material';
import './ForgotPass.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
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
              <span>Find your email</span>
              <p>Enter your recovery email</p>
            </div>
            <div className='row'>
              <div className='l-row-in'><TextField id="outlined-basic" label="Email" size='medium' fullWidth variant="outlined" /></div>
            </div>
            <div className='row'>
              <div className='btn-cont'>
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default SignIn;