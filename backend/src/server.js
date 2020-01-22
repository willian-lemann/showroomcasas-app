require('dotenv').config();
const express = require('express');
const routes = require('../src/routes');
const mongoose = require('mongoose');





const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3333);