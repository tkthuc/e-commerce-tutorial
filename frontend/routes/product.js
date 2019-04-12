var express = require('express');
var router = express.Router();
var axios = require('axios');


// if(process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = 'http://localhost:8080';
// } else {
//     axios.defaults.baseURL = 'http://product-service:8080';
// }


var endpoints = require('../consul/serviceLocation');





router.get('/', async function(req, res, next){
    try {
        let listOfProducts = await axios.get(`${endpoints.getServiceLocationPath('product-service')}/products`);
        res.send(listOfProducts.data);
    } catch (e) {
        next(e);
    }
});


router.get('/:id', async (req, res, next) => {

    try {
        let response = await axios.get(`${endpoints.getServiceLocationPath('product-service')}/products/${req.params.id}`);
        res.send(response.data);
    } catch (e) {
        next(e);
    }

});

module.exports = router;