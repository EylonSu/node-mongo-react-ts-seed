import { Express } from "express-serve-static-core";
import path from "path";
import fs from "fs";

const routes = {
  setRoutes: (app: Express) => {
    fs.readdirSync(__dirname).forEach(async (file: string) => {
      if (file === "routes.ts") return;
      const filePath = path.join(__dirname, file);
      const routes = await import(filePath);
      routes.default(app);
    });
  }
};

export default routes;
