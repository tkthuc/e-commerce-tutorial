import * as React from 'react';

import { Link } from 'react-router-dom';

import './product-box.css';

import {Card, Image} from 'semantic-ui-react';

type Props = {
    quantity: number,
    name: string,
    price: number,
    picture?:string,
    description ?:string,
    openProduct ?: Function
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

    openProduct() {
        this.props.openProduct ? this.props.openProduct(this.props.name) :null ;
    }


    render() {
        return (

            <Card className="product-box">
                <Image onClick={this.openProduct.bind(this)} className="item-image" src={`products/image/${this.props.picture}`}/>
                <Card.Content>
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Description>{this.props.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="item-quantity">
                        <div className="quantity">
                            <input onChange={this.updateQuantity.bind(this)} value={this.state.quantity} type="text"></input>
                        </div>
                        <div className="button">
                                <button>
                                Add to cart
                                </button>
                        </div>
                    </div>
                </Card.Content>
            </Card>
        );

    }

}