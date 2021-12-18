import express from 'express';

var app = express();
import router from './routes/mortgage_calc.js'

app.use('/',router)
app.use('/mortgage',router)
app.use('/mortgage/:downPayment/:monthlyPayment',router)
app.use('/mortgage/:state/:city',router)
app.listen(process.env.PORT || 8000, function () {
  console.log('Server started successfully');
});

