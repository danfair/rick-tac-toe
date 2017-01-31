import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
const TwitterStrategy = require('passport-twitter').Strategy;
import User from './models/User';

const server = express();
server.use(bodyParser.json());

// sass
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

// templating
server.set('view engine', 'ejs');

// serve index page
server.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Home',
    pageID: 'home'
  });
});

server.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

// api, static routing
server.use('/api', apiRouter);
server.use(express.static('public'));

// auth
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// start server
server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
