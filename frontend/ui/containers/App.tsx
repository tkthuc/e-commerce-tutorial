import * as React from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';

import * as loadable from 'react-loadable';

import PageHeader from '../components/page-header';

// import Home from './Home';
// import Product from './Product';

import './App.css';

const LoadingComponent = () => <h3>please wait...</h3>;

const AsyncHome = loadable({
    loader: () => import('./Home'),
    loading: LoadingComponent
});

const AsyncProduct = loadable({
    loader: () => import('./Product'),
    loading: LoadingComponent
})


export default class App extends React.Component{



    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <PageHeader/>

                    <Switch>
                        <Route exact path="/" component={AsyncHome}></Route>
                        <Route path="/product/:id" component={AsyncProduct}></Route>
                    </Switch>


                </div>
            </BrowserRouter>
        );
    }
}
