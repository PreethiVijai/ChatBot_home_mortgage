const express = require('express')
var router = express.Router();
router.get('/',function(req,res){
    res.send('Homepage')
})
router.get('/mortgage',function(req,res){
    res.send('Homepage')
})
router.get('/mortgage/:downPayment/:monthlyPayment', function (req, res) {
    var data = {
        "HomePrice" : req.params.downPayment * req.params.monthlyPayment
    }
    res.send(data);
});
module.exports = router;
