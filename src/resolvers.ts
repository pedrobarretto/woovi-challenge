import User from './models/user';

export const resolvers = {
  Query: {
    async users() {
      const users = await User.findAll();
      return users;
    },
    async user(parent: any, { id }: any) {
      const user = await User.findByPk(id);
      return user;
    },
  },
  Mutation: {
    async createUser(parent: any, { name, email }: any) {
      const user = await User.create({ name, email });
      return user;
    },
    async updateUser(parent: any, { id, name, email }: any) {
      const user = await User.findByPk(id);
      await user.update({ name, email });
      return user;
    },
    async deleteUser(parent: any, { id }: any) {
      const user = await User.findByPk(id);
      await user.destroy();
      return true;
    },
  },
};
