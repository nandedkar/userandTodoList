import {
    BrowserRouter as Router, Switch, Route, Link, NavLink
} from "react-router-dom";
import React, { Component } from 'react';
import "antd/dist/antd.css";

import User from '../component/user';
import Todo from '../component/todo';
class Header extends Component {
    render() {
        return (
            //Routing for navigation
            <Router>
                <div className="header">
                    <ul className="tabs">
                        <li><NavLink to="/todo" activeClassName="active">Todo</NavLink></li>
                        <li><NavLink to="/user" activeClassName="active">User</NavLink></li>

                    </ul>
                    <Switch>
                        <Route exact path="/todo" component={Todo}></Route>
                        <Route exact path="/user" component={User}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Header;