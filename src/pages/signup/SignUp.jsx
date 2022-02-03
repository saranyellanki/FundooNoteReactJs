import React from 'react';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import './SignUp.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm: '',
            firstNameError: false,
            lastNameError: false,
            emailError: false,
            passwordError: false,
            confirmError: false,
            type: "password"
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
        error.firstNameError = this.state.firstName === '' ? true : false;
        error.lastNameError = this.state.lastName === '' ? true : false;
        error.emailError = this.state.email === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;
        error.confirmError = this.state.confirm === '' ? true : false;

        this.setState({
            ...error
        })

        isError = error.firstNameError || error.lastNameError || error.emailError || error.passwordError || error.confirmError
        return isError;
    }

    next = () => {
        let isValidated = this.validation();
        if(!isValidated){
            console.log("Navigate");
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
                            <div className='l-row'><TextField 
                            id="outlined-basic" 
                            name='firstName'
                            label="First name" 
                            error={this.state.firstNameError}
                            helperText={this.state.firstNameError ? "First Name is required" : ''}
                            onChange={(event) => this.changeState(event)} 
                            size='small' fullWidth variant="outlined" /></div>
                            <div className='l-row'><TextField 
                            id="outlined-basic" 
                            label="Last name" 
                            name='lastName'
                            size='small' 
                            fullWidth 
                            variant="outlined"
                            error={this.state.lastNameError}
                            helperText={this.state.lastNameError ? "Last Name is required" : ''}
                            onChange={(event) => this.changeState(event)} /></div>
                        </div>
                        <div className='row-username'>
                            <div className='username'><TextField 
                            id="outlined-basic" 
                            label="Username" 
                            name='email'
                            helperText="You can use letter, numbers & periods" 
                            fullWidth 
                            size='small' 
                            variant="outlined"
                            error={this.state.emailError}
                            helperText={this.state.emailError ? "Email is required" : ''}
                            onChange={(event) => this.changeState(event)} /></div>
                        </div>
                        <div className="myEmail">
                            <p>Use my current email address instead</p>
                        </div>
                        <div className='row-pass'>
                            <div className='l-row'><TextField 
                            type={this.state.type} 
                            id="outlined-basic" 
                            label="Password" 
                            name='password'
                            size='small' 
                            fullWidth 
                            variant="outlined"
                            error={this.state.passwordError}
                            helperText={this.state.passwordError ? "Password is required" : ''}
                            onChange={(event) => this.changeState(event)} /></div>
                            <div className='l-row'><TextField 
                            type={this.state.type} 
                            id="outlined-basic" 
                            label="Confirm" 
                            name='confirm'
                            size='small' 
                            fullWidth 
                            variant="outlined"
                            error={this.state.confirmError}
                            helperText={this.state.confirmError ? "Confirm password is required" : ''}
                            onChange={(event) => this.changeState(event)} /></div>
                        </div>
                        <div className="helperText">
                            <span>
                                Use 8 or more characters with a mix of letters, numbers & symbols
                            </span>
                        </div>
                        <div className='checkbox'>
                            <FormControlLabel control={<Checkbox onChange={this.showPassword} />} label="Show Password" />
                        </div>
                        <div className='row-button'>
                            <div className='btn-container'>
                                <button onClick={this.next}>Next</button>
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