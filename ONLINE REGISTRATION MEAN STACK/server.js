var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('registration',['registration']);

var bodyParser = require('body-parser');


app.use(express.static(__dirname = "./public"));

app.use(bodyParser.json());

app.get('/registration',function(req,res){
    
    console.log("server recived a get request");
    db.registration.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    });
   /* person1 = {
        name: "Tim",
        email: "tim@gmail.com",
        number: "(111) 111-1111"
    };
    person2 = {
        name: "Emily",
        email: "emily@gmail.com",
        number: "(222) 222-2222"
    };
    person3 = {
        name: "John",
        email: "john@gmail.com",
        number: "(333) 333-3333"
    };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);*/
});

app.post("/registration",function(req,res){
    console.log("server recicved a post request");
    console.log(req.body);
    db.registration.insert(req.body,function(err,doc){
        res.json(doc);
    });
});

app.listen(3000);
console.log("Server running on port 3000");

