var path = require('path'),
    routes = require('./routes'),
    exphbs = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment'),
    multer = require('multer');

module.exports = function(app) {
	app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
        helpers: {
            timeago: function(timestamp) {
                console.log(timestamp);
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }).engine);
    app.set('view engine', 'handlebars');

    app.use(morgan('dev'));
	app.use(bodyParser());
	app.use(multer({ dest: path.join(__dirname, 'public/upload/temp')}));

	app.use(methodOverride());
	app.use(cookieParser('some-secret-value-here'));
	routes.initialize(app);
	
	app.use('/public/', express.static(path.join(__dirname, '../public')));

	if ('development' === app.get('env')) {
	   app.use(errorHandler());
	}

  	return app;
};

