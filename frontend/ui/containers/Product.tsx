import * as React from 'react';
import ProductPage from "../components/product-page";

export default class Product extends React.Component {
    render() {
        return (
            <ProductPage quantity={1} name={"Test"} price={100} description={"Hello World"}/>
        );
    }
}

