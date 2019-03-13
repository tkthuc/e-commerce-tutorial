import * as  React from 'react';
import * as ReactDOM from 'react-dom';

import * as ES6Promise from "es6-promise";
import { BrowserRouter, HashRouter } from "react-router-dom";

ES6Promise.polyfill();

import App from './containers/App';

ReactDOM.render(
    // should use BrowserRouter for better SEO and history object of HTML5
    <HashRouter>
        <App/>
    </HashRouter> ,
    document.getElementById("container"));