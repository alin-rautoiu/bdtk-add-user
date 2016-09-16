var express = require('express');
var wordpress = require('wordpress');
var jade = require('jade');

// var client = wordpress.createClient({
//     url: "bdtk.ro",
//     username: "",
//     password: ""
// });

var post =   { 
    title: 'Test Encyclopedia',
    status: 'draft',
    type: 'encyclopedia',
    name: 'test-encyclopedia',
    author: '2',
    password: '',
    excerpt: '',
    content: '',
    parent: '0',
    menuOrder: 0,
    commentStatus: 'closed',
    pingStatus: 'closed',
    sticky: false,
    thumbnail: [],
    format: 'standard',
    customFields: [] } 

var app = express();
app.use(express.bodyParser());
app.set('views', './views');
app.set('view engine', 'jade');

// client.newPost(post,function( error, posts ) {
//     console.log(posts);
// });
app.get('/', function(req, res) {
    res.render('form');         
});

app.post('/', function(req, res){
    console.log(req.body);
    console.log(req.add);
}) 

var server = app.listen(process.env.PORT || 3002);