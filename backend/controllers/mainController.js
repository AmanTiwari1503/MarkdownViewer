const request = require('request');

module.exports = {
	home:home
	newhome:newhome
}

//request handling
function home(req,res){
	res.render('pad.ejs',{});
}
function newhome(req,res){
	res.render('pad.ejs',{});
}
//console.log('here1');