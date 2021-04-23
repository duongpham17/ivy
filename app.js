const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

require('./secuirty')(app);

app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({extended: true, limit: '100kb'}));
app.use(cookieParser());

require('./routing')(app);

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

module.exports = app;