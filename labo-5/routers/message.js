const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');

router.get('/messages', messageController.get);
router.post('/messages', messageController.post);

module.exports = router;