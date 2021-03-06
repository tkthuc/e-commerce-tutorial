
import "babel-polyfill";
import * as  React from 'react';
import * as ReactDOM from 'react-dom';

import * as ES6Promise from "es6-promise";

import {BrowserRouter, HashRouter} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';

ES6Promise.polyfill();

ReactDOM.render(

        <App/>
    ,
    document.getElementById("container"));