
import { Router } from "express";


const Routes = Router();

Routes.get('/', (req,res)=>{
    res.render("backoffice");
})

export default Routes;