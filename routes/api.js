const router = require('express').Router();
const path = require('path');
// Require model
const Workout = require('../models/workout');

// Render stats.html
router.get('/stats', function (req, res) {
    res.sendFile(path.join('C:/Users/bthao/OneDrive/desktop/Fitness-Tracker/public/stats.html'));
});

// Render exercise.html
router.get('/exercise', function (req, res) {
    res.sendFile(path.join('C:/Users/bthao/OneDrive/desktop/Fitness-Tracker/public/exercise.html'));
});

// Render index.html
router.get('/', function (req, res) {
    res.sendFile(path.join('C:/Users/bthao/OneDrive/desktop/Fitness-Tracker/public/index.html'));
});

// Add exercises to recent workout plan
router.put('/api/workouts/:id', ({ body }, res) => {
    Workout.create(body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Add new exercises to new workout plan
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Getting numbers for stats
router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

// Getting latest workout
router.get('/api/workouts', ({ body }, res) => {
    Workout.find({})
        .sort({ day: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
        res.status(400).json(err);
        });
})

// View the combined weight of multiple exercises from the past seven workouts on the stats page

// View the total duration of each workout from the past seven workouts on the stats page

module.exports = router;