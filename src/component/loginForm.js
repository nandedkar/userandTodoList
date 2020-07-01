import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import Welcome from './welcome';
import AuthenticationService from './AuthenticationService.js';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Manoj',
            password: '',
            isLoginfailed: false,
            isLoginSuccess: false,
        }
        this.onLogin = this.onLogin.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onLogin() {
        if (this.state.username === 'Manoj' && this.state.password === "Manoj") {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            this.setState({
                isLoginSuccess: true,
                isLoginfailed: false,
            })

        } else {
            this.setState({
                isLoginSuccess: false,
                isLoginfailed: true
            })
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <Route path='/welcome' exact component={Welcome}></Route>
                </Router>
                <h2>Login</h2>
                {this.state.isLoginSuccess && <div className='alert alert-warning'>Login Successfully</div>}
                {this.state.isLoginfailed && <div className='alert alert-success'>Login Failed</div>}
                Username: <input type='text' name='username' onChange={(event) => this.handleChange(event)} value={this.state.username}></input>
                Password: <input type='password' name='password' onChange={(event) => this.handleChange(event)} value={this.state.password}></input>
                <button onClick={this.onLogin}>Login</button>
            </div>
        )
    }
}

export default LoginForm;
