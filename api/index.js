import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';
import mongoose from 'mongoose';
import User from '../models/User';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(config.mongodbUri);

router.get('/user/:userId', (req, res) => {
  if (req.isAuthenticated()) {
    User.find({ username: req.params.userId }, function (err, user) {
      if (err) throw err;

      res.send(user);
    });
  } else {
    res.json({
      accessDenied: true
    })
  }
});

function ensureAuthenticated(req, res, next) {
  console.log(req.session);
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next(); 
  }

  // denied. redirect to login
  res.redirect('/?loginfailure=true')
}


export default router;
