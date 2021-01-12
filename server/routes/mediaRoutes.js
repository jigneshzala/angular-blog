const express = require('express');
const router = express.Router();
const mediaController = require('./../controllers/mediaController');

router.get('/', mediaController.getAllImages);
router.delete('/:imageId', mediaController.deleteById);
module.exports = router;
