const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const PostController = require('../src/controller/PostController');

const routes = express.Router();
//routes.post('/posts', multer(multerConfig).single('file'), PostController.store);
routes.post('/posts', PostController.store);
routes.get('/posts', PostController.index);

module.exports = routes;