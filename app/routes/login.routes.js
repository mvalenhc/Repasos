import { Router } from "express";

const LoginRoute = Router();


LoginRoute.get("/google", (req,res)=>{
   res.send(req.user);
});


 export default LoginRoute;