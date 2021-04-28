import { IResolvers } from 'graphql-tools';
import User from '../db/models/UserModel'

const resolverMap: IResolvers = {
  Query: {
    helloWorldUsers(_: void, args: void): string {
      return `👋 Hello User! 👋`;
    }
  },
  Mutation:{
    async createUser(_: void, { input }): Promise<any>  {
      
      const user = new User()
      user.name = input.name
      user.lastName = input.lastName
      user.companyId = input.companyId || "1"
      user.email = input.email

      await user.save()

      return user
    }
  }
};

export default resolverMap;