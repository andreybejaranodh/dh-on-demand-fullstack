/*
 Con este script se enseñan los conceptos base para crear base de datos, tablas y sus campos,
 la idea es mostrar los diferentes tipos de los campos, tener en cuenta que en MySQL y MariaDB no existe el tipo BOOLEAN
 este es TINYINT(1) donde se almacena 1 si es TRUE o 0 si es FALSE.
 al igual mostrar el uso de DEFAULT para establecer el valor por defecto en caso que al momento de insertar un registro este
 campo tome un valor por defecto si no se ingresa valor, tambien se muestra el ON DELETE CASCADE que se usa cuando 
 se borra un registro en la tabla de referencia entonces se borra en la tabla que tiene la llave foranea, esto se usa mucho 
 en las tablas intermedias o pivote
 */
CREATE DATABASE IF NOT EXISTS liteflix_db;

USE liteflix_db;

-- -----------------------------------------------------
-- Table `roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(64) NOT NULL
);

-- -----------------------------------------------------
-- Table `languages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS languages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(64) NOT NULL
);

-- -----------------------------------------------------
-- Table `subtitles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS subtitles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(64) NOT NULL
);

-- -----------------------------------------------------
-- Table `directors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS directors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  avatar TEXT NULL,
  bio TEXT NULL
);

-- -----------------------------------------------------
-- Table `actors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS actors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  avatar TEXT NULL,
  bio TEXT NULL
);

-- -----------------------------------------------------
-- Table `movie_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS movie_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(64) NOT NULL
);

-- -----------------------------------------------------
-- Table `movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  length INT NOT NULL,
  release_date DATE NULL,
  rating INT NULL
);

-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  email VARCHAR(256) NOT NULL,
  password TEXT NOT NULL,
  avatar TEXT NULL,
  roles_id INT NOT NULL,
  FOREIGN KEY (roles_id) REFERENCES roles(id)
);

-- -----------------------------------------------------
-- Table `movie_images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS movie_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  url TEXT NOT NULL,
  movies_id INT NOT NULL,
  FOREIGN KEY (movies_id) REFERENCES movies(id)
);

-- -----------------------------------------------------
-- Table `movies_has_actors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS movies_has_actors (
  movies_id INT NOT NULL,
  actors_id INT NOT NULL,
  FOREIGN KEY (movies_id) REFERENCES movies(id) ON DELETE CASCADE,
  FOREIGN KEY (actors_id) REFERENCES actors(id) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `movies_has_directors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS movies_has_directors (
  movies_id INT NOT NULL,
  directors_id INT NOT NULL,
  FOREIGN KEY (movies_id) REFERENCES movies(id) ON DELETE CASCADE,
  FOREIGN KEY (directors_id) REFERENCES directors(id) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `movies_has_movie_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS movies_has_movie_categories (
  movies_id INT NOT NULL,
  movie_categories_id INT NOT NULL,
  FOREIGN KEY (movies_id) REFERENCES movies(id) ON DELETE CASCADE,
  FOREIGN KEY (movie_categories_id) REFERENCES movie_categories (id) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `movies_has_subtitles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS movies_has_subtitles (
  movies_id INT NOT NULL,
  subtitles_id INT NOT NULL,
  FOREIGN KEY (movies_id) REFERENCES movies(id) ON DELETE CASCADE,
  FOREIGN KEY (subtitles_id) REFERENCES subtitles(id) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `movies_has_languages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS movies_has_languages (
  movies_id INT NOT NULL,
  languages_id INT NOT NULL,
  FOREIGN KEY (movies_id) REFERENCES movies(id) ON DELETE CASCADE,
  FOREIGN KEY (languages_id) REFERENCES languages(id) ON DELETE CASCADE
);