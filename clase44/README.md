# Instalar y configurar Sequelize

1. Instalar dependencias:
``` shell
npm i sequelize-cli sequelize mysql2
```

2. Crear el archivo `.sequelizerc` en la raiz del proyecto y pegar el siguiente contenido:
``` javascript
const path = require('path')   
module.exports = {  
    'config': path.resolve('./src/database/config', 'config.js'),
    'models-path': path.resolve('./src/database/models'),
    'migrations-path': path.resolve('./src/database/migrations'), 
    'seeders-path': path.resolve('./src/database/seeders'), 
}
```

3. en la terminar ejecutar el siguiente comando para inicializar `sequelize`:
``` shell
npx sequelize-cli init
```
Este comando va a leer la configuracion de `sequelizerc` y va a crear la carpeta `database` dentro de `src` con las carpetas `config`(Donde se encuentra el archivo de configuracion para conectarse a la base de datos), `migrations` es la carpeta donde se almancenan las migraciones, `model` es la caperta donde van todos los modelos este comando crea un archivo `index.js` que hace toda la magia para concectarse a la base de datos(**Importante:** Este archivo no se debe modificar), `seeder` es la carpeta donde se almacenan las semillas.

4. vamos al archivo `src/database/config/config.js` y podemos poner este configuracion para que tome los datos de conexion de variables de entorno con `dotenv`:
``` javascript
require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_NAME || "database_development",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT || 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

5. en el archivo `.env` creamos y configuramos las variables de entorno para conectarnos a la base de datos

6. para probar si los datos de conexion son correctos sin necesidad de crear modelos ni controladores podemos ejecutar en una terminar el siguiente comando:
``` shell
npx sequelize-cli db:migrate
```
Si este comando no genera error quiere decir que la configuracion es la correcta.

NPM = Node Package Manager = Administrador de paquetes de node
NPX = Node Package eXecute = Ejecutador de paquetes de node
