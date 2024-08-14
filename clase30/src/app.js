// Requerimos express
require('dotenv').config();
const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/main');

// Creamos la app express
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', mainRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started on http://localhost:' + port);
});

