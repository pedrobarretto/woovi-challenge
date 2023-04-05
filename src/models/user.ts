import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true, unique: true })
  public email!: string;

  @prop({ required: true, unique: true })
  public id!: string;
}

const UserModel = getModelForClass(User);

export { User, UserModel };
