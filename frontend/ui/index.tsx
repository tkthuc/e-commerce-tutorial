import * as  React from 'react';
import * as ReactDOM from 'react-dom';

import * as ES6Promise from "es6-promise";
import {BrowserRouter, HashRouter} from "react-router-dom";
import 'font-awesome/css/font-awesome.css';

import 'bootstrap/dist/css/bootstrap.css';

import App from './containers/App';

ES6Promise.polyfill();

ReactDOM.render(

        <App/>
    ,
    document.getElementById("container"));