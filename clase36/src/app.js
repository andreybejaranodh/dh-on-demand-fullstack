require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session')

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
const movieRouter = require('./routes/movie');
// API Routes
const movieApiRouter = require('./routes/api/movie');
const userApiRouter = require('./routes/api/user');
const authorizationRouter = require('./routes/api/authorizarion');
// End: API Routes
const logMiddleware = require('./middlewares/logMiddleware');
const authenticationMiddleware = require('./middlewares/authenticationMiddleware');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Esto es necesarion para que el body no llegue undefined
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// End: Esto es necesarion para que el body no llegue undefined
app.use(express.static(path.join(__dirname, '../public')));
app.use(logMiddleware);
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(authenticationMiddleware);

// Start imprmenting routes
app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/movie', movieRouter);

app.use('/auth', authorizationRouter);
app.use('/api/movie', movieApiRouter);
app.use('/api/user', userApiRouter);
// End: imprmenting routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});