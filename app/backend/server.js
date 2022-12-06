//require packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

//startup express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//route to request
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for a request 
    app.listen(process.env.PORT, () => {
    console.log(`Connected to the db and listening on port ${process.env.PORT}`);
});
})
.catch((error) => {
    console.log(error);
})
