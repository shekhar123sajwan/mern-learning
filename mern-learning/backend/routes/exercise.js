const express = require('express');
const Exercise = require('../models/exercise.model');
const exerciseRouter = express.Router();

exerciseRouter.route('/')
    .get((req, res) => {
        Exercise.find()
            .then(exercise => res.json(exercise))
            .catch(err => res.statusCode(404).json('Error : ' + err));
    });

exerciseRouter.route('/add')
    .post((req, res) => {
        const username = req.body.exercisename;
        const description = req.body.description;
        const duration = Number(req.body.duration);
        const date = Date.parse(req.body.date);
        const newExercise = new Exercise({ username, description, duration, date });

        newExercise.save()
            .then(() => {
                res.statusCode = 200;
                res.end('Exercise Added')
            })
            .catch((err) => res.json('Err: ' + err));
    });

module.exports = exerciseRouter;