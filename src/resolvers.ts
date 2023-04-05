import { User, UserModel } from './models/user';

const resolvers = {
  Query: {
    getUser: async ({ id }: { id: string }) => {
      const user = await UserModel.findById(id).exec();
      return user;
    },
    getUsers: async () => {
      const users = await UserModel.find().exec();
      return users;
    },
  },
  Mutation: {
    createUser: async ({ email, name }: User) => {
      const user = await UserModel.create({ email, name });
      return user;
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
