const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Post {
    _id: ID!
    title: String!
    description: String!
    domain: String
    createdAt: String!
    author: User!
}

type User {
    _id: ID!
    email: String!
    password: String
    posts: [Post]
    coverLetter: ID
    gmailMessage: ID
    messageToRecruiter: ID
}

input PostInput {
    title: String!
    description: String!
    domain: String!
    createdAt: String!
    author: String!
}

input UserInput {
    email: String!
    password: String!
}

type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

type RootQuery {
    posts: [Post!]!
    users: [User!]!
    user(userId: String): User
    login(email: String, password: String): AuthData!
}

type RootMutation {
    createPost(post: PostInput!): Post
    createUser(user: UserInput!): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
