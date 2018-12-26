//Aman Tiwari
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var _ = require('underscore');
var mainRoutes = require('./backend/routes/mainRoutes');

const cors = require('cors');
// enable cors
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

//view engine setting to ejs
app.set('view engine','ejs');
	
//main folder will store static content
app.use(express.static(__dirname + '/main'));
app.set('views',__dirname+'/main/views')
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes for app
app.get('/',mainRoutes);

//share.js functionality
var sharejs = require('share');

// set up redis server
var redisClient;
console.log(process.env.REDISTOGO_URL);
if (process.env.REDISTOGO_URL) {
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  redisClient = require("redis").createClient(rtg.port, rtg.hostname);
  redisClient.auth(rtg.auth.split(":")[1]);
} else {
  redisClient = require("redis").createClient();
}

// options for sharejs 
var sharejsOptions = {
  db: {type: 'redis',client: redisClient},
};

// attach the express server to sharejs
sharejs.server.attach(app, sharejsOptions);

//port = 8000 (for localhost) or port defines for heroku
app.set('port',(process.env.PORT || 8000));
app.listen(app.get('port'),function(){
	console.log("Started running on port "+app.get('port'));
});
