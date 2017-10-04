var express 	= require('express');
var app 		= express();

app.use(express.static(__dirname + '/dist'));

app.listen(5000);
console.log('App is runung on port 5000');
