const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// log requests
app.use(morgan('dev'));

// static express folder  

// ajust cors...

// Connect Database...

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