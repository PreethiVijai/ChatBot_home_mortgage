var express = require('express');
var app = express();
const calculation = require('./routes/mortgage_calc')
app.use('/',calculation)
app.use('/mortgage',calculation)
app.use('/mortgage/:downPayment/:monthlyPayment',calculation)
app.listen(process.env.PORT || 8000, function () {
  console.log('Server started successfully');
});