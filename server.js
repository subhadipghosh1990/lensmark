var express = require("express");


var helmet = require("helmet");
var expressfileupload = require("express-fileupload");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(expressfileupload());
app.use(helmet());

//static files
app.use('/assets', express.static('assets'));

//view engine
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//db connection
const conn = require("./connection/connection");
// conn.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

//routes
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/gallery', function (req, res) {
    res.render('gallery');
});

app.get('/services', function (req, res) {
    res.render('services');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('/admin', function (req, res) {
    res.render('admin');
});

app.get('/signup', function (req, res) {
    res.render('signup');
});


app.post('/upl', function (req, res) {
    res.send({
        txt:req.body,
        fle:req.files
    });
});

app.post('/sign', function (req, res) {



    conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (name, email, phone, password) VALUES ('"+req.body.name+"','"+req.body.mail+"','"+req.body.phone+"','"+req.body.pass+"')";
        conn.query(sql, function (err, result) {
          if (err) throw err;
//          console.log("1 record inserted");
            res.send({
                status:"signed up"
            });
        });
      });



});







app.listen(9000);