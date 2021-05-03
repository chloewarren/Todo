const express = require('express');
const bodyParser = require('body-parser');
const task = require('./routes/api/task');
const mongoose  = require('mongoose');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    next();
})

//Connect to MongoDB
const db = require('./config/keys').mongoURI

mongoose.connect(db,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//Routes
app.use('/api/task', task)

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`))