import { Request, Response, Express } from "express-serve-static-core";

const routes = (app: Express) => {
  app.use(`/customer`, async (req: Request, res: Response) => {
    res.send("customer!");
  });
};

export default routes;
