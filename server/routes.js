var router = require('express').Router();
var controllers = require('./controllers/controllers.js');
var path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

router.get('/api/notes', controllers.notes.getAll);
router.post('/api/createNote', controllers.notes.post);
router.post('/api/searchNoteByUser', controllers.notes.getPublic);
router.post('/api/edit', controllers.notes.edit);

module.exports = router;