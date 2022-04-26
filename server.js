'use strict'

const cors = require('cors');
const express = require('express');
const productoRoutes = require('./producto/productoRoutes');
const bodyparser = require('body-parser');

// Creacion del servidor
const app = express();
app.use(bodyparser.json());

const router = express.Router();

app.use(cors());

app.use('/api', router);
productoRoutes(router);

//Ruta principal
router.get('/', (req, res) => {
  res.send('Hello from home');
});

app.use(router);

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));