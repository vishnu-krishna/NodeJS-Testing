var bodyParser = require('body-parser');


module.exports = function (db, app) {

    app.use(bodyParser.json());
    // app.get('/api/jobs', function (req, res) {
    //     jobsData.findJobs({}).then(function (results) {
    //         res.send(results);
    //     });
    // });

    app.post('/api/jobs', function (req, res) {
        db.saveJob(req.body);
        res.end();
    });



}