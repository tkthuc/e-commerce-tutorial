var express = require('express');
var router = express.Router();
var proxy = require('express-http-proxy');

var endpoints = require('../consul/serviceLocation');



module.exports = proxy(`${endpoints.getServiceLocationPath("authentication-service")}`,{
    proxyReqPathResolver: function (req) {
       return req.baseUrl;

    }
});
