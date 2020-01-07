const express = require('express');
const routes = require('../src/routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('firebase/storage');

const firebaseConfig = {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appID: "app-id",
}

firebase.initializeApp(firebaseConfig);


const app = express();

mongoose.connect('mongodb+srv://showroomcasas:bDHe1lxMHme8hd4Q@showroomcasas-drpz2.mongodb.net/showroomcasasapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(routes);

app.listen(3333);