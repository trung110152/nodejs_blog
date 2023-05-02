const express = require('express');
const router = express.Router();
const coursesController = require('../app/controller/CoursesController');

router.get('/showCourse/:slug', coursesController.showCourse);

module.exports = router;