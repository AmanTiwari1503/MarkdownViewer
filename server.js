//Aman Tiwari
var express = require('express');
var app = express();

//view engine setting to ejs
app.set('view engine','ejs');
	
//public folder will store assets
app.use(express.static(__dirname + '/public'));

//routes for app
app.get('/',function(req,res){
	res.render('pad');
});

//port = 8000 (for localhost) or port defines for heroku
app.set('port',(process.env.PORT || 8000));
app.listen(app.get('port'),function(){
	console.log("Started running on port "+app.get('port'));
});
