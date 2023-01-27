const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Table collumns
const todoSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    finished: {
        type: Boolean,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

// Exports an object called Todo which gives access to the 'todos' collection
module.exports = Todo = mongoose.model('todos', todoSchema);