import express from "express";
import dotenv from "dotenv";
import  LoginRoute  from "./routes/login.routes.js";
import  passport from "passport";
import "./middleware/google.js";
import ejs  from "ejs";
import path from "path";
import * as url from "url";
import routeHome from "./routes/backoffice.routes.js";
import route from "./routes/home.routes.js";


const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//SETTINGS
dotenv.config();

//MIDDLEWARES
app.use(express.json());
app.use(passport.initialize());
app.use(express.static(__dirname + '../public'))
//asignando plantilla ejs
app.set("view engine", "ejs")
//vistas
app.set("views" , path.join(__dirname, "views"));

app.use("/auth",passport.authenticate('auth-google',{
    scope:["https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile"],
    session:false

}),LoginRoute);
app.use("/", routeHome);
app.use("/", route)

app.set("port", process.env.PORT || 6999);

// app.get("/",(req,res)=>{
//     res.send("Hi Welcome")
// });



export default app;
