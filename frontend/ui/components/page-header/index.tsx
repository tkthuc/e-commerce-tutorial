import * as React from 'react';

import './page-header.css';
import './search-box.css';

export default function(props) {



        return (
            <header className="site-header">
                <div className="navbar">
                    <a href="#0" className="logo"> Bookstore </a>
                    <nav className="site-nav">
                        <ul>
                            <li className="active"><a> Books for you </a></li>
                            <li><a> Bestsellers </a></li>
                            <li><a> New Release </a></li>
                        </ul>
                    </nav>
                    <div className="account-actions">
                        <div className="account-dropdown">
                            Gear
                            <ul>
                                <li> Your Account</li>
                            </ul>
                        </div>
                        <a href="#0" className="sign-out-link">Sign Out</a>
                    </div>
                </div>
                <form className="search-area">

                    <span className="search-dropdown">
                        <select>
                            <option>All</option>
                            <option>Fiction</option>
                            <option>Non-fiction</option>
                        </select>
                    </span>


                    <input className="search-input" type="text" name="search_input"/>
                    <button className="search-right">Search</button>
                </form>
            </header>
        );

}