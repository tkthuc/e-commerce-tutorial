var express = require('express');
var router = express.Router();
var proxy = require('express-http-proxy');

var endpoints = require('../consul/serviceLocation');

function getHost() {
    return `${endpoints.getServiceLocationPath("authentication-service")}`;
}

module.exports = proxy(getHost,{
    memoizeHost: false,
    proxyReqPathResolver: function (req) {
        debugger;
        console.log(`${endpoints.getServiceLocationPath("authentication-service")}`)
       return req.baseUrl;

    }
});
