const express = require('express');
const router = express.Router();
const Task = require('../../models/Task');

router.get('/', async (req, res) => {
    console.log('GET: api/task/');
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/', async(req, res) => {
    console.log('POST: api/task/')
    const {name, completed } = req.body;
    let task = new Task({
        name: name,
        completed: completed
    })
    task.save()

    let tasks = await Task.find()

    res.json(tasks) 
})

router.post('/update', async(req, res) => {
    console.log('POST: /api/task/update')
    const { _id } = req.body

    const task = await Task.findOne({_id: _id})
    task.completed = !task.completed
    task.save()

    let tasks = await Task.find()
    res.json(tasks)
})

module.exports = router;