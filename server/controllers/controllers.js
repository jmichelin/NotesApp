var db = require('../../db');
var models = require('../models/models.js');

module.exports = {
  notes : {
    getAll: function(req, res) {
      models.notes.getAll(/*UserID->*/[1], function(err, results) {
        console.log('GET NOTES: CONTROLLER RESULTS: ', results);
        res.send(results);
      });
    },
    getPublic:function(req, res) {
      models.notes.getAll(/*UserID->*/[1], function(err, results) {
        console.log('GET NOTES: CONTROLLER RESULTS: ', results);
        res.send(results);
      }); 
    },
    post: function(req, res) {
      var params = [req.body.noteName, 1/*req.userid*/, peq.body.isPrivate, req.body.noteData];
      models.notes.post(params, function(err, results) {
        if(err) { console.log("NOTE POSTING ERROR: ", err); }
          res.sendStatus(201);
      });
    },
    delete: function(req, res) {
      var noteName = req.noteName;
      models.notes.delete(noteName, function(err, results) {
        if(err) { console.log('ERROR DELETING NOTE: ', err); }
        res.send(results);
      });
    },
    edit: function(req, res) {
      var params = [req.data, req.noteId];
      models.notes.edit(params, function(err, results) {
        if(err) { console.log('ERROR EDITING NOTE: ', err); }
        res.send(results);
      });
    }
  }
};
