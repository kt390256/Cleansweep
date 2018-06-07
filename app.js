/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
const express          = require('express');
const exphbs           = require('express-handlebars');
const path             = require('path');
const logger           = require('morgan');
const cookieParser     = require('cookie-parser');
const bodyParser       = require('body-parser');
const passport         = require('passport');
const session          = require('express-session');
const flash            = require('connect-flash');
const expressValidator = require('express-validator');
const home             = require('./routes/home');
const app              = express();

require('./config/passport')(passport);

// Load file NODE_ENV only in development
if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
}

var hbs = exphbs.create({
  helpers: {
    ifCondition: function(value) {},
    statusString: function(statusString) {}
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine( 'handlebars', hbs.engine );
app.engine( 'handlebars', exphbs( { defaultLayout: 'main' } ) );
app.set( 'view engine', 'handlebars' );

// morgan logger
app.use( logger('dev') );

// support parsing of application/json type post data
app.use( bodyParser.json() );

// support pasing of application/x-www-form-urlencoded post data
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( cookieParser() );
app.use( flash() );

// public data
app.use( express.static ( path.join(__dirname, 'public') ) );

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;

    while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
    }
    return {
        param : formParam,
        msg   : msg,
        value : value
    };
  }
}));

// session default info
app.use(session({
  secret: 'csc648',
  resave: false,
  saveUninitialized: false
}));

app.use( passport.initialize() );
app.use( passport.session() );

app.use('/', home)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.use(function(request, response, next){
  response.locals.currentUser = request.user.dataValue.username;
  next();
})

module.exports = app;
