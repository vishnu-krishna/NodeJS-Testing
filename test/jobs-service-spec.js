var expect = require('chai').expect;
var express = require('express');
var app = express();
var request = require('supertest');
var Promise = require('bluebird');
var dataSavedJob;
var db = {
    findJobs:function(){
        return new Promise(function(resolve,reject){
            resolve(["hi"]);
        })
    },
    saveJob: function (job) {
        dataSavedJob = job;
    }
}
var jobsService = require('../jobs-service')(db,app);

// describe("get Jobs",function(){
//     it("get should give me list of jobs",function(done){
//         request(app).get('/api/jobs')
//         .expect('Content-Type',/json/)
//         .end(function(err,res){
//             expect(res.body).to.be.a("Array");
//             done();
//         });
//     })
// })


describe("Save Jobs", function () {
    it("should validate the title is greater than 4 charecters");
    it("should validate the title is less than 40 charecters");
    it("should validate the description is less than 40 charecters");
    it("should validate the description is less than 250 charecters");


    var newJob = {
        title: 'Sales Person',
        description: 'A Custom sales Person'
    };

    it("should pass the job to the database save", function (done) {
        request(app).post('/api/jobs').send(newJob).end(function (err, res) {
            expect(dataSavedJob).to.deep.equal(newJob);
            done();
        })

    });
    it("should return a status of 200 to the front end if the database is saved");
    it("should return a job with an id");
    it("should return an error if the database failed");
});