var mongoose = require('mongoose');

var Promise =require('bluebird');

var JobSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
}, {collection: 'NodeJSTesting'});
var Job = mongoose.model('Job', JobSchema);


var jobs =[{
    title: 'Sales Person', description: 'A Custom sales Person'
},{title: 'Accountant', description: 'A Custom Accountant'},
    {
        title: 'Software Engineer', description: 'A custom Software Engineer'
    }

]
function findJobs(query){
    console.log("inside job query");
    return Promise.cast(mongoose.model('Job').find(query).exec());

}
var createJob = Promise.promisify(Job.create,Job);

exports.seedJobs = function () {
        return findJobs({}).then(function (collection) {
            if (collection.length === 0) {
               return Promise.map(jobs, function(job){
                   return createJob(job);
               });
            }
        });
}
