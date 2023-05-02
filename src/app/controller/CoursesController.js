const Courses = require('../models/Course');
const {mongooToObject} = require('../../utill/mongoose');

class CoursesController {
 
       async showCourse(req, res,next) {
            Courses.findOne({slug: req.params.slug})
                .then(course => {
                    res.render('courses/show', {
                        course: mongooToObject(course)
                    });
                })
                .catch(next)
        };
}

module.exports = new CoursesController;