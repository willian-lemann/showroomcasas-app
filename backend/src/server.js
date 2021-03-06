require('dotenv').config();
const express = require('express');
const routes = require('../src/routes');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(fileupload({
    useTempFiles: true,
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(process.env.PORT || 3000);