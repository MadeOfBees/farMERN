const { Post } = require('../models');

const resolvers = {
  Query: {
    posts: async () => {
      return Post.find();
    },

    post: async (parent, { postID }) => {
      return Post.findOne({ _id: postID });
    },
  },

  Mutation: {
    addPost: async (parent, { postText, postAuthor }) => {
      return Post.create({ postText, postAuthor });
    },
    addComment: async (parent, { postID, commentText }) => {
      return Post.findOneAndUpdate(
        { _id: postID },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePost: async (parent, { postID }) => {
      return Post.findOneAndDelete({ _id: postID });
    },
    removeComment: async (parent, { postID, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: postID },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
