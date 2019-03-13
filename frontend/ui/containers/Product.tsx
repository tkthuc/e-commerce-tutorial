import * as React from 'react';
import ProductPage from "../components/product-page";
import {BookServices} from "../api/bookServices";

export default class Product extends React.Component<any,any> {

    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
            book: {}
        }

    }

    async componentDidMount() {
        let bookData = await BookServices.getBookById(this.props.match.params.id);
        this.setState({
            book: bookData.data
        });
    }

    render() {
        return (
            <ProductPage quantity={this.state.book.quantity} name={this.state.book.name} price={this.state.book.price} description={this.state.book.description}/>
        );
    }
}

