const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

// If the '/endpoint' is called, it uses the equivalent controller function
router.get('/', controller.getAll);

// The '/:id' is a parameter the allows the api to use it as params
router.get('/:id', controller.get);

router.post('/', controller.add);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;