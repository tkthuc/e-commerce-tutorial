import * as  React from 'react';
import * as ReactDOM from 'react-dom';

import * as ES6Promise from "es6-promise";
import { BrowserRouter } from "react-router-dom";

ES6Promise.polyfill();

import App from './containers/App';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter> ,
    document.getElementById("container"));