var express = require('express');
var router = express.Router();

const flag = "cfreak{this is not actual flag!}"

/* GET home page. */
router.get('/', function(req, res, next) {
 	res.render('index')
});

router.post('/', function(req, res, next) {
	var profile = req.body.profile
 	res.render('index', profile)
});

module.exports = router;
