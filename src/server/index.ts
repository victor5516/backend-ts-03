import express from 'express'


// Creamos una instacia de express
const app = express();

// Configuración para el servidor
app.use(express.json());


// ruta de prueba
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;