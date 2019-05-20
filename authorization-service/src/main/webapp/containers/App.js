import React from 'react';

import {Route, Switch, BrowserRouter,Redirect} from 'react-router-dom';

import SignUp from '../components/signup/signup.jsx';
import LogIn from '../components/login/login.jsx';

export default function(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LogIn}/>
                <Route path="/signup" exact component={SignUp}/>
                <Redirect from="/" to="/login"/>
            </Switch>
        </BrowserRouter>
    )
}