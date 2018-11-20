import { prop, Typegoose, ModelType, InstanceType } from "typegoose";
import mongoose from "mongoose";

class User extends Typegoose {
  @prop()
  email: string;

  @prop()
  password: string;
}

const UserModel = new User().getModelForClass(User, {
  existingMongoose: mongoose
});

export default UserModel;
