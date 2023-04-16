import { User, UserModel } from './models/user';
import { v4 as uuid } from 'uuid';

const resolvers = {
  Query: {
    getUser: async ({ id }: { id: string }) => {
      const user = await UserModel.findById(id).exec();
      return user;
    },
    getUsers: async () => {
      const users = await UserModel.find({});
      return users;
    },
  },
  Mutation: {
    createUser: async (_, { user }: { user: { name: string, email: string } }) => {
      const id = uuid();
      const createdUser = await UserModel.create({ ...user, id });
      return createdUser;
    },
    updateUser: async ({ id, input }: { id: string; input: User }) => {
      const user = await UserModel.findByIdAndUpdate(id, input, {
        new: true,
      }).exec();
      return user;
    },
    deleteUser: async ({ id }: { id: string }) => {
      const user = await UserModel.findByIdAndDelete(id).exec();
      return user;
    },
  },
};

export { resolvers };
