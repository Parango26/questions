import 'graphql-import-node';
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import * as typeDefsUsers from './users/userSchema.graphql';
import resolversUser from './users/UserResolver';



const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: typeDefsUsers,
  resolvers: resolversUser,
});

export default mergeSchemas({schemas:[userSchema]});