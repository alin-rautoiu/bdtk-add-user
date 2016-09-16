var express = require('express');
var wordpress = require('wordpress');
var jade = require('jade');
var bodyParser = require('body-parser')

var client = wordpress.createClient({
    url: "bdtk.ro",
    username: "",
    password: ""
});

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

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

// client.newPost(post,function( error, posts ) {
//     console.log(posts);
// });
var posts = [];
// client.getPosts({'type':'encyclopedia'}, function(error, data) {
//     //console.log(data);
//     data.reduce(function(posts, cur){
//         posts.push({'id': cur.id, 'title': cur.title});
//         return posts;
//     }, posts)

//     console.log(posts);
// });

for (var i =0; i < 500; i++) {
    client.getPost(299, function(error, data) {
        console.log(data);    
    });
}


app.get('/', function(req, res) {
    res.render('form');         
});

app.post('/', jsonParser, function(req, res){
    console.log(req.body);
    console.log(req.add);
}) 

var server = app.listen(process.env.PORT || 3002);