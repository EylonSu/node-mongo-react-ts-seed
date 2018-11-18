"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler_1 = __importDefault(require("errorhandler"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const lusca_1 = __importDefault(require("lusca"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const MONGODB_URI = "";
const MongoStore = connect_mongo_1.default(express_session_1.default);
// Create Express server
const app = express_1.default();
// Connect to MongoDB
const mongoUrl = MONGODB_URI;
mongoose_1.default
    .connect(mongoUrl, { useMongoClient: true })
    .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
})
    .catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});
// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_session_1.default({
    resave: true,
    saveUninitialized: true,
    secret: "SESSION_SECRET",
    store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
    })
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(lusca_1.default.xframe("SAMEORIGIN"));
app.use(lusca_1.default.xssProtection(true));
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
app.use(express_1.default.static(path_1.default.join(__dirname, "public"), { maxAge: 31557600000 }));
if (process.env.NODE_ENV === "development") {
    app.use(errorhandler_1.default());
}
const server = app.listen(app.get("port"), () => {
    console.log(`App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
});
exports.default = app;
//# sourceMappingURL=server.js.map