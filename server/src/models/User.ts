import { prop, Typegoose, ModelType, InstanceType } from "typegoose";
import Utils from "../Utils";

class User extends Typegoose {
  @prop()
  email: string;

  @prop()
  password: string;
}

const UserModel = Utils.MongoModelFactory(User);

export default UserModel;
