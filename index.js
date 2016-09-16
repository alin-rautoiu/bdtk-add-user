var express = require('express');
var wordpress = require('wordpress');
var jade = require('jade');
var bodyParser = require('body-parser')

var client = wordpress.createClient({
    url: "bdtk.ro",
    username: "alin",
    password: "6bsY2(WGBQGOfl@BeUn1LWFb"
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
app.use(bodyParser.urlencoded({ extended: false }))

// client.newPost(post,function( error, posts ) {
//     console.log(posts);
// });

var posts = [{"id": "1", "title": "Test"}, {"id": "2", "title": "Test 2"}];

// function getPost(i) {
//     client.getPost(i, function(error, data) {    
//         if (data != undefined) {
//             console.log("title: " + data.title);
//             console.log("type: " + data.type);
//             console.log();
//         }    
//         getPost(i + 1);
//     });
// }

app.get('/', function(req, res) {
    res.locals.posts = posts;
    res.render('form');         
});

app.post('/', function(req, res){
    console.log(req.body);
}) 

var server = app.listen(process.env.PORT || 3002);