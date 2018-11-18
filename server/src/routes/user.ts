import { Request, Response, Express } from "express-serve-static-core";

const routes = (app: Express) => {
  app.use(`/user`, async (req: Request, res: Response) => {
    res.send("user!");
    console.log("user api successfully created");
  });
};

export default routes;
