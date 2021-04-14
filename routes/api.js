const router = require('express').Router();
const path = require('path');
// Require model
const Workout = require('../models/workout');

// Render stats
router.get('/stats', function (req, res) {
    res.sendFile(path.join('C:/Users/bthao/OneDrive/desktop/Fitness-Tracker/public/stats.html'));
});

// Render exercise
router.get('/exercise', function (req, res) {
    res.sendFile(path.join('C:/Users/bthao/OneDrive/desktop/Fitness-Tracker/public/exercise.html'));
})

// Add exercises to recent workout plan

// Add new exercises to new workout plan

// View the combined weight of multiple exercises from the past seven workouts on the stats page

// View the total duration of each workout from the past seven workouts on the stats page

module.exports = router;