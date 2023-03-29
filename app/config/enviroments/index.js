import path from "path";
// libreria para rutas
import dotenv from "dotenv"
// libreria para enviroments


dotenv.config({
    "path":path.resolve(__dirname,`${process.env.NODE_ENV}.env`)
})