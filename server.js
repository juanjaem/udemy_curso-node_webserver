var express = require('express');
var colors = require('colors');
var app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public') );

// Express HBS
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'JuanPro'
    });
});


app.get('/about', (req, res) => {
    res.render('about');
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/data', (req, res) => {
      res.send('hola data');
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`.bgGreen);
    
});