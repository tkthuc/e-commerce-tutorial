import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ProductBox from '../components/product-box/product-box';
import ProductPage from '../components/product-page';




storiesOf('Button', module)
    .add('product box', () => (
        <ProductBox quantity={1} price={1000} productName={"Story Book"} ></ProductBox>
    ))
    .add('product page', () => (
        <ProductPage name={"Vintage Typewriter"} price={20} description={"This typewriter looks good in your living room."} />
    ));