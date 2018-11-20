import errorHandler from "errorhandler";
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";
import Bluebird from "bluebird";
import clc from "cli-color";
import routes from "./routes/routes";

// Create Express server
const app = express();

// Connect to MongoDB
(<any>mongoose).Promise = Bluebird;
const mongoUrl = process.env.DB_CONN_STRING;
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log(clc.green(`mongo is connected successfully`));
  })
  .catch(err => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + err
    );
    process.exit();
  });

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "SESSION_SECRET"
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// Controllers (route handlers)
routes.setRoutes(app);

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}

app.listen(app.get("port"), () => {
  console.log(
    clc.white.bgGreen(
      `App is running at http://localhost:${app.get("port")} in ${app.get(
        "env"
      )} mode`
    )
  );
});
