const express = require('express');
const path = require('path');
const app = express();

require('./secuirty')(app);

require('./parser')(app, express)

require('./routing')(app);

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

module.exports = app;