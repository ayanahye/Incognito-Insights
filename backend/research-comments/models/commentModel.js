const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    maxlength: [20, 'Username cannot be more than 500 characters long'],
    trim: true,
  },
  comment: {
    type: String,
    required: [true, 'Comment is required'],
    minlength: [1, 'Comment must be at least 5 characters long'],
    maxlength: [500, 'Reply cannot be more than 500 characters long'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  replies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reply',
  }],
});

module.exports = mongoose.model('Comment', commentSchema);
