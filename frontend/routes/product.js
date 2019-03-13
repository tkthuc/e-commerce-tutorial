var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send(Array.from({length: 1000}, (v, k) => k+1).map(
        (val,index) => {
            return {
                id: index,
                name: `Harry Potter ${index}`,
                quantity: 1,
                price: 1000,
                authors: ["JK Rowling"]
            }
        }
    ));
});

router.get('/:name', (req, res, next) => {
    res.send(
        {
            id: 1,
            name: `Harry Potter ${req.params.name}`,
            quantity: 1,
            price: 1000,
            authors: ["JK Rowling"],
            description: "This is a book about a boy wizard fighting the evils in magical world"
        }
    );
});

module.exports = router;