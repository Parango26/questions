import express from 'express';
import { config } from 'dotenv'
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const app = express();
config()

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen(
  { port: process.env.PORT },
  (): void => console.log(`\n🚀  GraphQL is now running on http://localhost:${process.env.PORT}/graphql`));