var express = require('express');
var app = express();
var path = require ('path');

//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
//app.set('views', __dirname);
//app.set('view engine', 'jade');


//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname + '/public')));
//app.get('*',function(req,res){
//    res.send('index.html');
//})
app.listen(3000,function(){
    console.log("Application Started");
});