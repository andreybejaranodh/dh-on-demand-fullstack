require('dotenv').config();
const express = require('express');
const path = require('path');

const roleRoutes = require('./routes/role');
const userRoutes = require('./routes/user');
const movieRoutes = require('./routes/movie');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/role', roleRoutes);
app.use('/user', userRoutes);
app.use('/movie', movieRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 