const { Schema, model } = require('mongoose');
const dateMaykr = require('../helpers/dateMaykr');

const postSchema = new Schema({
  post: {
    type: String,
    required: 'Post',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateMaykr(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateMaykr(timestamp),
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;
