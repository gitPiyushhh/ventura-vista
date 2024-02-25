const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const dotenv = require("dotenv").config();

const app = express();

const Post = require("./models/post");
const User = require("./models/user");

/* 
  Middlewares
*/
app.use(bodyParser.json());

/* 
  Route mounting
*/
app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(`
        type Post {
            _id: ID!
            title: String!
            description: String!
            domain: String
            createdAt: String!
        }

        type User {
            _id: ID!
            email: String!
            password: String
        }

        input PostInput {
            title: String!
            description: String!
            domain: String!
            createdAt: String!

        }

        input UserInput {
            email: String!
            password: String!
        }

        type RootQuery {
            posts: [Post!]!
            users: [User!]!
        }

        type RootMutation {
            createPost(post: PostInput!): Post
            createUser(user: UserInput!): User
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),

    rootValue: {
      posts: async () => {
        return await Post.find();
      },

      createPost: async (args) => {
        const newPost = await Post.create({
          title: args.post.title,
          description: args.post.description,
          domain: args.post.domain,
          date: new Date(args.post.date),
        });

        return newPost;
      },

      users: async () => {
        return await User.find();
      },

      createUser: async (args) => {
        const hashedPassword = await bcrypt.hash(args.user.password, 12);

        const newUser = await User.create({
          email: args.user.email,
          password: hashedPassword,
        });

        return newUser;
      },
    },

    graphiql: true,
  })
);

module.exports = app;
