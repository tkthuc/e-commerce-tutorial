import * as React from 'react';
import { useState } from 'react';

import './product-page.css';

export interface IProductProps {
    name: string,
    priceUsd: number,
    description?: string,
    quantity?: number,
    picture?: string,
    authors?: string[]
}



export default function(props : IProductProps) {


    if(props == null || Object.keys(props).length == 0) {
        return <></>;
    }


    let style = {display:"flex"};

    let [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity+1);
    };

    const decreaseQuantity = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1);
        }
        console.log(quantity);
    }

    return (
        <div className="product-page">
            <div className="product-image">
                <img src={`products/image/${props.picture}`} alt="Image stored here"></img>
            </div>

            <div className="product-details">
                <div className="product-name">

                    <h2> {props.name} </h2>
                    <div> USD {props.priceUsd} </div>
                </div>

                <hr/>

                <div className="product-description">
                    <strong> Product description: </strong>
                    <div style={{paddingBottom:"10px"}}> {props.description} </div>
                    <div style={{paddingBottom:"10px"}}> By(author) {props.authors.join(" and ")} </div>
                </div>

                <hr/>

                <div className="quantity-form">
                    <div style={style}>
                        <span> Quantity </span>
                        <div className="quantity-input-box">
                            <input name="quantity" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}></input>
                            <div className="up-down-buttons">
                                <span onClick={increaseQuantity}><i className="caret up icon"></i></span>
                                <span onClick={decreaseQuantity}><i className="caret down icon"></i></span>
                            </div>
                        </div>
                    </div>
                    <button> Add to cart </button>
                </div>
            </div>
        </div>
    )
}

