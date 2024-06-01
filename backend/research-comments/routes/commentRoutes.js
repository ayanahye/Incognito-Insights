const express = require('express');
const { getComments, createComment, getCommentById } = require('../controllers/commentController');
const router = express.Router();

router.get('/comments', getComments);
router.post('/comments', createComment);
router.get('/comment/:id', getCommentById); 

module.exports = router;
