import express from "express";
import dotenv from "dotenv";
import  LoginRoute  from "./routes/login.routes.js";
import  passport from "passport";
import "./middleware/google.js";


const app = express();

//SETTINGS
dotenv.config();

//MIDDLEWARES
app.use(express.json());
app.use(passport.initialize());

app.use("/auth",passport.authenticate('auth-google',{
    scope:["https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile"],
    session:false

}),LoginRoute);

app.set("port", process.env.PORT || 6999);

app.get("/",(req,res)=>{
    res.send("Hi Welcome")
});



export default app;
