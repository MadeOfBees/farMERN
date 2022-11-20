const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    posts: [Post]!
    post(postID: ID!): Post
  }

  type Mutation {
    addPost(postText: String!, postAuthor: String!): Post
    addComment(postID: ID!, commentText: String!): Post
    removePost(postID: ID!): Post
    removeComment(postID: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
