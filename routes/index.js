var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('index');
});
router.post('/login', function (req, res) {
    res.render('login');
});
router.post('/register', function (req, res) {
    res.render('login');
});


module.exports = router;