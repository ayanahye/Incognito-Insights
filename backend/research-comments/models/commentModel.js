const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: String,
  comment: String,
  date: { type: Date, default: Date.now },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
});

module.exports = mongoose.model('Comment', commentSchema);
