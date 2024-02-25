const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv").config();

const app = express();

const gqlSchema = require("./graphql/schema/index")
const gqlResolvers = require("./graphql/resolvers/index")

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
    schema: gqlSchema,
    rootValue: gqlResolvers,
    graphiql: true,
  })
);

module.exports = app;
