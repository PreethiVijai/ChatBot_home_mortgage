var express = require('express');
var app = express();
const calculation = require('./routes/mortgage_calc')
app.use('/',calculation)
app.use('/mortgage',calculation)
app.use('/mortgage/:downPayment/:monthlyPayment',calculation)
app.listen(8000, function () {
  console.log('Listening to Port 8000');
});