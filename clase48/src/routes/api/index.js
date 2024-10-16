const express = require('express');

const moviesApiRoutes = require('./movie');
const usersApiRoutes = require('./user');
const rolesApiRoutes = require('./role');

const apiRouter = express.Router();

apiRouter.use('/movie', moviesApiRoutes);
apiRouter.use('/user', usersApiRoutes);
apiRouter.use('/role', rolesApiRoutes);

module.exports = apiRouter;



