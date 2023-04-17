import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';

import { connect } from './mongo';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import { printSchema } from 'graphql';
import fs from 'fs';

async function startApolloServer() {
  connect();

  // create the Apollo Server instance
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  const server = new ApolloServer({ schema });

  const schemaString = printSchema(schema);

  fs.writeFile('schema.graphql', schemaString, (err) => {
    if (err) throw err;
    console.log('Schema file created!');
  });

  const app = express();

  await server.start();

  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    );
  });
}

startApolloServer();
