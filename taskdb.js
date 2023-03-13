const mongoose = require('mongoose');
const connection = require('./dbConnection')

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  about: {
    type: String,
    required: true
  }
});

const  Task = connection.model('taskSchema', taskSchema);

module.exports = Task;