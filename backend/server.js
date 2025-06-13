const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const TaskRoutes = require('./taskRoutes');

const app = express();
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/taskdb')
.then(() => console.log("Mongodb coonect"))
.catch(err => console.log(err));

app.use('/api/tasks',TaskRoutes);
app.listen(5000,() => console.log("Server running on port 5000"));
