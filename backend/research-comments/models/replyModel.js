const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    username: String,
    comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    reply: String,
    date: { type: Date, default: Date.now }
  });
  
module.exports = mongoose.model('Reply', replySchema);