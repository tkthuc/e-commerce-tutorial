import * as React from 'react';

import styled from 'styled-components';

import { Formik } from 'formik';

import './profile.css';

import UserProfileServices from '../../api/userProfileServices';
import { UserProfile, UserSection } from '../../api/user-type';

import Section from './section/section';
import profileReducer from './profileReducer';



export default function({ email }) {    

    const initUserValue = {  
        email,
        settings: {
            header: "Personal Settings",
            data: []
        }   
    }

    let [userData, dispatchUserData] = React.useReducer<UserProfile, {type: string, payload: any}>(profileReducer,initUserValue);

    const userProfileService = new UserProfileServices();   
   
    React.useEffect(() => {      
        userProfileService.getUserProfile(email)
                        .then(
                            user => dispatchUserData( {
                                type: 'REPLACE_ALL',
                                payload: user
                            })
                        );

    },[email])

    return (
        <div className="profile">
            <BreadCrumb> 
                <li> <StyledLink> My Account </StyledLink> </li>
                <li> <StyledLink> Personal Settings </StyledLink></li>
            </BreadCrumb>

            <div className="profile__main">
                <div className="profile__list"> 
                    <h2> Account Info </h2>
                    <ul>
                        <li> <StyledLink> My Personal Settings </StyledLink> </li>
                    </ul>
                </div>
                <Formik
                    initialValues= {userData}
                    onSubmit={() => {}}
                    >
                    {
                            ({ 
                                isSubmitting, 
                                handleSubmit, 
                            }) => 
                                <div className="profile__settings">
                                    {
                                        userData.settings.data.map(
                                            userProfile => (
                                                    <Section userProfile={userProfile}></Section>
                                            ) 
                                        )
                                    }
                                </div>
                    }
                </Formik>
            </div>
        </div>
    );
}


const BreadCrumb = styled.ul`
    & {
        list-styled: none;
        padding-inline-start: 0px;
    }  
    
    & > li {
        display: inline;                      
    }

    & > li+li:before {
        content: "\003e";
        padding: 0.5em;  
    }

    & > li a {
        color: #0275d8;
        text-decoration: none;
    }

    & > li a:hover {
        color: #01447e;
        text-decoration: underline;
    }      
`;

const StyledLink = styled.a`
    cursor: pointer
`;