const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');

router.get('/messages', messageController.get);
router.get('/messages/:id', messageController.getOne);
// router.get('/messages?user=bojack', messageController.forUser);
router.post('/messages', messageController.post);
router.put('/messages/:id', messageController.put);
router.delete('/messages/:id', messageController.del);


module.exports = router;