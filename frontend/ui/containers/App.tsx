import * as React from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';

import * as loadable from 'react-loadable';

import PageHeader from '../components/page-header';

// import Home from './Home';
// import Product from './Product';

import './App.css';

import UserContext from '../context/userContext';

const LoadingComponent = () => <h3>please wait...</h3>;

const AsyncHome = loadable({
    loader: () => import('./Home'),
    loading: LoadingComponent
});

const AsyncProduct = loadable({
    loader: () => import('./Product'),
    loading: LoadingComponent
})

export interface IAppContext {
    username: string
}

export default class App extends React.Component<{},IAppContext>{

    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }

    setUsername(username) {
        this.setState({
            username
        })
    }

    render() {



        return (
            <UserContext.Provider value={{username: this.state.username,setUsername: this.setUsername.bind(this)}}>
                <BrowserRouter>
                    <div className="App">
                        <PageHeader/>

                        <Switch>
                            <Route exact path="/" component={AsyncHome}></Route>
                            <Route path="/product/:id" component={AsyncProduct}></Route>
                        </Switch>


                    </div>
                </BrowserRouter>
            </UserContext.Provider>
        );
    }
}
