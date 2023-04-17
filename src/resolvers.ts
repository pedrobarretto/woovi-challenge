import { User, UserModel } from './models/user';
import { v4 as uuid } from 'uuid';

const resolvers = {
  Query: {
    getUser: async (_, { userId }: { userId: string }) => {
      const user = await UserModel.findOne({ userId });
      return user;
    },
    getUsers: async () => {
      const users = await UserModel.find({});
      return users;
    }
  },
  Mutation: {
    createUser: async (_, { user }: { user: { name: string, email: string } }) => {
      const id = uuid();
      const createdUser = await UserModel.create({ ...user, userId: id });
      return createdUser;
    },
    updateUser: async (_, { userId, input }: { userId: string; input: { name: string, email: string } }) => {
      const user = await UserModel.findOneAndUpdate({ userId }, input, {
        new: true,
      }).exec();
      return user;
    },
    deleteUser: async (_, { userId }: { userId: string }) => {
      const user = await UserModel.findOneAndDelete({ userId }).exec();
      return user;
    }
  },
};

export { resolvers };
