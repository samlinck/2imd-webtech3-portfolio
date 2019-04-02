const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');

router.get('/messages', messageController.get);
router.post('/messages', messageController.post);
router.get('/messages/:id', messageController.get);

module.exports = router;