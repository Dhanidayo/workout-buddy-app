const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true });

//create a model, name it, apply the schema to it and export.
module.exports = mongoose.model('Workout', workoutSchema); 