const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    tittle: String,
    description:String

});

module.exports = mongoose.model("Task", taskSchema);