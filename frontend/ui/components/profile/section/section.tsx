import * as React from 'react';

import styled from 'styled-components';

import { UserSection } from 'api/user-type';

const StyledHeader = styled.h2 `
    background-color: #f7f7f2;    
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const StyledHeaderEditText = styled.a`
    font-size: 0.5em;
    flex: 1;
    text-align: right;
    cursor: pointer;
    margin-right: 1em;
`
const StyledHeaderLabel = styled.label`
    flex: 9;
    text-align: left;
`

const StyledLink = styled.a`
    cursor: pointer
`;



export default function({ userProfile } : {userProfile : UserSection}) : JSX.Element {

    let [editMode, setEditMode] = React.useState(false);
    return (
        <div className="profile__section"> 
            <StyledHeader>
                <StyledHeaderLabel> {userProfile.header} </StyledHeaderLabel>
                <StyledHeaderEditText onClick={() => setEditMode(!editMode)}> Edit </StyledHeaderEditText>
            </StyledHeader>
            {
                userProfile.data.map(
                    ({ value, name, label}) => {
                    return (
                            <div className="profile__field">
                                <div className="profile__fieldname"> {label} </div>
                                {
                                   editMode                                    
                                    ? <input value={value}></input>  
                                    : <div className="profile__fieldvalue"> {value} </div> 
                                }
                            </div>
                    );
                    }
                )
            }
        </div>
    );
}