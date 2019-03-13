import * as React from 'react';

import {Route, Switch} from 'react-router-dom';
import PageHeader from '../components/page-header';

import Home from './Home';
import Product from './Product';

import './App.css';


export default class App extends React.Component{



    render() {
        return (
            <div className="App">
                <PageHeader/>




                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/product/:id" component={Product}></Route>
                </Switch>


            </div>
        );
    }
}
