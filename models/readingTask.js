//models/readingTask.js
const mongoose = require('mongoose');

const readingTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('ReadingTask', readingTaskSchema);