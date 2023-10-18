import express from 'express'
import bodyParser from "body-parser";
//importamos las rutas
import courseRoutes from './routes/course.routes';
//importamos los handlers
import { handleError } from "../handlers/error.handler";
import { handleResponse } from "../handlers/response.handler";
// Creamos una instacia de express
const app = express();

// Configuración para el servidor
app.use(express.json());
//usamos body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ruta de prueba
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//usamos las rutas
app.use("/api/v1", courseRoutes);

//usamos los handlers

app.use(handleResponse);
app.use(handleError);

export default app;