const express = require('express');
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// log all requests
app.use(morgan('dev'));

// static express folder  

// ajust cors...
app.use((req, res, next) => {
    // you can add a specific origine or leave it as "*" for all or 'https://github.com/dylut2000'
    res.header('Access-Control-Allow-Origin', '*');
    // you can specify a headers, the ones provided are the general ones
    res.header('Access-Control-Allow-Headers', 'Origine, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token');

    if (req.method === 'OPTIONS') { 
        // list http methods that the API must support
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        res.status(200).json({});
    }
    next();
});


// Connect to mongo Database, find the mongodb function in the config/db.js
connectDB();

// different routes...

/**
 * ⚠️ keep the following codes on the last ligne before exporting @express.app
 * collect errors from express
 */
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
}).use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            dylut: 'App documentation coming soon...'
        }
    });
});
// export app
module.exports = app;