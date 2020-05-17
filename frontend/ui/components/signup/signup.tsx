import * as React from 'react';

import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Button, Label } from 'semantic-ui-react';

import './signup.css';

import styled, { ThemedStyledFunction, CSSObject } from 'styled-components';

function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
}
  
function validatePassword(value) {
    let error;
    if (value === 'password') {
        error = 'Nice try!';
    }
    return error;
}

const StyledInputDiv = styled.div`
        display: flex;
        justify-content:center;

        label {
            flex: 1
        }

        .input {
            flex: 2
        }
    `;


export default function() : JSX.Element {
    return (        
        <Formik
            initialValues={{email: "", password: ""}}
            onSubmit= { 
                    (values, { setSubmitting }) => {                                              
                        setSubmitting(false)
                    }
            }
            >
            {
                ({isSubmitting, handleSubmit}) => (
                    <form onSubmit={ (event) => {                         
                            handleSubmit(event);
                            event.preventDefault();
                         }}
                         className="form-signup">
                        <h1> Create account </h1>
                        <div className = "field-section">
                            <StyledInputDiv>
                                <label htmlFor ="name"> Your username</label>                        
                                <Field type="text" name="name" className="input"/>                           
                            </StyledInputDiv>
                        </div>
                        <div className = "field-section">
                            <StyledInputDiv>
                                <label htmlFor ="email">  Email</label>     
                                <Field type="email" name="email" validate={validateEmail} className="input"/>    
                            </StyledInputDiv>
                            <ErrorMessage name="email" component="div" className="error-message"/>                
                        </div>
                        <div className = "field-section">
                            <StyledInputDiv>
                                <label htmlFor ="password">  Password</label>                            
                                <Field type="password" name="password" validate={validatePassword} className="input"/>                           
                            </StyledInputDiv>
                            <ErrorMessage name="password" component="div" className="error-message"/>
                        </div>
                       
                        <Button type="Submit" disabled={isSubmitting}> Submit </Button>
                    </form>
                )
            }
        </Formik>       
    )
}