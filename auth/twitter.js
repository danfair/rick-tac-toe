import passport from 'passport';
import { Strategy } from 'passport-twitter';
import User from '../models/User';
import config from '../config';
import init from './init';

passport.use(new Strategy({
    consumerKey: config.twitter.apiKey,
    consumerSecret: config.twitter.apiSecret,
    callbackURL: config.twitter.callbackUrl
  },
  function(accessToken, refreshToken, profile, done) {

    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      someID: profile.id
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));

// serialize user into the session
init();


module.exports = passport;