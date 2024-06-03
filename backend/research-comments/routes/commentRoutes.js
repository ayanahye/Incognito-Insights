const express = require('express');
const { getComments, createComment, getCommentById, getRepliesForComment, createReply } = require('../controllers/commentController');
const router = express.Router();

router.get('/comments', getComments);
router.post('/comments', createComment);
router.get('/comment/:id', getCommentById);
router.get('/comment/:id/replies', getRepliesForComment);
router.post('/comment/:id/replies', createReply); 

module.exports = router;
