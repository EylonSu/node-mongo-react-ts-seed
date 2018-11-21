import { Request, Response, Express } from "express-serve-static-core";
import UserModel from "../models/User";

const routes = (app: Express) => {
  app.use(`/user`, async (req: Request, res: Response) => {
    try {
      const newUser = new UserModel({
        email: "eylon@ongotpointercapture.ccc",
        password: "12345"
      });

      await newUser.save();

      res.json(newUser);
    } catch (err) {
      console.log("err", err);
    }
  });
};

export default routes;
