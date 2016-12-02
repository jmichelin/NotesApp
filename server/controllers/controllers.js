var db = require('../../db');
var models = require('../models/models.js');

module.exports = {
  notes : {
    get: function(req, res) {
      models.notes.get(1, function(err, results) {
        console.log('GET NOTES CONTROLLER RESULTS: ', results);
        res.json(results);
      })
    },
    post: function(req, res) {
      var params = [req.body.name, userid, req.body.data];
      models.notes.post(params, function(err, results) {
        if(err) { console.log("NOTE POSTING ERROR: ", err) }
          res.sendStatus(201);
      })
    }
  }
};
