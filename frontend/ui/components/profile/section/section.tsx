import * as React from 'react';

import styled from 'styled-components';

import { Formik, Field, FieldArray } from 'formik';
import { FieldType, UserSection } from 'api/user-type';



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

const StyledButtonSection = styled.div`
    display: flex;
    
    & > button {
        margin-right: 1em;
        min-width: 6em;
    }
`;

export interface SectionProps {
    userProfile: UserSection,
    onSave ?(values : UserSection): void
}


export default function({ userProfile, onSave } : SectionProps) : JSX.Element {

    let [editMode, setEditMode] = React.useState(false);
    return (

        <Formik
            initialValues = {userProfile}
            onSubmit={ values => {
                onSave(values);
                setEditMode(false);
            }}
        >
            {
                ({ handleSubmit, values, resetForm }) => (
                    <form className="profile__section" 
                          onSubmit={
                              (event) => {
                                  event.preventDefault();
                                  handleSubmit();
                              }
                          }> 
                        <StyledHeader>
                            <StyledHeaderLabel> {userProfile.header} </StyledHeaderLabel>
                            <StyledHeaderEditText onClick={() => setEditMode(!editMode)}> Edit </StyledHeaderEditText>
                        </StyledHeader>

                        <FieldArray name="data">
                            {
                                ({}) => {
                                    return values.data.map(
                                        ({ value, name, label, type}, index) => {
                                        return (
                                                <div className="profile__field" key={`${values.header}.${index}`}>
                                                    <div className="profile__fieldname"> {label} </div>
                                                    {
                                                    editMode                                    
                                                        ? <Field name={`data.${index}.value`} type='text'></Field>  
                                                        : <div className="profile__fieldvalue"> {value} </div> 
                                                    }
                                                </div>
                                        );
                                        }
                                    )
                                }
                            }

                        </FieldArray>
                        
                        {
                            editMode && <StyledButtonSection>
                                            <button type="Submit"> Save </button>
                                            <button 
                                                onClick= { 
                                                    () => {
                                                        resetForm();
                                                        setEditMode(false);
                                                    }
                                                }
                                            > 
                                                Cancel 
                                            </button>
                                        </StyledButtonSection>
                        }
                    </form>
                )
            }
        </Formik>       
    );
}