require('dotenv').config();
const express = require('express');
const path = require('path');

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
const movieRouter = require('./routes/movie');
const movieApiRouter = require('./routes/api/movie');
const authorizationRouter = require('./routes/api/authorizarion');
const logMiddleware = require('./middlewares/logMiddleware');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Esto es necesarion para que el body no llegue undefined
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// End: Esto es necesarion para que el body no llegue undefined
app.use(express.static(path.join(__dirname, '../public')));
app.use(logMiddleware);

// Start imprmenting routes
app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/movie', movieRouter);

app.use('/auth', authorizationRouter);
app.use('/api/movie', movieApiRouter);
// End: imprmenting routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});