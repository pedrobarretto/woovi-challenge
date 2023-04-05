import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { connect } from './mongo';
import { typeDefs } from './schema';

async function startApolloServer() {

  connect();

  // create the Apollo Server instance
  const server = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
  });

  const app = express();

  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
