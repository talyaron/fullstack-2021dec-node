"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
var cookieParser = require('cookie-parser');
const app = express_1.default();
const port = process.env.PORT || 3000;
require('dotenv').config();
const mongodb_uri = process.env.MONGODB_URI;
const passport = require("passport");
// const Strategy = require ("passport-local").strategy;
// const session = require ("express-session");
// const flash = require ("connect-flash");
// const mainTs = require ('./public/main');
// app.use(logger('dev'));
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
// app.use(session({
//     secret:'session secret',
//     resave: false,
//     saveUninitialized: false,
// }))
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
// express.handleRegister(path.join(__dirname, ""));
// app.use((req,res,next)=>{
//     res.locals.loggedIn = req.isAuthenticated();
//     next();
// });
mongoose_1.default.connect(mongodb_uri).then(res => {
    console.log("connected to DB");
}).catch(err => {
    console.log('at mongoose.connect:');
    console.error(err.message);
});
// passport.use(new Strategy(
//     (usernameDB,password,done)=>{
//         app.locals.UserSchema.findone({usernameDB},(error,User) => {
//             if(error){
//                 return done (error)
//             }
//             if(!User){
//                 return done(null,false);
//             }
//             if(password != mainTs.hashPassword(password)){
//                 return done (null,false);
//             }
//             return done(null,User);
//         });
//     } 
// ))
// passport.serializeUser((UserSchema,done)=>{
//     done(null, UserSchema._id);
// });
// passport.deserializeUser((id,done)=>{
//     done(null,{id});
// });
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
app.use("/users", usersRoute_1.default);
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
});
// function logger(arg0: string): any {
//     throw new Error('Function not implemented.');
// }
