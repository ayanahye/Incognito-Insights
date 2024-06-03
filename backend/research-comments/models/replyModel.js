const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    maxlength: [500, 'Reply cannot be more than 500 characters long'],
    trim: true,
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  },
  reply: {
    type: String,
    required: [true, 'Reply is required'],
    minlength: [1, 'Reply must be at least 5 characters long'],
    maxlength: [500, 'Reply cannot be more than 500 characters long'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
  
module.exports = mongoose.model('Reply', replySchema);