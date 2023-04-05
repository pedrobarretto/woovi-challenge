import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): User
  }

  input UserInput {
    name: String!
    email: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

export { typeDefs };