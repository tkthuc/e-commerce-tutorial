import * as React from 'react';

import 'font-awesome/css/font-awesome.css';

import './product-page.css';

export interface IProductProps {
    name: string,
    price: number,
    description?: string,
    quantity?: number
}

export default function(props : IProductProps) {
    let style = {display:"flex"};
    return (
        <div className="product-page">
            <div className="product-image">
                Image is put here
            </div>

            <div className="product-details">
                <div>
                    <h2> {props.name} </h2>
                    <div> USD {props.price} </div>
                </div>

                <hr/>

                <div>
                    <strong> Product description: </strong>
                    <div> {props.description} </div>
                </div>

                <hr/>

                <form className="quantity-form">
                    <div style={style}>
                        <label> Quantity </label>
                        <div className="quantity-input-box">
                            <input name="quantity"></input>
                            <span className="up-down-buttons">
                                <i className="fa fa-caret-up top"></i>
                                <i className="fa fa-caret-down down"></i>
                            </span>
                        </div>
                    </div>
                    <button type="submit"> Add to cart </button>
                </form>
            </div>
        </div>
    )
}

