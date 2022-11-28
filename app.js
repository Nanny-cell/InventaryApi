import express from "express";
import productosRoutes from "./routes/productos.js";
import usuarioRoutes from "./routes/usuarios.js";
import { dbConnection } from './database/config.js';

const app = express();
dbConnection();
app.use(express.json());

/* Peticiones HTTP
        Get: Obetener informacion   -->READ
        Post: Agregar informacion  -->Create
        Put: Actualizar informacion (Pequeñas partes de la info)  -->Actualizar
        Patch: Actualizar infomarcion  (Informacion completa) -->Actualizar
        Delete: Eliminar hijo --> Eliminar
*/

//lisener agente que siempre esta escuchando el proyecto

app.use('/usuarios', usuarioRoutes);
app.use('/productos',productosRoutes);
app.get('/', ( req, res ) => {
    res.send('Hola mundo');
})//url a la cual le vamos a hacer la peticion


app.listen(3000, () => {
    console.log('Servidor Online :)');
});
