const Course = require('../models/Course');

class SiteController {
 
       async showhome(req, res) {
        const courses = await Course.find();
        if(courses) {
            res.status(200).json(courses);
            return
        } else {
        res.status(400).json("Error");
        }
        };
}

module.exports = new SiteController;