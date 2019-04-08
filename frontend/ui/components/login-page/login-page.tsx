
import * as React from 'react';

import { Form } from 'react-bootstrap';

import './login-page.css';
import Button from "react-bootstrap/Button";

export default function(props) {
    return (
        <Form className={'login-page'}>
            <Form.Group controlId={"loginWithEmail"}>
                <Form.Label> Email address </Form.Label>
                <Form.Control type="email" placeholder="Enter email"></Form.Control>
            </Form.Group>

            <Form.Group controlId="loginPassword">
                <Form.Label> Password </Form.Label>
                <Form.Control type="password" placeholder="password"/>
            </Form.Group>

            <Button variant="primary" type="submit"> Submit </Button>
        </Form>
    )
}