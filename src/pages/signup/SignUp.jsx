import React from 'react';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import './SignUp.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div>
            <div className='container'>
                <div className='items-container'>
                    <div className='left-container'>
                        <div className='title'>
                            <p>
                                <span style={{ color: "#4285F4" }}>F</span>
                                <span style={{ color: "#DB4437" }}>u</span>
                                <span style={{ color: "#F4B400" }}>n</span>
                                <span style={{ color: "#4285F4" }}>d</span>
                                <span style={{ color: "#0F9D58" }}>o</span>
                                <span style={{ color: "#DB4437" }}>o</span>
                            </p>
                        </div>
                        <div className='msg'>
                            <span>Create your Fundoo Account</span>
                        </div>
                        <div className='row-name'>
                            <div className='l-row'><TextField id="outlined-basic" label="First name" size='small' fullWidth variant="outlined" /></div>
                            <div className='l-row'><TextField id="outlined-basic" label="Last name" size='small' fullWidth variant="outlined" /></div>
                        </div>
                        <div className='row-username'>
                            <div className='username'><TextField id="outlined-basic" label="Username" helperText="You can use letter, numbers & periods" fullWidth size='small' variant="outlined" /></div>
                        </div>
                        <div className="myEmail">
                            <p>Use my current email address instead</p>
                        </div>
                        <div className='row-pass'>
                            <div className='l-row'><TextField id="outlined-basic" label="Password" size='small' fullWidth variant="outlined" /></div>
                            <div className='l-row'><TextField id="outlined-basic" label="Confirm" size='small' fullWidth variant="outlined" /></div>
                        </div>
                        <div className="helperText">
                            <span>
                                Use 8 or more characters with a mix of letters, numbers & symbols
                            </span>
                        </div>
                        <div className='checkbox'>
                            <FormControlLabel control={<Checkbox />} label="Show Password" />
                        </div>
                        <div className='row-button'>
                            <div className='btn-container'>
                                <button>Next</button>
                                <p>Sign in instead</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='logo'>
                            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" class="j9NuTc TrZEUc" />
                            <p> One account. All of Fundoo<br /> working for you. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default SignUp;