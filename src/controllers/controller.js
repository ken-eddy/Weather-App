


exports.renderHomePage = (req, res) =>{
    res.render('index');
}

// exports.getWeather = (req, res) =>{
//     response = req.body.city;
//     console.log(response);
//     res.end(JSON.stringify(response));
// }

exports.renderAboutPage = (req, res) =>{
    res.render('about');
}

