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
  console.log(req.params.userId);
  User.find({ username: req.params.userId }, function (err, user) {
    if (err) throw err;

    res.send(user);
  });
});


export default router;
