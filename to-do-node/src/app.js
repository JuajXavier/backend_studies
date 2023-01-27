const express = require('express');
const app = express();

app.use(express.json()); 
app.use(
    express.urlencoded({
        extended: true,
    })
)

const indexRouter = require('./routers/index');
const todoRouter = require('./routers/todo');

// everytime the '/endpoint' is called, the router equivalent fires;
app.use('/', indexRouter);
app.use('/todos', todoRouter);

module.exports = app;