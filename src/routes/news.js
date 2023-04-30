const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewsController');

router.use('/getNews', newsController.getNews);

module.exports = router;