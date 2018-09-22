const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//connect to the database
mongoose.connect('mongodb://localhost/bh', { useNewUrlParser: true });
//"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"
//Initialize express and save it in a constant called app
const app = express();

//Middlewares
app.use(morgan('dev'));  //morgan is used to log to the console
//makes the static folder public
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});

  //set up the 3 routes of posts, resumes and user
app.use('/users', require('./routes/users'));
app.use('/jobs', require('./routes/posts'));
app.use('/questions', require('./routes/questions'));
app.use('/candidates', require('./routes/resumes'));
app.use('/events', require('./routes/events'));



app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });

  
  
module.exports = app;