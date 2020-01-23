const express = require('express');
const routes = require('../src/routes');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://showroomcasas:bDHe1lxMHme8hd4Q@showroomcasas-drpz2.mongodb.net/showroomcasasapp', {
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


app.listen(3333);