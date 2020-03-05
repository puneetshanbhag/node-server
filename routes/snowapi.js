var express = require('express');
var router = express.Router();

let memoryObject = {};

/* GET home page. 
get help in the below link
https://docs.microsoft.com/en-in/azure/app-service/containers/quickstart-nodejs*/
router.get('/', function (req, res, next) {
    res.render('index', { title: "Welcome" });
});

router.get('/list', function (req, res, next) {
    res.render('list', { title: "Callback request received at client side(example : UMC)", reqs: memoryObject });
});

router.get('/api/customer/callback', function (req, res) {

    memoryObject[new Date()] = req.method +": " + JSON.stringify(req.body);
    res.send("Welcome to SNOW API server " + new Date());
});

router.post('/api/customer/callback', function (req, res) {
    if (req.body)
        console.log(JSON.stringify(req.body));
        memoryObject[new Date()] = req.method +": " + JSON.stringify(req.body);

    res.send("Done with post call " + new Date());
});

router.put('/api/customer/callback', function (req, res) {
    if (req.body)
        console.log(JSON.stringify(req.body));
        memoryObject[new Date()] = req.method +" : " + JSON.stringify(req.body);

    res.send("Done with put call " + new Date());
});

module.exports = router;
