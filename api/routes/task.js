var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// add a new task
router.post('/add', function(req, res, next) {

});

// get all tasks by priority
router.get('/priority/:priority', function(req, res, next) {

});

// get all tasks
router.get('/getAllTask', function(req, res, next) {

});

// update a task status by id 
module.exports = router;