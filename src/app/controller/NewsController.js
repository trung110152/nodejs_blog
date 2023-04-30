class HomeController{

  getNews(req,res) {
    res.send('Get news');
  }  
};

module.exports = new HomeController;