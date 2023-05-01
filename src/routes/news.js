const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewsController');

router.get('/getNews', newsController.getNews);

module.exports = router;