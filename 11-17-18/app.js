var express = require('express');
var expressEdge = require('express-edge');
var bodyParser = require('body-parser');

const app = express()
app.set('views', __dirname + '/views/layout');
// app.use(express.static('public'));
app.use('/assets',express.static(__dirname + '/public/css'));
app.use(expressEdge);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/',(req,res) => {
    res.render('index');
})

app.get('/posts/new/old',(req,res) => {
    res.render('create');
})

app.listen(8081);

