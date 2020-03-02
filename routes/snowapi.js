var express = require('express');
var router = express.Router();

/* GET home page. 
get help in the below link
https://docs.microsoft.com/en-in/azure/app-service/containers/quickstart-nodejs*/
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/customer/callback', function (req, res) {

    res.send("Welcome to SNOW API server " + new Date());
});

router.post('/api/customer/callback', function (req, res) {
    if (req.body)
        console.log(JSON.stringify(req.body));

    res.send("Done with post call " + new Date());
});

router.put('/api/customer/callback', function (req, res) {
    if (req.body)
        console.log(JSON.stringify(req.body));

    res.send("Done with put call " + new Date());
});

module.exports = router;
