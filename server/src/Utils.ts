import mongoose from "mongoose";

class Utils {
  static MongoModelFactory(_class: any) {
    return new _class().getModelForClass(_class, {
      existingMongoose: mongoose
    });
  }
}

export default Utils;
