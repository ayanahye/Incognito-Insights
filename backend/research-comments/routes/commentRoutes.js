const express = require('express');
const { getComments, createComment, getCommentById, getRepliesForComment } = require('../controllers/commentController');
const router = express.Router();

router.get('/comments', getComments);
router.post('/comments', createComment);
router.get('/comment/:id', getCommentById); 
router.get('/comment/:id/replies', getRepliesForComment);

module.exports = router;
