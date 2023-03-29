import express  from "express";   
//  requiero el paquete express

import message from "./config/message.js";
// importo el paquete colors

import enviroments from "./config/enviroments";
import allRoutes  from "./routes/user.routes";

const app = express();
// variable app-funcion app
app.set("PORT",process.env.PORT || 3000);
app.use(express.json());
app.use("/api",allRoutes);


// app.listen(app.get("PORT"),()=>{
//     // console.log("hola mundo");
//     message(`esta conectado al puerto:${app.get("PORT")}`,"success");
// })
// usar las funciones del expressn

// hola esto es una pruebita
export default app;