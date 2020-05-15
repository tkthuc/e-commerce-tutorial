import * as React from 'react';
import ProductBox from "../components/product-box/product-box";

import {Book} from "../common/interfaces";
import {BookServices} from "../api/bookServices";


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

    openProduct(book: Book) {
        this.props.history.push(`/product/${book.id}`);
    }


    render() {
        return (
            <div className="App-content ui">
            {
                this.state.books.map(
                    (book,index) => <ProductBox key={index} {...book} quantity={1} openProduct={() => this.openProduct(book)}/>
                )
            }
            </div>
        );
    }
}

