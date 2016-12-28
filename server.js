var express = require('express');
var mongoose = require('mongoose');
var app = express();
var path = require('path');
var jobModel = require('./models/job');
var jobsData = require('./jobs-data');



jobsData.connectDB('mongodb://vishnu:vishnu@ds031087.mlab.com:31087/mlearning').then(function () {
    console.log("Connected to MongoLab");
    jobModel.seedJobs();
});

app.use(express.static(path.join(__dirname + '/public')));
app.get('/api/jobs', function (req, res) {
    jobsData.findJobs({}).then(function(results) {
        res.send(results);
    });
});
app.get('/', function (req, res) {
    res.send({name: "Vishnu"});
})
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Application Listening on ' + port);
});