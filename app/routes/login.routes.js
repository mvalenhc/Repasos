import { Router } from "express";

const LoginRoute = Router();


LoginRoute.get("/google", (req,res)=>{
   
   const id = (req.user.id);
   const name = req.user.displayName;
   const email = req.user.emails[0].value;

   res.render("backoffice",{nombre:" "});
});


 export default LoginRoute;