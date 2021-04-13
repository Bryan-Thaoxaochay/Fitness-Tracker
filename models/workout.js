const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        trim: true,
        required: 'Enter the exercise type (i.e. resistance, conditioning)'
    },
    name: {
        type: String,
        trim: true,
        required: 'Enter the exercise name'
    },
    duration: {
        type: Number,
        required: 'Enter the length of the workout in minutes'
    },
    weight: {
        type: Number,
        required: 'Enter how much weight was lifted'
    },
    reps: {
        type: Number,
        required: 'Enter the number of reps'
    },
    sets: {
        type: Number,
        required: 'Enter the number of sets'
    },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;