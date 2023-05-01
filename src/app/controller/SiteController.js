const Courses = require('../models/Course');
const {mutipleMongooseToObject} = require('../../utill/mongoose');

class SiteController {
 
       async showhome(req, res,next) {
            Courses.find({})
                .then(courses => {
                    res.render('home', {
                        courses: mutipleMongooseToObject(courses)
                    });
                })
                .catch(next)
        };
}

module.exports = new SiteController;