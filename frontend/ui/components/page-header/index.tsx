import * as React  from 'react';



import './page-header.css';
import './search-box.css';
import {useState} from "react";


export default function(props) {

        let tabs = ["Book for you", "Bestsellers", "New Release"];

        let [activeIndex, setActiveIndex] = useState<number>(0);
        return (
            <header className="site-header">
                <nav className="navbar">
                    <a href="/" className="logo"> Bookstore </a>
                    <div className="nav-options">
                        <ul>
                            {
                                tabs.map((item,index) =>
                                    <li key={index} className={(index==activeIndex) ? "active":""}>
                                        <a onClick={() => setActiveIndex(index)}>{item}</a>
                                    </li>)
                            }
                        </ul>
                    </div>
                    <div className="account-actions">
                        <i className="fa fa-globe account-dropdown">
                        </i>
                        <a href="#0" className="sign-out-link">Sign Out</a>
                        <ul>
                            <li> English </li>
                        </ul>
                    </div>
                </nav>
                <form className="search-area" style={{}}>

                    <span className="search-dropdown">
                        <select>
                            <option>All</option>
                            <option>Fiction</option>
                            <option>Non-fiction</option>
                        </select>
                    </span>


                    <input className="search-input" type="text" name="search_input"/>
                    <button>Search</button>
                </form>
            </header>
        );

}