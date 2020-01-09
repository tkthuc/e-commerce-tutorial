import React, {useState} from 'react';

import '../user-form.css';
import './login.css';

import AuthServices from '../../api';


export default function(props) {

    let [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const navigateToSignUp = () => {
        props.history.push('/signup');
    };

    const handleSubmit = (event) => {

      AuthServices.login(credentials)

       // event.preventDefault();


    };

    const handleChange = (event) => {
        setCredentials({...credentials,[event.target.name]:event.target.value});
    }

    return (

        <form className="login" onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <div className="user-input-row"> <label>Email </label> <input type="email" name="email" value={credentials.email} onChange={handleChange}/></div>
            <div className="user-input-row"> <label>Password </label> <input type="password" name="password" value={credentials.password} onChange={handleChange}/> </div>
            <input type="submit" value="Sign in"/>
            <hr/>
            <div className="navigate-to-signup">
                <button onClick={navigateToSignUp}> Create new account </button>
            </div>
        </form>
    );
}