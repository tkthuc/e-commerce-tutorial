import * as React  from 'react';



import './page-header.css';
import './search-box.css';
import './cart-bar.css';

import {useState} from "react";


export default function(props) {

        let tabs = ["Book for you", "Bestsellers", "New Release"];

        let topCategories = ["Art & Photography","Children Books","Craft and Hobbies" ]

        let [arrowDirection,setArrowDirection] = useState<string>("down");



        return (
            <header className="site-header">
                <nav className="navbar">
                    <ul className="left-nav">
                        <li><a href="/" className="logo"> <i className="home icon"></i> Bookstore </a></li>
                        <li><a href="/" className="contact"> <i className="envelope icon"></i> Contact us </a></li>
                        <li><a href="/" className="help"> <i className="info circle icon"/>  Help</a></li>
                    </ul>


                    <ul className="right-nav">
                        <li>
                            <a>
                                <i className="language icon">
                                </i>
                                English
                            </a>
                            <div className="language-dropdown">

                                    <a>  English  </a>
                                    <a>  French </a>
                                    <a>  Spanish </a>
                                    <a>  German </a>
                                    <a>  Chinese </a>
                                    <a>  Korean </a>
                                    <a>  Japanese </a>

                            </div>
                        </li>
                        <li> <a className="order_status"> <i className="compass icon"/>Order Status </a></li>
                        <li> <a> <i className="heart outline icon"/> Wishlist </a></li>
                        <li>
                            <a href="#0"><i className="user icon"/>Log In</a>
                        </li>

                    </ul>
                </nav>
                <div className="search-area">
                    <div className="search-form">
                        <span className="search-dropdown">
                        <select>
                            <option>All</option>
                            <option>Fiction</option>
                            <option>Non-fiction</option>
                        </select>
                        </span>


                        <input className="search-input" type="text" name="search_input"/>
                        <button>Search</button>
                    </div>
                </div>
                <div className="cart-bar">
                    <ul>
                        <li className="categories-dropdown"  onMouseLeave={() => setArrowDirection("down")}>
                            <div onMouseEnter={() => setArrowDirection("up")}>Shop by category <i className={`angle ${arrowDirection} icon`}/></div>

                                    <ul>
                                        <li><a>Top Categories</a></li>
                                        {
                                            topCategories.map((item,index) => {
                                               return <li key={index}><a> {item}</a></li>
                                            })
                                        }
                                    </ul>
                        </li>
                        <li> Bestsellers </li>
                        <li> Coming soon </li>
                        <li> New Releases </li>
                        <li> Bargain shop </li>
                    </ul>
                    <ul>
                        <li> $CAD </li>
                        <li> C$0.00 </li>
                        <li> 0 </li>
                    </ul>
                </div>
            </header>
        );

}