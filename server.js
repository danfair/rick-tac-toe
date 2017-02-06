import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import passportTwitter from './auth/twitter';
import cookieParser from 'cookie-parser';

const server = express();
server.use(bodyParser.json());
server.use(cookieParser());

// sass
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

// twitter auth
server.use(session({
  secret: 'whatever',
  resave: true,
  saveUninitialized: true
}));
server.use(passport.initialize());
server.use(passport.session());

// templating
server.set('view engine', 'ejs');

// serve index page
server.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Home',
    pageID: 'home'
  });
});

// server.get('/testpage', ensureAuthenticated, (req, res) => {
//   res.render('testpage', {
//     pageTitle: 'Test',
//     pageID: 'test-page'
//   });
// })

server.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

server.get('/auth/twitter', passportTwitter.authenticate('twitter'));

server.get('/auth/twitter/callback',
  passportTwitter.authenticate('twitter', { failureRedirect: '/login?loginfailed=true' }),
  function(req, res) {
    // Successful authentication
    res.cookie('token', req.cookies['connect.sid']);
    res.redirect('/');
  }
);

server.get('/logout', function(req, res){
  req.logout();
  res.clearCookie('token');
  res.redirect('/');
});

// api, static routing
server.use('/api', apiRouter);
server.use(express.static('public'));

// start server
server.listen(config.port, config.host, () => {
  console.info('Listening on port', config.port);
});

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     // req.user is available for use here
//     return next(); }

//   // denied. redirect to login
//   res.redirect('/?loginfailure=true')
// }
