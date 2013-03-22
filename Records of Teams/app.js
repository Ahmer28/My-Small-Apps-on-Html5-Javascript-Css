
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//app.get('/', routes.index);
//app.get('/saveodi',user.savestats);
//app.get('/savetm',user.saveTMStats);
app.get('/users', user.list);
app.get('/stats', user.fetch);
app.get('/test', user.fetch2);
app.get('/t20', user.t20rec);
app.get('/t20save', user.savettstats);
app.get('/show', user.statistics);
app.get('/u', user.updatestats);


http.createServer(app).listen(app.get('port'), function(){
console.log("Express server listening on port " + app.get('port'));
});
