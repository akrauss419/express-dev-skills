var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');


// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);

module.exports = router;
