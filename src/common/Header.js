import {
    BrowserRouter as Router, Switch, Route, NavLink, Link
} from "react-router-dom";
import React, { Component } from 'react';
import "antd/dist/antd.css";

import User from '../component/user';
import Todo from '../component/todo';
import LoginForm from '../component/loginForm'
import Welcome from "../component/welcome";
import ErrorPage from "../component/ErrorPage";
import Logout from '../component/logout';
import Footer from "./Footer";
import AuthenticationService from "../component/AuthenticationService.js";
class Header extends Component {

    render() {
        debugger
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            //Routing for navigation
            <>
                <Router>
                    <>
                        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                            <div><Link className='navbar-brand'>LOGO</Link></div>
                            <ul className="navbar-nav">
                                {isUserLoggedIn && <li className='nav-link'><NavLink to="/todo" activeClassName="active">Todo</NavLink></li>}
                                {isUserLoggedIn && <li className='nav-link'><NavLink to="/user" activeClassName="active">User</NavLink></li>}
                            </ul>
                            <ul className='navbar-nav navbar-collapse justify-content-end'>
                                {!isUserLoggedIn && <li className='nav-link'><NavLink to="/login" activeClassName="active">Login</NavLink></li>}
                                {isUserLoggedIn && <li className='nav-link'><NavLink to="/logout" activeClassName="active" onClick={AuthenticationService.logout}>Logout</NavLink></li>}
                            </ul>
                        </nav>
                        <hr />
                        <Switch>
                            <Route exact path="/todo" component={Todo} />
                            <Route exact path="/user" component={User} />
                            <Route exact path="/login" component={LoginForm} />
                            <Route exact path="/welcome/:name" component={Welcome} />
                            <Route exact path="/logout" component={Logout} />
                            <Route exact path="" component={ErrorPage} />
                        </Switch>
                    </>
                </Router>
                <Footer />
            </>
        );
    }
}
export default Header;