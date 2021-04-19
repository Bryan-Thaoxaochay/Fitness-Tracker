const router = require('express').Router();
const Workout = require('../models/workout');

// Add exercises to recent workout plan
router.put('/api/workouts/:id', ({ body }, res) => {
    Workout.create(body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Add new exercises to new workout plan
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(data => {
            res.json(data);
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
router.get('/api/workouts', (req, res) => {
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
        // .aggregate(
        //     [
        //         {
        //             $addFields: {
        //                 totalDuration: { $sum: "$duration" }
        //             }
        //         }
        //     ], 
        //     function (err, result) {
        //     if (err) {
        //         res.send(err);
        //     } else {
        //         res.json(result);
        //     }
        // })
// View the total duration of each workout from the past seven workouts on the stats page

module.exports = router;