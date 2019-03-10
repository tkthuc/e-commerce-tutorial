import * as React from 'react';

import './product-box.css';

type Props = {
    quantity: number,
    productName: string,
    price: number
}

type State = {
    quantity: number
}

export default class ProductBox extends React.Component<Props,  Readonly<State>> {

    constructor(props) {
        super(props);

        this.state = {
            quantity: props.quantity
        };

    }

    updateQuantity(event) {
        this.setState({
            quantity: event.target.value
        })
    }


    render() {
        return (
            <div className="product-box">
                <div className="header"> {this.props.productName} </div>
                <div className="content">
                    <div className="product-url">
                        200x100
                    </div>
                    <div> {this.props.price} </div>
                    <div className="product-box-bottom">
                        <div className="quantity"> <input onChange={this.updateQuantity.bind(this)} value={this.state.quantity} type="text"></input> </div>
                        <div className="button">
                            <button>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );

    }

}