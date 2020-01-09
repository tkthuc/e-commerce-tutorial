import * as React from 'react';
import { useState } from 'react';

import '../user-form.css';
import './login.css';

import AuthServices from '../../api/authServices';

import AuthStorage from '../../api/authenticationStorage';

export default function(props) {

    let [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });


    const handleSubmit = async (event) => {


       const jwt = await AuthServices.login(credentials);

       AuthStorage.authenticateUser(jwt.data);

       props.callback && props.callback(credentials);

    };

    const handleChange = (event) => {
        setCredentials({...credentials,[event.target.name]:event.target.value});
    }

    return (

        <div className="login" onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <div className="user-input-row"> <label>Email </label> <input type="email" name="email" value={credentials.email} onChange={handleChange}/></div>
            <div className="user-input-row"> <label>Password </label> <input type="password" name="password" value={credentials.password} onChange={handleChange}/> </div>
            <button onClick={handleSubmit}>Log in</button>
        </div>
    );
}