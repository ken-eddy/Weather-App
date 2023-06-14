const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios')
const routers = require('./src/routes/routes');
const hbs = require('hbs');
const { CLIENT_RENEG_LIMIT } = require('tls');
const port = 5002;
const API_KEYS = "f2ecbb1e6ceba3e3810eaad1aeba0ddc";




//middleware
app.use(express.static('public'));
app.use(routers);
app.set('view engine', 'hbs');
app.set('views', "./src/views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//routes for post data
app.post('/', (req, res) =>{
    const city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`
    axios.get(url).then((response)=>{
       res.render('index', {
        weatherMessage: `The Temperature is ${response.data.main.temp} in ${response.data.name}`
       })
    }).catch((error)=>{
        console.log(error);
    })
});

//server
app.listen(port, (req, res)=>{
    console.log(`Server running at port ${port}`);
});