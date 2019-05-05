import * as React from 'react';
import ProductBox from "../components/product-box/product-box";

import {Book} from "../common/interfaces";
import {BookServices} from "../api/bookServices";

import {Route} from 'react-router-dom';


export default class Home extends React.Component<{history: any},{books: Book[], [key:string]:any}> {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            inProductView: false,
        }
    }

    async componentDidMount() {
        try {
            let books = await BookServices.getAllBooks();
            this.setState({
                books: books.data
            });
        }catch (e) {
            throw Error("Failed to retrieve all books");
        }
    }

    openProduct(product: Book) {
        this.props.history.push(`/product/${product.id}`);
    }


    render() {
        return (
            <div className="App-content ui cards">
            {
                this.state.books.map(
                    (product,index) => <ProductBox key={index} description={product.description} productName={product.name} price={product.price} quantity={1} openProduct={() => this.openProduct(product)}/>
                )
            }
            </div>
        );
    }
}

