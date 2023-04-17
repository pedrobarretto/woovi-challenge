import { gql } from 'apollo-server-express';

const typeDefs = gql`
  input UserInput {
    name: String!
    email: String!
  }

  type User {
    userId: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser(userId: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(user: UserInput!): User
    updateUser(userId: ID!, input: UserInput!): User
    deleteUser(userId: ID!): User
  }
`;

export { typeDefs };