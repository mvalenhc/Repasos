import { Router } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

const dash= Router();


dash.get('/inicio', (req, res)=>{

    if(req.cookies.ckvalenuuu){
        try {
            const token = jwt.verify(req.cookies.ckvalenuuu,
                process.env.SECRET_KEY);

                res.render('dash',{
                    "nombre": token.nombre,
                    "foto": token.foto,
                    "menu": 0
                });
        } catch (error) {
            res.redirect("/")
        }



        res.render('dash');
    }else{
        res.redirect("/")
    }

/* console.log('Logueo Exitoso'); */
});

dash.get("/usuario", (req, res)=>{
    if(req.cookies.ckvalenuuu){
        try {
            const token = jwt.verify(req.cookies.ckvalenuuu,
                process.env.SECRET_KEY);

                res.render('dash',{
                    "nombre": token.nombre,
                    "foto": token.foto,
                    "menu": 1
                });
        } catch (error) {
            res.redirect("/")
        }



        res.render('dash');
    }else{
        res.redirect("/")
    }
})

dash.get("/salir",(req,res)=>{
    res.clearCookie("ckvalenuuu");
    res.redirect("/")

})

export default dash;