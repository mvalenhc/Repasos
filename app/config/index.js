import app from "../app.js";
import message from "./message.js";


// establezco entornos
 export const caseEntorno = () => {

    switch(process.env.NODE_ENV){
        case "developer":
        message(`estas en el puerto${app.get("PORT")}`,"success");
        break;
    case "qa":
        message(`estas en el puerto${app.get("PORT")}`,"warning");
        break;
    case "production":
        message(`estas en el puerto${app.get("PORT")}`,"danger");
        break; 
    default:
        message(`estas en el puerto${app.get("PORT")}`,"white");
        break;
    }
}

