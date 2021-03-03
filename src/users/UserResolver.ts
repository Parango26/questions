import { IResolvers } from 'graphql-tools';
const resolverMap: IResolvers = {
  Query: {
    helloWorldUsers(_: void, args: void): string {
      throw 'error 3'
      return `👋 Hello User! 👋`;
    },
  },
};
export default resolverMap;