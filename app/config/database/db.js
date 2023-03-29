import { createPool} from "mysql2/promise";
// funcion de sql que permite conecion a base de datos

 export const pool =createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});
// esta informacion la encontramos en los enviroments