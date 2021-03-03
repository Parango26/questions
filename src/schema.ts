import 'graphql-import-node';
import * as typeDefs from './schema/schema.graphql';
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';
import * as typeDefsUsers from './users/userSchema.graphql';
import resolversUser from './users/UserResolver';



const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: typeDefsUsers,
  resolvers: resolversUser,
});

export default mergeSchemas({schemas:[schema, userSchema]});