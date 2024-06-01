const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: String,
  comment: String,
  date: { type: Date, default: Date.now },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Comment', commentSchema);
