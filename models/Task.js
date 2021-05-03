const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    dataCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
    dataCompleted: {
        type: Date,
        required: false
    }

})

module.exports = Task = mongoose.model('task', TaskSchema)