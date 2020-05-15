import * as React  from 'react';



import './page-header.css';
import './search-box.css';
import './cart-bar.css';
import Login from '../login/login';
import Modal from '../modal/modal';

import {useState} from "react";
import {Fragment} from "react";

import UserContext from '../../context/userContext';
import set = Reflect.set;

export default function(props) {

        let tabs = ["Book for you", "Bestsellers", "New Release"];

        let topCategories = ["Art & Photography","Children Books","Craft and Hobbies" ]

        let [arrowDirection,setArrowDirection] = useState<string>("down");


        let [isLoginPopupVisible, setLoginPopupVisibility] = useState<boolean>(false);

        let { username, setUsername } = React.useContext(UserContext);

        const showLoginPopup = function():void {
            setLoginPopupVisibility(true);
        }

        let [language, setLanguage] = React.useState("English");
        const languages = ["English", "Spanish", "Chinese", "French", "German"];
        const ModalWithLogin = Modal(Login);

        return (
            <Fragment>
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
                                    {language}
                                </a>
                                <div className="header-dropdown">
                                    {
                                        languages.map(language => {
                                            return <a onClick={() => setLanguage(language)}>  {language} </a>
                                        })
                                    }
                                </div>
                            </li>
                            <li> <a className="order_status"> <i className="compass icon"/>Order Status </a></li>
                            <li> <a> <i className="heart outline icon"/> Wishlist </a></li>
                            <li>

                                {
                                    username == null
                                    ?
                                    <a href="#0" onClick={() => showLoginPopup()}><i className="user icon"/>Log In</a>
                                    :
                                    <div>
                                        <a> <i className="user icon"></i> {username} </a>
                                        <div className="header-dropdown">
                                            <a onClick={() => setUsername(null)}>Log out</a>
                                        </div>
                                    </div>
                                }
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


                {
                    isLoginPopupVisible &&  <ModalWithLogin
                        callback={({email}) => {
                            setUsername(email);
                            setLoginPopupVisibility(false);
                        }}
                    />
                }

            </Fragment>
        );

}