import * as React from 'react';
import ProductBox from "../components/product-box/product-box";
import ProductPage from "../components/product-page";

import {Book} from "../common/interfaces";
import {BookServices} from "../api/bookServices";

import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class Home extends React.Component<{history: any},{books: Book[], [key:string]:any}> {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            inProductView: false,
        }
    }

    async componentDidMount() {
        let books: Book[] = BookServices.getAllBooks();
        this.setState({
            books
        });
    }

    openProduct(product: Book) {
        this.props.history.push(`/product/${product.name}`);
    }


    render() {
        return (
            <div className="App-content">
            {
                this.state.books.map(
                    (product,index) => <ProductBox key={index} productName={product.name} price={product.price} quantity={1} openProduct={() => this.openProduct(product)}/>
                )
            }
            </div>
        );
    }
}

