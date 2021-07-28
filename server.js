const express = require('express');
const app = express();

//config.env our environment
require('dotenv').config({path: "./config.env" });

//for security
require('./server/security')(app);

//limit users request per minute
require('./server/rateLimit')(app);

//for parsing JSON data
require('./server/parser')(app, express);

//endpoint urls
require('./server/routes')(app);

//serve our production html files from build folder
require('./server/heroku')(app, express);

//connect to MongoDB using mongoose
require('./server/mongodb')();

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));