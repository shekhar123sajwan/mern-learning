const express = require('express');
const User = require('../models/user.model');
const userRouter = express.Router();

userRouter.route('/')
    .get((req, res) => {
        User.find()
            .then((user) => res.status(200).json(user))
            .catch((err) => res.status(404).json('Err: ' + err));

    });

userRouter.route('/add')
    .post((req, res) => {
        const username = req.body.username;
        const Users = new User({ username });
        Users.save()
            .then(() => res.status(201).json('User created'))
            .catch((err) => res.status(500).json(err));
    });


module.exports = userRouter;