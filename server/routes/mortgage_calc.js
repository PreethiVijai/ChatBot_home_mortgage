
import { parse } from 'csv-parse';

import express from 'express';
import fs from 'fs'; 

var router = express.Router();

router.get('/',function(req,res){
    res.send('Homepage')
})
router.get('/mortgage',function(req,res){
    res.send('Homepage')
})
router.get('/mortgage/:downPayment/:monthlyPayment', function (req, res) {
    var homePrice= req.params.downPayment * req.params.monthlyPayment;
    var data = {
        "HomePrice" : homePrice
    }
    res.send(data);
});

router.get('/mortgage/statistic/:state/:city',function(req,res){
    var inputState = req.params.state.toLowerCase();
    var inputCity = req.params.city.toLowerCase();
    var output_statistics = "State and city statistical data do not exst on the database";
fs.createReadStream('./data_list.csv')
    .pipe(parse({delimiter: ':'}))
    .on('data', function(csvrow) {


        if((csvrow[0].split(",")[0]).toLowerCase()=== inputCity && (csvrow[0].split(",")[1]).toLowerCase()=== inputState ){

            output_statistics= csvrow[0].split(",")[2];
        }     
    })
    .on('end',function() {
     res.send(output_statistics)
    });
})



export default router;


