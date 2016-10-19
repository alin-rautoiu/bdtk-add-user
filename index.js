var express = require('express');
var wordpress = require('wordpress');
var jade = require('jade');
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();
app.set('views', './views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }))

var posts = [{
"title": "Abația",
"type": "encyclopedia",
"id": "301",
}, 
{
"title": "Abația #1",
"type": "encyclopedia",
"id": "302",
}, 
{
"title": "Chelaru, Răzvan",
"type": "encyclopedia",
"id": "303",
}, 
{
"title": "Pîrligras, Viorel",
"type": "encyclopedia",
"id": "312",
}, 
{
"title": "Mirescu, Marian",
"type": "encyclopedia",
"id": "313",
}, 
{
"title": "AH, BD",
"type": "encyclopedia",
"id": "314",
}, 
{
"title": "Sanki",
"type": "encyclopedia",
"id": "315",
}, 
{
"title": "HAC!BD",
"type": "encyclopedia",
"id": "317",
}, 
{
"title": "HAC",
"type": "encyclopedia",
"id": "318",
}, 
{
"title": "Jumătatea Plină",
"type": "encyclopedia",
"id": "319",
}, 
{
"title": "Adenium",
"type": "encyclopedia",
"id": "320",
}, 
{
"title": "Lex Comics",
"type": "encyclopedia",
"id": "321",
}, 
{
"title": "EAT Comics",
"type": "encyclopedia",
"id": "322",
}, 
{
"title": "Mandragora",
"type": "encyclopedia",
"id": "323",
}, 
{
"title": "Vellant",
"type": "encyclopedia",
"id": "324",
}, 
{
"title": "Casa Radio",
"type": "encyclopedia",
"id": "325",
}, 
{
"title": "Obert, Robert",
"type": "encyclopedia",
"id": "328",
}, 
{
"title": "Ciubotariu, Alexandru",
"type": "encyclopedia",
"id": "329",
}, 
{
"title": "Ungureanu, Octav",
"type": "encyclopedia",
"id": "330",
}, 
{
"title": "Moldovan, Andrei",
"type": "encyclopedia",
"id": "331",
}, 
{
"title": "Chelaru, Bogdan",
"type": "encyclopedia",
"id": "332",
}, 
{
"title": "Duran, Daniel Rosa",
"type": "encyclopedia",
"id": "333",
}, 
{
"title": "Dârstar, Cristian",
"type": "encyclopedia",
"id": "334",
}, 
{
"title": "Surducan, Ileana",
"type": "encyclopedia",
"id": "335",
}, 
{
"title": "Surducan, Maria",
"type": "encyclopedia",
"id": "336",
}, 
{
"title": "Benczédi, Anna",
"type": "encyclopedia",
"id": "337",
}, 
{
"title": "Manu, Puiu",
"type": "encyclopedia",
"id": "338",
}, 
{
"title": "Rusu, Gabriel",
"type": "encyclopedia",
"id": "339",
}, 
{
"title": "Drujiniu, Victor",
"type": "encyclopedia",
"id": "340",
}, 
{
"title": "Ianoș, Dan",
"type": "encyclopedia",
"id": "341",
}, 
{
"title": "Barbu, Adrian",
"type": "encyclopedia",
"id": "342",
}, 
{
"title": "Ivan, Alin",
"type": "encyclopedia",
"id": "343",
}, 
{
"title": "Ciomu, Cristian",
"type": "encyclopedia",
"id": "344",
}, 
{
"title": "Păcurariu, Cristian",
"type": "encyclopedia",
"id": "345",
}, 
{
"title": "Arapu, Mircea",
"type": "encyclopedia",
"id": "346",
}, 
{
"title": "Dragomir, Raluca",
"type": "encyclopedia",
"id": "347",
}, 
{
"title": "Florea, Sandu",
"type": "encyclopedia",
"id": "348",
}, 
{
"title": "Tănase, Valentin",
"type": "encyclopedia",
"id": "349",
}, 
{
"title": "Andreescu, Șerban",
"type": "encyclopedia",
"id": "350",
}, 
{
"title": "Anghel, Sorin",
"type": "encyclopedia",
"id": "351",
}, 
{
"title": "Loghin, Cristian",
"type": "encyclopedia",
"id": "352",
}, 
{
"title": "Drob, Timotei",
"type": "encyclopedia",
"id": "353",
}, 
{
"title": "Sava, Valentin",
"type": "encyclopedia",
"id": "354",
}, 
{
"title": "Popescu, Ionuț",
"type": "encyclopedia",
"id": "355",
}, 
{
"title": "Toma, Alexandru",
"type": "encyclopedia",
"id": "356",
}, 
{
"title": "Talambă, Alexandru",
"type": "encyclopedia",
"id": "357",
}, 
{
"title": "Trifan, Victor",
"type": "encyclopedia",
"id": "358",
}, 
{
"title": "Coman, Marian",
"type": "encyclopedia",
"id": "359",
}, 
{
"title": "Popa, Alexandru",
"type": "encyclopedia",
"id": "360",
}, 
{
"title": "Revista Comics",
"type": "encyclopedia",
"id": "362",
}, 
{
"title": "Următorul cadru",
"type": "encyclopedia",
"id": "363",
}, 
{
"title": "Enache, Manuel",
"type": "encyclopedia",
"id": "365",
}, 
{
"title": "BDC",
"type": "encyclopedia",
"id": "366",
},  
{
"title": "Leoni, Emanuele",
"type": "encyclopedia",
"id": "390",
},
{
"title": "Test Encyclopedia",
"type": "encyclopedia",
"id": "397",
},
{
"title": "Oana Dobre",
"type": "encyclopedia",
"id": "513",
}];

function getPost(i) {    
    if (i >= 399) {
        console.log("end");
        return;
    }
    client.getPost(i, function(error, data) {          
        if (data != undefined && data.type == "encyclopedia") {
            console.log("{")
            console.log("\"title\": " + "\"" + data.title + "\",");
            console.log("\"type\": \"" + data.type + "\",");
            console.log("\"id\": \"" + data.id + "\",");
            console.log("}, ");
        }    
        getPost(i + 1);
    });
}

var newPost = `<div class="author-info">\r\n<img class="alignnone size-medium wp-image-395 floating-img" src="http://bdtk.ro/wp-content/uploads/2016/09/razvan-chelaru-300x300.jpg" alt="razvan-chelaru" />
<table class="bdtk-table">\r\n<tbody>\r\n<tr>\r\n<td class="key">Nume:</td>\r\n<td class="value">{nume}</td>\r\n</tr>\r\n<tr><td class="key">Anul nașterii:</td>\r\n<td class="value">{an_nastere}</td>\r\n</tr>\r\n<tr>\r\n<td class="key">Localitate:</td>\r\n<td class="value">{localitate}</td>\r\n</tr>\r\n<tr>\r\n<td class="key">Roluri:</td>\r\n<td class="value">{roluri}</td>\r\n</tr>\r\n<tr>\r\n<td class="key">Cunoscut pentru:</td>\r\n<td class="value">{cunoscut_pentru}</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</div>\r\n[tabby title="Biografie"]\r\n\r\n{biografie}\r\n\r\n[tabby title="Bibliografie"]\r\n\r\n{bibliografie}\r\n\r\n[tabby title="Mostre"]\r\n[tabbyending]`

app.get('/', function(req, res) {
    res.locals.posts = posts;
    res.render('form');         
});

app.post('/', function(req, res){
    var body = req.body;
    newPost = newPost
        .replace("{nume}", body.nume)
        .replace("{an_nastere}", body.an)
        .replace("{localitate}", body.localitate)
        .replace("{roluri}", body.roluri)
        .replace("{cunoscut_pentru}", body.cunoscut)
        .replace("{biografie}", body.biografie)
        .replace("{bibliografie}", body.bibliografie);

        var client = wordpress.createClient({
            url: "bdtk.ro",
            username: body.user,
            password: body.pass
        });

        client.editPost(body.post, {"content": newPost}, function (error) {
            if (error != null) {
                res.send(error);
            } else {
                res.redirect('/');
            }
        })
}) 

var server = app.listen(process.env.PORT || 3002);