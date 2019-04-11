const express = require('express');

//Multer
const multer = require('multer');
const multerConfig = require('./config/multer')

const routes = express.Router();

//Controllers
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//boxes router
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

//files routes
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;