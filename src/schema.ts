import { gql } from 'apollo-server-express';

const typeDefs = gql`
  input UserInput {
    name: String!
    email: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(user: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): User
  }
`;

export { typeDefs };