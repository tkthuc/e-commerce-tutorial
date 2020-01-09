import React, {useState} from 'react';

import AuthServices from '../../api';

import '../user-form.css';
import './signup.css';

export default function(props) {


    let [userInfo, setUserInfo] = useState({
        username:"",
        email:"",
        password:""
    });

    let [errorMessage,setErrorMessage] = useState("");

    const handleSubmit = (event) => {

            AuthServices.signup(userInfo)
                .then(() => {
                    props.history.push('/login');
                })
                .catch(err => {
                    setErrorMessage(err.response.data.message);
                });


        event.preventDefault();

    };

    const verifyPasswordMatch = (event) => {
        if (event.target.value != userInfo.password) {
            setErrorMessage("Password is not matched");
        } else {
            setErrorMessage("");
        }
    }

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value});
    };



    return (
      <form className="signup"  onSubmit={handleSubmit}>
          <h1>Sign-Up Form</h1>
          <div className="user-input-row"> <label>Your Name </label> <input type="text" name="username" onChange={handleChange}/> </div>
          <div className="user-input-row"> <label>Email </label> <input type="email" name="email" onChange={handleChange} /></div>
          <div className="user-input-row"> <label>Password </label> <input type="password" name="password" onChange={handleChange} /> </div>
          <div className="user-input-row">
              <label>Password again </label>
              <input type="password" name="repeatedPassword" onChange={verifyPasswordMatch}/>
              <label>  {errorMessage} </label>
          </div>
          <input type="submit" value="Submit"/>
      </form>
    );
}