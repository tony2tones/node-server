const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('this always runs');
    next();
})

app.use('/users', (req, res, next) => {
    res.send('<h1>Hello users to express</h1>');
    console.log('another middleware');
});

app.use('/',(req, res, next) => {
    res.send('<h1>Hello peeps to the base of express</h1>');
    console.log('another middleware');
});

// const server = http.createServer(app);

app.listen(3000);