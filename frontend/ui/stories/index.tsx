import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ProductBox from '../components/product-box/product-box';

storiesOf('Button', module)
    .add('with some emoji', () => (
        <ProductBox quantity={1} price={1000} productName={"Story Book"} ></ProductBox>
    ));