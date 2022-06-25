import { hasSubscribers } from 'diagnostics_channel';
import express from 'express';
import mongoose from  'mongoose';
import path from 'path';
import User from './models/models';

var cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI;
const passport = require ("passport");
const Strategy = require ("passport-local").strategy;
const session = require ("express-session");
const flash = require ("connect-flash");
const mainTs = require ('./public/main');


app.use(logger('dev'));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser())
app.use(session({
    secret:'session secret',
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
express.handleRegister(path.join(__dirname, ""));
app.use((req,res,next)=>{
    res.locals.loggedIn = req.isAuthenticated();
    next();
});

mongoose.connect(mongodb_uri).then(res =>{
    console.log("connected to DB");
}).catch(err=>{
    console.log('at mongoose.connect:')
    console.error(err.message)
});

passport.use(new Strategy(
    (usernameDB,password,done)=>{
        app.locals.UserSchema.findone({usernameDB},(error,User) => {
            if(error){
                return done (error)
            }
            if(!User){
                return done(null,false);
            }
            if(password != mainTs.hashPassword(password)){
                return done (null,false);
            }
            return done(null,User);
        });
    } 
))

passport.serializeUser((UserSchema,done)=>{
    done(null, UserSchema._id);
});

passport.deserializeUser((id,done)=>{
    done(null,{id});
});

import usersRoute from "./routes/usersRoute";
app.use("/users", usersRoute);


app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
  });

function logger(arg0: string): any {
    throw new Error('Function not implemented.');
}
  