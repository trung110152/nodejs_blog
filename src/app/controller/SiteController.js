class SiteController {
 
    showhome(req, res) {
        res.send('Show Home');
    }
};

module.exports = new SiteController;