const Comment = require('../models/commentModel');
const Reply = require('../models/replyModel');

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id).populate('replies');
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRepliesForComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const comment = await Comment.findById(commentId).populate('replies');
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(comment.replies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createReply = async (req, res) => {
    try {
        const commentId = req.params.id;
        const reply = new Reply(req.body);
        await reply.save();

        const comment = await Comment.findById(commentId);
        comment.replies.push(reply);
        await comment.save();

        res.status(201).json(reply);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getComments, createComment, getCommentById, getRepliesForComment, createReply };
