const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const ThumbnailController = require('./controllers/ThumbnailController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/thumbnails', upload.single('thumbnail'),ThumbnailController.store);
routes.get('/thumbnails', ThumbnailController.show);

module.exports = routes;