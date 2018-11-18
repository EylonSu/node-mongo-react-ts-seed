import errorHandler from "errorhandler";
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import mongo from "connect-mongo";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";

const MONGODB_URI = "";
const MongoStore = mongo(session);

// Controllers (route handlers)
import * as userApi from "./routes/user";

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
mongoose
  .connect(
    mongoUrl,
    { useMongoClient: true }
  )
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  })
  .catch(err => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + err
    );
    // process.exit();
  });

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "SESSION_SECRET",
    store: new MongoStore({
      url: mongoUrl,
      autoReconnect: true
    })
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}
const server = app.listen(app.get("port"), () => {
  console.log(
    `App is running at http://localhost:${app.get("port")} in ${app.get(
      "env"
    )} mode`
  );
});

export default app;
