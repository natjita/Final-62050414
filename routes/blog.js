var express = require('express');
var router = express.Router();
const blogControler = require('../controllers/blogController')

router.get('/', blogControler.index);
router.get('/id', blogControler.show);
router.post('/', blogControler.add);
router.put('/', blogControler.update);
router.delete('/:id', blogControler.remove);

module.exports = router;