const express = require('express')
const taskFunctions = require('./functions')
const routes = express.Router()

routes.get('/gettask/:_id',taskFunctions.getTask)
routes.get('/getalltask',taskFunctions.getTasksAll)
routes.post('/posttask',taskFunctions.postTask) 
routes.put('/puttask/:_id',taskFunctions.updateTask)
routes.delete('/deletetask/:_id',taskFunctions.deleteTask)

module.exports = routes 