import { Router } from "express";

const dash= Router();


dash.get('/inicio', (req, res)=>{
res.render('dash');
/* console.log('Logueo Exitoso'); */
});

export default dash;