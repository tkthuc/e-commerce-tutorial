
import * as React from 'react';

import { BookServices } from "../api/bookServices";
import ProductBox from '../components/product-box/product-box';
import PageHeader from '../components/page-header';

import './App.css';
import {Book} from "../common/interfaces";


export default class App extends React.Component<any,{books: Book[]}>{

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    async componentDidMount() {
        let books: Book[] = BookServices.getAllBooks();
        this.setState({
            books
        });
    }

    render() {
        return (
            <div className="App">
                <PageHeader/>
                <div className="App-content">
                    {
                        this.state.books.map(
                            (product,index) => <ProductBox key={index} productName={product.name} price={product.price} quantity={1}/>
                        )
                    }
                </div>

            </div>
        );
    }
}
