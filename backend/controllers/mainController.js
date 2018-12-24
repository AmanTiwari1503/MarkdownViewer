const request = require('request');

module.exports = {
	home:home
}

//request handling
function home(req,res){
	res.render('pad.ejs',{});
}
//console.log('here1');