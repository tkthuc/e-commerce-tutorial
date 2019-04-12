import * as React from 'react';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

import ProductBox from '../components/product-box/product-box';
import ProductPage from '../components/product-page';

import LoginPage from '../components/login-page/login-page';

import Modal from '../components/modal/modal';



storiesOf('Button', module)
    .add('product box', () => (
        <ProductBox quantity={1} price={1000} productName={"Story Book"} ></ProductBox>
    ))
    .add('product page', () => (
        <ProductPage name={"Vintage Typewriter"} priceUsd={20} description={"This typewriter looks good in your living room."} />
    ))
    .add('login-page', () => (
        <LoginPage></LoginPage>
    ))
    .add('modal', () =>{
        const ModalWithLogin = Modal(LoginPage);
        return <ModalWithLogin></ModalWithLogin>
    })