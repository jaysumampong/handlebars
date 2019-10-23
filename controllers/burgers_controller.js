let express = require('express');
let router = express.Router();

let burger = require('../models/burgers')

router.get('/', (req, res) => {
    burger.select(function(results){
        res.render('index', {burgers: results});
    })
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger_name);
    res.redirect('/');
});

router.put('/api/:id', (req, res) => {
    burger.update(true, req.params.id, function(result) {
        res.status(204).end();
    });
});

router.delete('/api/:id', (req, res) => {
    burger.delete(req.params.id, function(result){
        res.status(204).end();
    });
});

module.exports = router;